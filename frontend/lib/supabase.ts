import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
};

export type JobPosting = {
  id: string;
  title: string;
  description: string;
  location: string;
  job_type: string;
  experience_required: string;
  salary_range: string;
  is_active: boolean;
  posted_at: string;
  created_at: string;
};

export type ContactInquiry = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  inquiry_type: string;
};

export type Testimonial = {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  is_featured: boolean;
  created_at: string;
};
