from fastapi.testclient import TestClient

from new_app_api.main import app

client = TestClient(app)


def test_health_returns_ok() -> None:
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_text_stats_counts_words() -> None:
    response = client.post("/v1/text-stats", json={"text": "the cat and the hat"})
    assert response.status_code == 200
    body = response.json()
    assert body["words"] == 5
    assert body["top_words"][0] == ["the", 2]


def test_text_stats_rejects_empty_text() -> None:
    assert client.post("/v1/text-stats", json={"text": ""}).status_code == 422
