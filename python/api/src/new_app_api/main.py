"""FastAPI app. Private on Vercel: reachable only from the Next.js service through its binding."""

import re
from collections import Counter

from fastapi import FastAPI

from new_app_api.models import Health, TextStatsRequest, TextStatsResponse

app = FastAPI(title="new-app-api", docs_url="/docs", redoc_url=None)

TOP_WORDS_LIMIT = 5


@app.get("/health")
def health() -> Health:
    return Health(status="ok")


@app.post("/v1/text-stats")
def text_stats(body: TextStatsRequest) -> TextStatsResponse:
    # Example endpoint: replace with logic that needs a Python-only library.
    words = re.findall(r"[a-zA-Z']+", body.text.lower())
    return TextStatsResponse(
        words=len(words),
        characters=len(body.text),
        top_words=Counter(words).most_common(TOP_WORDS_LIMIT),
    )
