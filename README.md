# Developer Blocker Tracking System

A small local application for developers to report blockers and project managers to track them. This repository is a technical assessment; see [ASSESSMENT.md](ASSESSMENT.md).

## Architecture

```text
React Native / Expo  -- HTTP JSON / REST -->  FastAPI  -->  SQLModel ORM  -->  SQLite
```

The Expo app displays and submits blockers. FastAPI validates requests and implements the API; SQLModel maps Python objects to records in a local SQLite database. Data stays in `backend/blockers.db` between restarts.

## Prerequisites

Install Python 3.10 or newer, Node.js 20.19.4 or newer (Node 22 LTS recommended), and npm. Install Expo Go on a physical device, or set up an Android emulator / iOS simulator. The computer and phone must be on the same network for LAN access.

## Backend setup

In a terminal from the repository root:

```sh
cd backend
python -m venv .venv
```

Activate the environment: `source .venv/bin/activate` on macOS/Linux, or `.venv\Scripts\Activate.ps1` in Windows PowerShell (or `.venv\Scripts\activate.bat` in Command Prompt). Then run:

```sh
python -m pip install -r requirements.txt
python seed.py
python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

Seeding creates the database and sample data if it is empty, and leaves existing data alone on subsequent runs. The server also creates missing tables at startup. Visit [http://localhost:8000/docs](http://localhost:8000/docs) for interactive API documentation. The description-edit endpoint is available there as an additional operation to investigate.

## Frontend setup

Open a second terminal:

```sh
cd frontend
npm install
```

Copy `.env.example` to `.env`, then set `EXPO_PUBLIC_API_URL` to the backend address reachable from the device. `http://localhost:8000` works for a browser or iOS simulator on the same computer; use `http://10.0.2.2:8000` for the standard Android emulator. A physical phone's `localhost` refers to the phone itself, not your computer. Find your computer's LAN IP (`ipconfig` on Windows; `ifconfig` or network settings on macOS/Linux), and use e.g. `http://192.168.1.25:8000`. Allow inbound TCP port 8000 through the computer's firewall if needed. The frontend and backend use plain HTTP for local development.

```sh
npm start
```

Scan the QR code with Expo Go, or press `a` for an installed Android emulator, `i` for an iOS simulator on macOS, or `w` for a web preview. Restart Expo after changing `.env`. Verify the API address in the device's browser if requests cannot connect.

## Known issues

This assessment is intentionally incomplete and contains bugs. Investigate the application and complete the tasks in [ASSESSMENT.md](ASSESSMENT.md).
