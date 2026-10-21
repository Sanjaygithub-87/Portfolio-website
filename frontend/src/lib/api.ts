export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : '');

export interface ContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface StatsResponse {
  visits: number;
  likes: number;
  resumeDownloads: number;
}

export async function submitContactMessage(payload: ContactPayload) {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/contact` : '/api/contact';
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    return {
      ok: response.ok,
      message: data.message || (response.ok ? 'Message sent successfully!' : 'Failed to send message.'),
      data: data.data,
    };
  } catch (error: any) {
    console.error('Contact API error:', error);
    return {
      ok: false,
      message: 'Could not connect to the backend server. Please email Sanjay directly at Sanjayedu045@gmail.com.',
    };
  }
}

export async function fetchPortfolioStats(): Promise<StatsResponse> {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/stats` : '/api/stats';
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('Stats request failed');
    const json = await response.json();
    return json.data || { visits: 142, likes: 47, resumeDownloads: 23 };
  } catch (err) {
    return { visits: 142, likes: 47, resumeDownloads: 23 };
  }
}

export async function recordVisit(): Promise<number | null> {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/stats/visit` : '/api/stats/visit';
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) return null;
    const json = await response.json();
    return json.visits || null;
  } catch {
    return null;
  }
}

export async function sendLike(): Promise<number | null> {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/stats/like` : '/api/stats/like';
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) return null;
    const json = await response.json();
    return json.likes || null;
  } catch {
    return null;
  }
}

export async function recordResumeDownload(): Promise<number | null> {
  try {
    const url = API_BASE_URL ? `${API_BASE_URL}/api/stats/resume-download` : '/api/stats/resume-download';
    const response = await fetch(url, { method: 'POST' });
    if (!response.ok) return null;
    const json = await response.json();
    return json.resumeDownloads || null;
  } catch {
    return null;
  }
}
