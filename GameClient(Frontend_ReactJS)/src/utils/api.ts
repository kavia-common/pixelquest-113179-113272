const API_BASE = "/api"; // Configure as needed

// PUBLIC_INTERFACE
export async function fetchLeaderboard() {
  // Reserved for extensibility: connect to FastAPI backend when ready
  return fetch(`${API_BASE}/leaderboard`).then((r) => r.json());
}
