from sqlmodel import Session, select

from app.database import create_db_and_tables, engine
from app.models import Blocker, Status


def main():
    create_db_and_tables()
    with Session(engine) as session:
        if session.exec(select(Blocker.id).limit(1)).first() is not None:
            print("Database already contains blockers; leaving existing data unchanged.")
            return
        session.add_all([
            Blocker(developer="John", title="Unable to connect to backend", description="Receiving a 500 error", status=Status.open),
            Blocker(developer="Sarah", title="Authentication issue", description="Unable to log in", status=Status.resolved),
        ])
        session.commit()
        print("Added two sample blockers.")


if __name__ == "__main__":
    main()
