
import { z } from 'zod';

// Comprehensive validation schema for contact forms
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes')
    .trim(),
  
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters')
    .toLowerCase()
    .trim(),
  
  phone: z
    .string()
    .optional()
    .refine((val) => {
      if (!val) return true;
      // Australian phone number format validation
      const phoneRegex = /^(\+61|0)[2-9]\d{8}$/;
      return phoneRegex.test(val.replace(/\s/g, ''));
    }, 'Please enter a valid Australian phone number'),
  
  projectType: z
    .string()
    .min(1, 'Please select a project type')
    .refine((val) => [
      'Luxury Home Construction',
      'Duplex Development', 
      'Home Renovation & Addition',
      'Commercial Construction',
      'Maintenance Services'
    ].includes(val), 'Invalid project type'),
  
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .trim()
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Sanitize HTML content to prevent XSS
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocols
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
};

// Rate limiting helper (client-side basic implementation)
export const checkRateLimit = (key: string, maxAttempts: number = 3, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]');
  
  // Filter out old attempts outside the time window
  const recentAttempts = attempts.filter((timestamp: number) => now - timestamp < windowMs);
  
  if (recentAttempts.length >= maxAttempts) {
    return false; // Rate limit exceeded
  }
  
  // Add current attempt
  recentAttempts.push(now);
  localStorage.setItem(`rate_limit_${key}`, JSON.stringify(recentAttempts));
  
  return true; // Within rate limit
};
