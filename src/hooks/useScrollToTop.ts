import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (targetRoutes: string[] = []) => {
  const location = useLocation();

  useEffect(() => {
    // If no specific routes are provided, scroll to top for all route changes
    if (targetRoutes.length === 0 || targetRoutes.includes(location.pathname)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, targetRoutes]);
};