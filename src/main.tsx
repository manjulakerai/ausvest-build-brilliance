import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initSecurityValidation } from '@/utils/env'

// Initialize security validation on app startup
initSecurityValidation();

createRoot(document.getElementById("root")!).render(<App />);
