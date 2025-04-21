import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, Building, Globe } from "lucide-react";
import { companies } from "@/data/jobs";

export default function CompaniesPage() {
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
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Companies</h2>
          <p className="text-gray-600">Discover great places to work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Link href={`/companies/${company.id}`} key={company.id}>
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
                <div className="h-32 bg-gray-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{company.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {company.location}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{company.description}</p>
                  <div className="flex flex-wrap gap-y-2">
                    <div className="flex items-center text-sm text-gray-500 mr-4">
                      <Building className="h-4 w-4 mr-1" />
                      {company.industry}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      {company.size}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
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