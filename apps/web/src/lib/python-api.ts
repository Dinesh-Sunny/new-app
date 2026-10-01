// Typed client for the private Python sidecar (python/api). Server-side only.
// On Vercel the service binding injects BACKEND_INTERNAL_URL at runtime; locally set PYTHON_API_URL.
const DEFAULT_LOCAL_URL = "http://127.0.0.1:8000";

export type TextStats = {
  words: number;
  characters: number;
  top_words: [string, number][];
};

function baseUrl(): string {
  return (
    process.env.BACKEND_INTERNAL_URL ??
    process.env.PYTHON_API_URL ??
    DEFAULT_LOCAL_URL
  );
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(new URL(path, baseUrl()), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`Python API ${path} failed with ${response.status}`);
  }
  return (await response.json()) as T;
}

export function getTextStats(text: string): Promise<TextStats> {
  return post<TextStats>("/v1/text-stats", { text });
}
