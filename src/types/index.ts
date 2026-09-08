export type UserRole = "candidate" | "employer" | "advisor";

export interface Opportunity {
  id: string;
  title: string;
  companyId: string;
  type: "full-time" | "part-time" | "internship" | "freelance";
  location: string;
  status: "draft" | "published" | "closed";
  postedAt: string;
}

export interface Candidate {
  id: string;
  name: string;
  headline: string;
  location: string;
  skills: string[];
  availability: "available" | "open-to-offers" | "unavailable";
}

export interface Employer {
  id: string;
  name: string;
  industry: string;
  website: string;
  verified: boolean;
}
