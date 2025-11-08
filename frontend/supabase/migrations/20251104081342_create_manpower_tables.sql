/*
  # Manpower Recruitment Website Database Schema

  ## Overview
  Creates the database structure for a professional manpower recruitment website with services, job postings, contact inquiries, and testimonials.

  ## New Tables
  
  ### `services`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Service name (e.g., "Workforce Management")
  - `description` (text) - Detailed service description
  - `icon` (text) - Icon identifier for UI
  - `display_order` (integer) - Order for displaying services
  - `is_active` (boolean) - Active/inactive status
  - `created_at` (timestamptz) - Creation timestamp

  ### `job_postings`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Job title
  - `description` (text) - Job description
  - `location` (text) - Job location
  - `job_type` (text) - Full-time, Part-time, Contract, etc.
  - `experience_required` (text) - Required experience
  - `salary_range` (text) - Salary information (optional)
  - `is_active` (boolean) - Active/inactive status
  - `posted_at` (timestamptz) - Posting date
  - `created_at` (timestamptz) - Creation timestamp

  ### `contact_inquiries`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Inquirer's name
  - `email` (text) - Contact email
  - `phone` (text) - Contact phone
  - `company` (text, optional) - Company name
  - `message` (text) - Inquiry message
  - `inquiry_type` (text) - Type of inquiry (job_seeker, employer, general)
  - `status` (text) - Status (new, in_progress, resolved)
  - `created_at` (timestamptz) - Submission timestamp

  ### `testimonials`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Client name
  - `company` (text) - Company name
  - `position` (text) - Position/title
  - `content` (text) - Testimonial content
  - `rating` (integer) - Rating out of 5
  - `is_featured` (boolean) - Featured testimonial flag
  - `created_at` (timestamptz) - Creation timestamp

  ### `gallery_images`
  - `id` (uuid, primary key) - Unique identifier
  - `title` (text) - Image title
  - `description` (text, optional) - Image description
  - `image_url` (text) - Image URL
  - `category` (text) - Image category
  - `display_order` (integer) - Display order
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access for active content
  - Authenticated write access for admin operations
  - Contact inquiries: anyone can insert, admins can read/update

  ## Important Notes
  - All tables use UUID for primary keys with automatic generation
  - Timestamps use UTC timezone
  - Boolean fields have meaningful defaults
  - Tables are indexed for common query patterns
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  icon text NOT NULL,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create job postings table
CREATE TABLE IF NOT EXISTS job_postings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  location text NOT NULL,
  job_type text NOT NULL,
  experience_required text,
  salary_range text,
  is_active boolean DEFAULT true,
  posted_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create contact inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  message text NOT NULL,
  inquiry_type text DEFAULT 'general',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  position text NOT NULL,
  content text NOT NULL,
  rating integer DEFAULT 5,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create gallery images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text,
  image_url text NOT NULL,
  category text DEFAULT 'general',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- RLS Policies for services
CREATE POLICY "Anyone can view active services"
  ON services FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can insert services"
  ON services FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can update services"
  ON services FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete services"
  ON services FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for job postings
CREATE POLICY "Anyone can view active jobs"
  ON job_postings FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can insert jobs"
  ON job_postings FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can update jobs"
  ON job_postings FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete jobs"
  ON job_postings FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for contact inquiries
CREATE POLICY "Anyone can submit inquiries"
  ON contact_inquiries FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Admins can view inquiries"
  ON contact_inquiries FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can update inquiry status"
  ON contact_inquiries FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete inquiries"
  ON contact_inquiries FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for testimonials
CREATE POLICY "Anyone can view featured testimonials"
  ON testimonials FOR SELECT
  USING (is_featured = true);

CREATE POLICY "Admins can insert testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (true);

-- RLS Policies for gallery images
CREATE POLICY "Anyone can view gallery images"
  ON gallery_images FOR SELECT
  USING (true);

CREATE POLICY "Admins can insert gallery images"
  ON gallery_images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can update gallery images"
  ON gallery_images FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admins can delete gallery images"
  ON gallery_images FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active, display_order);
CREATE INDEX IF NOT EXISTS idx_jobs_active ON job_postings(is_active, posted_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_status ON contact_inquiries(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_testimonials_featured ON testimonials(is_featured, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_gallery_category ON gallery_images(category, display_order);

-- Insert sample services
INSERT INTO services (title, description, icon, display_order) VALUES
('Workforce Management', 'Comprehensive workforce planning and management solutions to optimize your human resources and improve operational efficiency.', 'Users', 1),
('Administrative Support', 'Professional administrative services including payroll, compliance, documentation, and day-to-day operational support.', 'FileText', 2),
('HR Outsourcing', 'Complete HR outsourcing services covering recruitment, training, performance management, and employee relations.', 'Building2', 3),
('Candidate Screening', 'Thorough background verification, skill assessment, and candidate screening to ensure quality hiring decisions.', 'UserCheck', 4),
('Recruitment Solutions', 'End-to-end recruitment services from job posting to onboarding, tailored to your industry and requirements.', 'Briefcase', 5),
('Training & Development', 'Customized training programs to enhance employee skills and drive organizational growth.', 'GraduationCap', 6)
ON CONFLICT DO NOTHING;

-- Insert sample testimonials
INSERT INTO testimonials (name, company, position, content, rating, is_featured) VALUES
('Rajesh Kumar', 'Tech Solutions Pvt Ltd', 'HR Director', 'Outstanding service! They helped us scale our team efficiently with top-quality candidates. Their screening process is thorough and reliable.', 5, true),
('Priya Sharma', 'Manufacturing Industries', 'Operations Manager', 'Professional and responsive team. Their workforce management solutions have significantly reduced our operational costs.', 5, true),
('Amit Patel', 'Retail Chain Ltd', 'CEO', 'Best manpower consultancy we have worked with. They understand our needs and deliver exceptional results consistently.', 5, true)
ON CONFLICT DO NOTHING;

-- Insert sample job postings
INSERT INTO job_postings (title, description, location, job_type, experience_required, salary_range) VALUES
('Production Supervisor', 'Looking for experienced production supervisor to manage manufacturing operations, quality control, and team management.', 'Kanpur, Uttar Pradesh', 'Full-time', '3-5 years', '₹3-5 LPA'),
('HR Executive', 'Seeking HR professional for recruitment, employee relations, and HR operations. Must have excellent communication skills.', 'Noida, Uttar Pradesh', 'Full-time', '2-4 years', '₹2.5-4 LPA'),
('Security Guards', 'Required security personnel for corporate and industrial facilities. Training will be provided.', 'Multiple Locations', 'Full-time', '0-2 years', '₹15,000-20,000/month'),
('Administrative Assistant', 'Need organized individual for administrative tasks, documentation, and office management.', 'Kanpur, Uttar Pradesh', 'Full-time', '1-3 years', '₹2-3 LPA')
('Administrative Assistant', 'Need organized individual for administrative tasks, documentation, and office management.', 'Kanpur, Uttar Pradesh', 'Full-time', '1-3 years', '₹2-3 LPA')
ON CONFLICT DO NOTHING;