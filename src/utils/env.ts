
// Environment configuration utility for secure handling of environment variables
export const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = import.meta.env[key];
  
  if (!value && !defaultValue) {
    console.warn(`Environment variable ${key} is not defined`);
    return '';
  }
  
  return value || defaultValue || '';
};

// Validate environment variables are properly configured
export const validateEnvironment = (): boolean => {
  const requiredVars = ['VITE_APP_TITLE'];
  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing environment variables:', missingVars);
    return false;
  }
  
  return true;
};

// Get API base URL with fallback
export const getApiBaseUrl = (): string => {
  return getEnvVar('VITE_API_BASE_URL', window.location.origin);
};
