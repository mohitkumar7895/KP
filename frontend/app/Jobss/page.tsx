'use client';

import { useEffect, useState } from 'react';
import { supabase, JobPosting } from '@/lib/supabase';
import { MapPin, Clock, Briefcase, DollarSign, Calendar, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Jobs() {
  const { toast } = useToast();
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationLoading, setApplicationLoading] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .eq('is_active', true)
        .order('posted_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const getJobTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'Full-time': 'bg-green-100 text-green-700 border-green-200',
      'Part-time': 'bg-blue-100 text-blue-700 border-blue-200',
      'Contract': 'bg-orange-100 text-orange-700 border-orange-200',
      'Temporary': 'bg-purple-100 text-purple-700 border-purple-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const openApplicationModal = (job: JobPosting) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    // Reset form data
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const closeApplicationModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  const handleApplicationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationLoading(true);

      try {
      // Create application data
      const application = {
        name: applicationData.name,
        email: applicationData.email,
        phone: applicationData.phone,
        company: '', // Not needed for job applications
        message: `Application for position: ${selectedJob?.title}\n\n${applicationData.message}`,
        inquiry_type: 'job_seeker',
      };

      // Send to backend API
      const response = await fetch('http://localhost:3001/api/job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...applicationData,
          jobTitle: selectedJob?.title
        }),
      });

      if (!response.ok) throw new Error('Failed to submit application');

      // Also save to contact_inquiries table
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([application]);

      if (error) throw error;      toast({
        title: 'Application Submitted Successfully!',
        description: 'We will review your application and get back to you soon.',
      });

      // Close modal and reset form
      closeApplicationModal();
    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setApplicationLoading(false);
    }
  };

  return (
    <section id="jobs" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              Current Openings
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Next
            <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Career Opportunity
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore exciting job opportunities across various industries and locations. Your dream job awaits!
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                  
                </div>
              </div>
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                    {job.title}
                  </h3>
                  <Badge className={`${getJobTypeColor(job.job_type)} border`}>
                    {job.job_type}
                  </Badge>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {job.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                  {job.experience_required && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{job.experience_required}</span>
                    </div>
                  )}
                  {job.salary_range && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>{job.salary_range}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>Posted {formatDate(job.posted_at)}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                  onClick={() => openApplicationModal(job)}
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No Current Openings</h3>
            <p className="text-gray-600 mb-6">Check back soon for new opportunities or submit your profile.</p>
            <Button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Submit Your Profile
            </Button>
          </div>
        )}

        {/* Job Application Modal */}
        {isModalOpen && selectedJob && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Apply for Position</h3>
                  <button 
                    onClick={closeApplicationModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-blue-900">{selectedJob.title}</h4>
                  <p className="text-sm text-blue-700">{selectedJob.location}</p>
                </div>

                <form onSubmit={handleApplicationSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={applicationData.name}
                      onChange={handleApplicationChange}
                      required
                      placeholder="John Doe"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={applicationData.email}
                      onChange={handleApplicationChange}
                      required
                      placeholder="john@example.com"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={handleApplicationChange}
                      required
                      placeholder="+91 9999999999"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Cover Letter / Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={applicationData.message}
                      onChange={handleApplicationChange}
                      rows={4}
                      placeholder="Tell us why you're interested in this position..."
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={applicationLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                  >
                    {applicationLoading ? 'Submitting Application...' : 'Submit Application'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}