export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  location: string;
  size: string;
  industry: string;
}

export interface JobListing {
  id: string;
  title: string;
  company: Company;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary?: string;
  postedAt: string;
  tags: string[];
}