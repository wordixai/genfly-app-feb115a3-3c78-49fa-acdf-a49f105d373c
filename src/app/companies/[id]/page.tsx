import Image from "next/image";
import Link from "next/link";
import { MapPin, Users, Building, Globe, Mail, Phone } from "lucide-react";
import { companies, jobListings } from "@/data/jobs";

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  const company = companies.find(company => company.id === params.id);
  const companyJobs = jobListings.filter(job => job.company.id === params.id);
  
  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Company Not Found</h1>
          <p className="text-gray-600 mb-6">The company you're looking for doesn't exist or has been removed.</p>
          <Link href="/companies" className="text-blue-600 hover:text-blue-800 font-medium">
            Back to Companies
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
              <Link href="/" className="text-gray-500 hover:text-gray-900 font-medium">Jobs</Link>
              <Link href="/companies" className="text-gray-900 hover:text-gray-600 font-medium">Companies</Link>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Post a Job</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link href="/companies" className="text-blue-600 hover:text-blue-800 font-medium">
            ← Back to Companies
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="h-48 bg-gray-100 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={120}
                className="rounded-md"
              />
            </div>
          </div>
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{company.name}</h1>
            <div className="flex items-center text-gray-500 mb-6">
              <MapPin className="h-5 w-5 mr-1" />
              {company.location}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <section className="mb-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">About {company.name}</h2>
                  <div className="prose max-w-none text-gray-700">
                    <p>{company.description}</p>
                  </div>
                </section>
                
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Open Positions</h2>
                  {companyJobs.length > 0 ? (
                    <div className="space-y-4">
                      {companyJobs.map((job) => (
                        <Link href={`/jobs/${job.id}`} key={job.id}>
                          <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors duration-200">
                            <h3 className="text-lg font-medium text-gray-900 mb-1">{job.title}</h3>
                            <div className="flex flex-wrap gap-y-2 mb-2">
                              <div className="flex items-center text-sm text-gray-500 mr-4">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                {job.type}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {job.tags.slice(0, 3).map((tag) => (
                                <span 
                                  key={tag} 
                                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                  {tag}
                                </span>
                              ))}
                              {job.tags.length > 3 && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  +{job.tags.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600">No open positions at the moment.</p>
                  )}
                </section>
              </div>

              <div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Building className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Industry</h4>
                        <p className="text-sm text-gray-600">{company.industry}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Company Size</h4>
                        <p className="text-sm text-gray-600">{company.size}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Headquarters</h4>
                        <p className="text-sm text-gray-600">{company.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Globe className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Website</h4>
                        <a href={company.website} className="text-sm text-blue-600 hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                          {company.website.replace('https://', '')}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email</h4>
                        <a href={`mailto:contact@${company.website.replace('https://', '')}`} className="text-sm text-blue-600 hover:text-blue-800">
                          contact@{company.website.replace('https://', '')}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gray-400 mt-0.5 mr-3" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                        <p className="text-sm text-gray-600">(555) 123-4567</p>
                      </div>
                    </div>
                  </div>
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