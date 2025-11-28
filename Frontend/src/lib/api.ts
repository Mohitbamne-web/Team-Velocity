const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

type RequestOptions = {
  method?: string;
  token?: string | null;
  body?: unknown;
  headers?: Record<string, string>;
};

export async function apiRequest<T = any>(
  path: string,
  { method = 'GET', token, body, headers = {} }: RequestOptions = {}
): Promise<T> {
  const requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers
  };

  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: requestHeaders,
    body: body ? JSON.stringify(body) : undefined
  });

  let data: any = null;
  try {
    data = await response.json();
  } catch (error) {
    // Ignore JSON parse errors for empty responses
  }

  if (!response.ok) {
    const message = data?.message || 'Request failed';
    throw new Error(message);
  }

  return data;
}

export { API_BASE_URL };

