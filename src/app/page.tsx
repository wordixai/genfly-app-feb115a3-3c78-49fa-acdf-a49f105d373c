import JobSearch from "@/components/JobSearch";
import JobList from "@/components/JobList";
import { jobListings } from "@/data/jobs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">JobBoard</h1>
            <nav className="flex space-x-8">
              <a href="/" className="text-gray-900 hover:text-gray-600 font-medium">Jobs</a>
              <a href="/companies" className="text-gray-500 hover:text-gray-900 font-medium">Companies</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 font-medium">Post a Job</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Find your next opportunity</h2>
          <JobSearch />
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Jobs</h3>
          <JobList jobs={jobListings} />
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