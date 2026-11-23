from pathlib import Path

from sqlmodel import Session, SQLModel, create_engine

# Keep the database in backend/ regardless of the current working directory.
DATABASE_PATH = Path(__file__).resolve().parent.parent / "blockers.db"
engine = create_engine(f"sqlite:///{DATABASE_PATH.as_posix()}", connect_args={"check_same_thread": False})


def create_db_and_tables():
    SQLModel.metadata.create_all(engine)


def get_session():
    with Session(engine) as session:
        yield session
