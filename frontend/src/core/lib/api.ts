import axios, { AxiosInstance } from 'axios';

/**
 * @configuration apiConfig
 * @summary Central API configuration with environment-based URL management
 * @type api-configuration
 * @category core-library
 */
export const apiConfig = {
  // Base URL from environment variables (Vite uses VITE_ prefix)
  baseUrl: (import.meta as any).env?.VITE_API_URL || 'http://localhost:3000',

  // API version
  version: (import.meta as any).env?.VITE_API_VERSION || 'v1',

  // Timeout configuration
  timeout: parseInt((import.meta as any).env?.VITE_API_TIMEOUT || '30000'),

  // Computed URLs for different contexts
  get externalUrl(): string {
    return `${this.baseUrl}/api/${this.version}/external`;
  },

  get internalUrl(): string {
    return `${this.baseUrl}/api/${this.version}/internal`;
  },
};

/**
 * @client publicClient
 * @summary Axios client for PUBLIC API endpoints (no authentication)
 * @type http-client
 * @category core-library
 *
 * @usage
 * Used for endpoints under /api/v1/external/
 * - Login
 * - Registration
 * - Password recovery
 * - Public resources
 */
export const publicClient: AxiosInstance = axios.create({
  baseURL: apiConfig.externalUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * @client authenticatedClient
 * @summary Axios client for AUTHENTICATED API endpoints (requires token)
 * @type http-client
 * @category core-library
 *
 * @usage
 * Used for endpoints under /api/v1/internal/
 * - Task operations
 * - User operations
 * - Protected resources
 */
export const authenticatedClient: AxiosInstance = axios.create({
  baseURL: apiConfig.internalUrl,
  timeout: apiConfig.timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add authentication token
authenticatedClient.interceptors.request.use(
  (config) => {
    // Get token from localStorage or your auth state management
    const token = localStorage.getItem('auth_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
authenticatedClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized - redirect to login
    if (error.response?.status === 401) {
      // Clear auth state
      localStorage.removeItem('auth_token');

      // Redirect to login (adjust based on your routing)
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);
