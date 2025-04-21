import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { JobListing } from "@/types/job";

interface JobListProps {
  jobs: JobListing[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Link href={`/jobs/${job.id}`} key={job.id}>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <Image
                  src={job.company.logo}
                  alt={job.company.name}
                  width={60}
                  height={60}
                  className="rounded-md"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-semibold text-gray-900 truncate">{job.title}</h4>
                <p className="text-sm text-gray-600">{job.company.name}</p>
                <div className="mt-2 flex flex-wrap gap-y-2">
                  <div className="flex items-center text-sm text-gray-500 mr-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mr-4">
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
              <div className="flex-shrink-0 ml-2">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                  {job.postedAt}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}