import type { RouteObject } from "react-router-dom";
import { useRouteError, Link } from "react-router-dom";
import { useState } from "react";

// Layouts
import CandidateLayout from "../layouts/CandidateLayout";
import EmployerLayout from "../layouts/EmployerLayout";
import AdvisorLayout from "../layouts/AdvisorLayout";
import PublicLayout from "../layouts/PublicLayout";

// Public Pages
import Home from "../pages/public/Home";
import OpportunitiesHub from "../pages/public/OpportunitiesHub";
import SingleOpportunity from "../pages/public/SingleOpportunity";
import CompaniesDirectory from "../pages/public/CompaniesDirectory";
import PortfolioShowcase from "../pages/public/PortfolioShowcase";

// Auth Pages
import Login from "../pages/auth/Login";
import RoleSelection from "../pages/auth/RoleSelection";
import CandidateRegister from "../pages/auth/CandidateRegister";
import EmployerRegister from "../pages/auth/EmployerRegister";
import AdvisorRegister from "../pages/auth/AdvisorRegister";

// Candidate Pages
import CandidateDashboard from "../pages/candidate/CandidateDashboard";
import ApplicationTracker from "../pages/candidate/ApplicationTracker";
import PortfolioManager from "../pages/candidate/PortfolioManager";
import CVBuilder from "../pages/candidate/CVBuilder";
import TimesheetLog from "../pages/candidate/TimesheetLog";

// Employer Pages
import EmployerDashboard from "../pages/employer/EmployerDashboard";
import CandidatePipeline from "../pages/employer/CandidatePipeline";
import PostOpportunity from "../pages/employer/PostOpportunity";
import ManageOpportunities from "../pages/employer/ManageOpportunities";
import TimesheetAudit from "../pages/employer/TimesheetAudit";

// Advisor Pages
import AdvisorDashboard from "../pages/advisor/AdvisorDashboard";
import EmployerVerification from "../pages/advisor/EmployerVerification";
import PortfolioAudit from "../pages/advisor/PortfolioAudit";

// --- Inline Advisor Subpages (Zero file-resolution issues) ---
function CandidateOversight() {
  const [candidates] = useState([
    { id: "CAN-101", name: "Akshay Reddy", program: "MSc Computer Science", focus: "Frontend & AI", status: "Active Placement" },
    { id: "CAN-102", name: "Elena Rostova", program: "BSc Product Design", focus: "UX Engineering", status: "Looking for Placement" },
  ]);
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-extrabold text-slate-900">Candidate Oversight & Management</h1>
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
        <p className="text-sm text-slate-600 mb-4">Supervise student profiles, audit compliance status, and manage platform pathways.</p>
        <div className="divide-y divide-slate-100">
          {candidates.map(c => (
            <div key={c.id} className="py-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">{c.name} <span className="text-xs text-indigo-600 font-normal">({c.program})</span></p>
                <p className="text-xs text-slate-500">Focus: {c.focus} • Status: {c.status}</p>
              </div>
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">Verified</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlacementCompliance() {
  const [placements] = useState([
    { id: "PLC-301", candidate: "Akshay Reddy", company: "Acme Studios", hours: "37.5 / 40 hrs", state: "Compliant" },
    { id: "PLC-303", candidate: "Marcus Thorne", company: "Meridian Labs", hours: "28.0 / 40 hrs", state: "Review Required" },
  ]);
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-extrabold text-slate-900">Placement Timesheet & Compliance</h1>
      <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm">
        <p className="text-sm text-slate-600 mb-4">Monitor weekly candidate timesheets and enforce institutional placement hour rules.</p>
        <div className="divide-y divide-slate-100">
          {placements.map(p => (
            <div key={p.id} className="py-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-900">{p.candidate} at <span className="text-indigo-600">{p.company}</span></p>
                <p className="text-xs text-slate-500 font-mono">Logged Hours: {p.hours}</p>
              </div>
              <span className={`px-3 py-1 text-xs font-bold rounded-full border ${p.state === 'Compliant' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'}`}>
                {p.state}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- Custom Error Boundary ---
function GlobalErrorFallback() {
  const error = useRouteError() as any;
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 text-center selection:bg-[#10B981]/20">
      <div className="w-16 h-16 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-2xl mb-6 shadow-sm">
        !
      </div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        {error?.status === 404 ? "Page not found" : "Something went wrong"}
      </h1>
      <p className="text-slate-500 mb-8 max-w-md">
        {error?.status === 404 
          ? "We couldn't find the page you're looking for. It might have been moved or doesn't exist."
          : error?.message || "An unexpected error occurred in the application."}
      </p>
      <Link to="/" className="px-6 py-3 bg-[#064E3B] text-white font-semibold rounded-xl hover:bg-[#064E3B]/90 transition-all shadow-sm">
        Return to Home
      </Link>
    </div>
  );
}

// --- Routes Configuration ---
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <PublicLayout />,
    errorElement: <GlobalErrorFallback />,
    children: [
      { index: true, element: <Home /> },
      { path: "opportunities", element: <OpportunitiesHub /> },
      { path: "opportunities/:opportunityId", element: <SingleOpportunity /> },
      { path: "companies", element: <CompaniesDirectory /> },
      { path: "showcase", element: <PortfolioShowcase /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <RoleSelection /> },
      { path: "register/candidate", element: <CandidateRegister /> },
      { path: "register/employer", element: <EmployerRegister /> },
      { path: "register/advisor", element: <AdvisorRegister /> },
    ],
  },
  {
    path: "/candidate",
    element: <CandidateLayout />,
    errorElement: <GlobalErrorFallback />,
    children: [
      { index: true, element: <CandidateDashboard /> },
      { path: "applications", element: <ApplicationTracker /> },
      { path: "portfolio", element: <PortfolioManager /> },
      { path: "cv", element: <CVBuilder /> },
      { path: "timesheets", element: <TimesheetLog /> },
    ],
  },
  {
    path: "/employer",
    element: <EmployerLayout />,
    errorElement: <GlobalErrorFallback />,
    children: [
      { index: true, element: <EmployerDashboard /> },
      { path: "pipeline", element: <CandidatePipeline /> },
      { path: "post", element: <PostOpportunity /> },
      { path: "opportunities", element: <ManageOpportunities /> },
      { path: "timesheets", element: <TimesheetAudit /> },
    ],
  },
  {
    path: "/advisor",
    element: <AdvisorLayout />,
    errorElement: <GlobalErrorFallback />,
    children: [
      { index: true, element: <AdvisorDashboard /> },
      { path: "employers", element: <EmployerVerification /> },
      { path: "portfolios", element: <PortfolioAudit /> },
      { path: "candidates", element: <CandidateOversight /> },
      { path: "placements", element: <PlacementCompliance /> },
    ],
  },
];