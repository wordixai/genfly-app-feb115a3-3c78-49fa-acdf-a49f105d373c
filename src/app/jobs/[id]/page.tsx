import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, DollarSign, Building, Globe, Users, Briefcase } from "lucide-react";
import { jobListings } from "@/data/jobs";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobListings.find(job => job.id === params.id);
  
  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h1>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">JobBoard</h1>
            <nav className="flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-gray-600 font-medium">Jobs</Link>
              <Link href="/companies" className="text-gray-500 hover:text-gray-900 font-medium">Companies</Link>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Post a Job</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Jobs
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <Image
                  src={job.company.logo}
                  alt={job.company.name}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{job.title}</h1>
                <Link href={`/companies/${job.company.id}`} className="text-lg text-blue-600 hover:text-blue-800 font-medium">
                  {job.company.name}
                </Link>
                <div className="mt-3 flex flex-wrap gap-y-2">
                  <div className="flex items-center text-sm text-gray-500 mr-6">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mr-6">
                    <Clock className="h-4 w-4 mr-1" />
                    {job.type}
                  </div>
                  {job.salary && (
                    <div className="flex items-center text-sm text-gray-500">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Apply Now
                </button>
                <div className="mt-2 text-sm text-gray-500 text-center">
                  Posted {job.postedAt}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p>{job.description}</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h2>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Industry</h4>
                        <p className="text-sm text-gray-600">{job.company.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Company Size</h4>
                        <p className="text-sm text-gray-600">{job.company.size}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Headquarters</h4>
                        <p className="text-sm text-gray-600">{job.company.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Website</h4>
                        <a href={job.company.website} className="text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                          {job.company.website.replace('https://', '')}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link href={`/companies/${job.company.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                      View Company Profile →
                    </Link>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Apply for this job</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Ready to apply for this position? Click the button below to submit your application.
                  </p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-500">© 2023 JobBoard. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Contact</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}