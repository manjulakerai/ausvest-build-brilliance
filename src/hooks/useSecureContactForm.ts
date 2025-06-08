
import { useState } from 'react';
import { contactFormSchema, type ContactFormData, sanitizeInput, checkRateLimit } from '@/utils/contactValidation';
import { useToast } from '@/hooks/use-toast';

interface UseSecureContactFormReturn {
  formData: Partial<ContactFormData>;
  errors: Partial<Record<keyof ContactFormData, string>>;
  isSubmitting: boolean;
  isValid: boolean;
  updateField: (field: keyof ContactFormData, value: string) => void;
  validateField: (field: keyof ContactFormData) => void;
  submitForm: () => Promise<void>;
  resetForm: () => void;
}

export const useSecureContactForm = (): UseSecureContactFormReturn => {
  const [formData, setFormData] = useState<Partial<ContactFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const updateField = (field: keyof ContactFormData, value: string) => {
    // Sanitize input
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [field]: sanitizedValue
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateField = (field: keyof ContactFormData) => {
    try {
      const fieldSchema = contactFormSchema.shape[field];
      fieldSchema.parse(formData[field]);
      
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    } catch (error: any) {
      setErrors(prev => ({
        ...prev,
        [field]: error.errors[0]?.message || 'Invalid input'
      }));
    }
  };

  const isValid = () => {
    try {
      contactFormSchema.parse(formData);
      return Object.keys(errors).length === 0;
    } catch {
      return false;
    }
  };

  const submitForm = async () => {
    // Check rate limiting
    if (!checkRateLimit('contact_form', 3, 300000)) { // 3 attempts per 5 minutes
      toast({
        title: "Rate limit exceeded",
        description: "Too many submission attempts. Please wait before trying again.",
        variant: "destructive",
      });
      return;
    }

    // Validate entire form
    try {
      const validatedData = contactFormSchema.parse(formData);
      setIsSubmitting(true);

      // Here you would normally send to your backend
      // For now, we'll simulate the submission
      console.log('Secure form submission:', validatedData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Message sent successfully",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      resetForm();
    } catch (error: any) {
      // Set validation errors
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      error.errors?.forEach((err: any) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);

      toast({
        title: "Validation error",
        description: "Please check your input and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({});
    setErrors({});
  };

  return {
    formData,
    errors,
    isSubmitting,
    isValid: isValid(),
    updateField,
    validateField,
    submitForm,
    resetForm
  };
};
