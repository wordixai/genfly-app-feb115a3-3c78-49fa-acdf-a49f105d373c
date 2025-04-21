import { JobListing } from "@/types/job";

export const companies = [
  {
    id: "company-1",
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    description: "TechCorp is a leading technology company specializing in innovative software solutions for businesses of all sizes.",
    website: "https://techcorp.example.com",
    location: "San Francisco, CA",
    size: "1000-5000 employees",
    industry: "Technology"
  },
  {
    id: "company-2",
    name: "DesignHub",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueSUyMGxvZ298ZW58MHx8MHx8fDA%3D",
    description: "DesignHub is a creative agency that helps brands connect with their audiences through stunning visual design and user experiences.",
    website: "https://designhub.example.com",
    location: "New York, NY",
    size: "50-200 employees",
    industry: "Design"
  },
  {
    id: "company-3",
    name: "DataSphere",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "DataSphere specializes in big data analytics and machine learning solutions for enterprise clients.",
    website: "https://datasphere.example.com",
    location: "Austin, TX",
    size: "200-500 employees",
    industry: "Data Science"
  },
  {
    id: "company-4",
    name: "GreenEnergy",
    logo: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdyZWVuJTIwZW5lcmd5fGVufDB8fDB8fHww",
    description: "GreenEnergy is committed to developing sustainable energy solutions for a cleaner future.",
    website: "https://greenenergy.example.com",
    location: "Portland, OR",
    size: "500-1000 employees",
    industry: "Energy"
  },
  {
    id: "company-5",
    name: "HealthPlus",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    description: "HealthPlus is revolutionizing healthcare through innovative technology and patient-centered approaches.",
    website: "https://healthplus.example.com",
    location: "Boston, MA",
    size: "1000-5000 employees",
    industry: "Healthcare"
  }
];

export const jobListings: JobListing[] = [
  {
    id: "job-1",
    title: "Senior Frontend Developer",
    company: companies[0],
    location: "San Francisco, CA",
    type: "Full-time",
    description: "We're looking for a Senior Frontend Developer to join our team and help build beautiful, responsive web applications. You'll work closely with designers and backend developers to create seamless user experiences.",
    requirements: [
      "5+ years of experience with JavaScript and modern frameworks (React, Vue, Angular)",
      "Strong understanding of HTML, CSS, and responsive design",
      "Experience with state management (Redux, Vuex, etc.)",
      "Knowledge of modern build tools and workflows",
      "Bachelor's degree in Computer Science or related field"
    ],
    responsibilities: [
      "Develop and maintain frontend applications using React",
      "Collaborate with UX/UI designers to implement designs",
      "Write clean, maintainable, and efficient code",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with emerging trends and technologies"
    ],
    salary: "$120,000 - $150,000",
    postedAt: "2 days ago",
    tags: ["React", "JavaScript", "CSS", "Frontend", "Senior"]
  },
  {
    id: "job-2",
    title: "UX/UI Designer",
    company: companies[1],
    location: "New York, NY",
    type: "Full-time",
    description: "DesignHub is seeking a talented UX/UI Designer to create exceptional user experiences for our clients. You'll be responsible for the entire design process, from research to final implementation.",
    requirements: [
      "3+ years of experience in UX/UI design",
      "Proficiency with design tools (Figma, Sketch, Adobe XD)",
      "Strong portfolio demonstrating user-centered design process",
      "Experience conducting user research and usability testing",
      "Excellent communication and presentation skills"
    ],
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to ensure proper implementation",
      "Develop and maintain design systems",
      "Present design concepts to clients and stakeholders"
    ],
    salary: "$90,000 - $120,000",
    postedAt: "1 week ago",
    tags: ["UX", "UI", "Figma", "Design", "Research"]
  },
  {
    id: "job-3",
    title: "Data Scientist",
    company: companies[2],
    location: "Remote",
    type: "Full-time",
    description: "Join our data science team to develop machine learning models and extract insights from complex datasets. You'll work on challenging problems across various industries.",
    requirements: [
      "Master's or PhD in Computer Science, Statistics, or related field",
      "3+ years of experience in data science or machine learning",
      "Proficiency in Python and data science libraries (NumPy, Pandas, scikit-learn)",
      "Experience with deep learning frameworks (TensorFlow, PyTorch)",
      "Strong mathematical and statistical background"
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Process and analyze large datasets",
      "Collaborate with engineering teams to deploy models to production",
      "Communicate findings and insights to non-technical stakeholders",
      "Stay current with the latest research and techniques"
    ],
    salary: "$130,000 - $160,000",
    postedAt: "3 days ago",
    tags: ["Python", "Machine Learning", "Data Science", "TensorFlow", "Remote"]
  },
  {
    id: "job-4",
    title: "Renewable Energy Engineer",
    company: companies[3],
    location: "Portland, OR",
    type: "Full-time",
    description: "GreenEnergy is looking for a Renewable Energy Engineer to help design and implement sustainable energy solutions. You'll be at the forefront of our mission to create a cleaner future.",
    requirements: [
      "Bachelor's or Master's degree in Electrical, Mechanical, or Environmental Engineering",
      "3+ years of experience in renewable energy projects",
      "Knowledge of solar, wind, or other renewable energy technologies",
      "Experience with energy modeling and simulation tools",
      "Strong problem-solving and analytical skills"
    ],
    responsibilities: [
      "Design and develop renewable energy systems",
      "Conduct feasibility studies and energy assessments",
      "Collaborate with cross-functional teams on project implementation",
      "Monitor and optimize system performance",
      "Stay current with industry regulations and standards"
    ],
    salary: "$95,000 - $125,000",
    postedAt: "1 week ago",
    tags: ["Renewable Energy", "Engineering", "Sustainability", "Solar", "Wind"]
  },
  {
    id: "job-5",
    title: "Healthcare Software Developer",
    company: companies[4],
    location: "Boston, MA",
    type: "Full-time",
    description: "HealthPlus is seeking a Software Developer to build innovative healthcare applications. You'll work on solutions that directly impact patient care and healthcare delivery.",
    requirements: [
      "3+ years of experience in software development",
      "Proficiency in Java, Python, or similar languages",
      "Experience with healthcare data standards (HL7, FHIR)",
      "Knowledge of database design and SQL",
      "Understanding of healthcare workflows and regulations"
    ],
    responsibilities: [
      "Develop and maintain healthcare software applications",
      "Implement features that improve patient care and provider efficiency",
      "Ensure compliance with healthcare regulations (HIPAA, etc.)",
      "Collaborate with product managers and clinical staff",
      "Participate in code reviews and quality assurance"
    ],
    salary: "$100,000 - $130,000",
    postedAt: "5 days ago",
    tags: ["Healthcare", "Java", "Python", "FHIR", "HIPAA"]
  }
];