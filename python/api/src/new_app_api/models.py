"""Request/response schemas. Mirror these in apps/web/src/lib/python-api.ts."""

from pydantic import BaseModel, Field


class Health(BaseModel):
    status: str


class TextStatsRequest(BaseModel):
    text: str = Field(min_length=1, max_length=100_000)


class TextStatsResponse(BaseModel):
    words: int
    characters: int
    top_words: list[tuple[str, int]]
