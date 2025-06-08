
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

// Enhanced security validation
export const validateSecurityConfig = (): { isValid: boolean; warnings: string[] } => {
  const warnings: string[] = [];
  
  // Check if we're in production
  const isProduction = import.meta.env.PROD;
  
  if (isProduction) {
    // Production-specific checks
    if (window.location.protocol !== 'https:') {
      warnings.push('Application should be served over HTTPS in production');
    }
    
    if (!import.meta.env.VITE_API_BASE_URL) {
      warnings.push('API base URL should be explicitly set in production');
    }
  }
  
  // Check for development flags in production
  if (isProduction && import.meta.env.DEV) {
    warnings.push('Development mode detected in production build');
  }
  
  return {
    isValid: warnings.length === 0,
    warnings
  };
};

// Initialize security validation on app start
export const initSecurityValidation = (): void => {
  const { isValid, warnings } = validateSecurityConfig();
  
  if (!isValid) {
    console.warn('Security configuration warnings:', warnings);
  }
  
  // Validate environment
  if (!validateEnvironment()) {
    console.warn('Environment validation failed');
  }
};
