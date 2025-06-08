
import { useEffect } from 'react';

const SecurityHeaders = () => {
  useEffect(() => {
    // Add security-related meta tags dynamically if not already present
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    const addHttpEquivTag = (httpEquiv: string, content: string) => {
      if (!document.querySelector(`meta[http-equiv="${httpEquiv}"]`)) {
        const meta = document.createElement('meta');
        meta.httpEquiv = httpEquiv;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Enhanced security headers
    addMetaTag('X-Content-Type-Options', 'nosniff');
    addMetaTag('X-Frame-Options', 'DENY');
    addMetaTag('X-XSS-Protection', '1; mode=block');
    addMetaTag('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Add HSTS header
    addHttpEquivTag('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    
    // Add Permissions Policy
    addMetaTag('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
    
    // Enhanced CSP with stricter policies
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const csp = document.createElement('meta');
      csp.httpEquiv = 'Content-Security-Policy';
      csp.content = [
        "default-src 'self'",
        "script-src 'self' https://cdn.gpteng.co",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
        "font-src 'self' https://fonts.gstatic.com",
        "img-src 'self' data: https: blob:",
        "connect-src 'self' https:",
        "frame-src 'none'",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ].join('; ');
      document.head.appendChild(csp);
    }

    // Add Cross-Origin policies
    addMetaTag('Cross-Origin-Embedder-Policy', 'require-corp');
    addMetaTag('Cross-Origin-Opener-Policy', 'same-origin');
    addMetaTag('Cross-Origin-Resource-Policy', 'same-origin');
  }, []);

  return null;
};

export default SecurityHeaders;
