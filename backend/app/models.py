from enum import Enum

from sqlmodel import Field, SQLModel


class Status(str, Enum):
    open = "open"
    in_progress = "in_progress"
    resolved = "resolved"


class BlockerBase(SQLModel):
    developer: str = Field(min_length=1, max_length=100)
    title: str = Field(min_length=1, max_length=200)
    description: str = Field(min_length=1, max_length=2000)
    status: Status = Status.open


class Blocker(BlockerBase, table=True):
    id: int | None = Field(default=None, primary_key=True)


class BlockerCreate(BlockerBase):
    pass


class BlockerRead(BlockerBase):
    id: int


class StatusUpdate(SQLModel):
    status: Status


class DescriptionUpdate(SQLModel):
    description: str = Field(min_length=1, max_length=2000)
