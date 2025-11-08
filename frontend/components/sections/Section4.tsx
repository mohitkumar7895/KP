'use client';

import { useEffect, useState } from 'react';
import { supabase, JobPosting } from '@/lib/supabase';
import { MapPin, Clock, Briefcase, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Jobs() {
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [loading, setLoading] = useState(true);

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
        .limit(6);

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

  return (
    <section id="jobs" className="py-01 bg-gradient-to-br from-white to-slate-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

       
       

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 text-center border border-blue-100">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Looking to Hire?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Post your job openings with us and get access to a pool of pre-screened, qualified candidates ready to join your team.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg text-lg px-8 py-6"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Post a Job
          </Button>
        </div>
      </div>
    </section>
  );
}
