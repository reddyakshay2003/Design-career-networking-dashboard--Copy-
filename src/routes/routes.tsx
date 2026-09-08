import type { RouteObject } from "react-router-dom";
import { useRouteError, Link } from "react-router-dom";

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
    element: <PublicLayout />,
    errorElement: <GlobalErrorFallback />, // Catches 404s on public routes
    children: [
      { path: "/", element: <Home /> },
      { path: "/opportunities", element: <OpportunitiesHub /> },
      { path: "/opportunities/:opportunityId", element: <SingleOpportunity /> },
      { path: "/companies", element: <CompaniesDirectory /> },
      { path: "/showcase", element: <PortfolioShowcase /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <RoleSelection /> },
      { path: "/register/candidate", element: <CandidateRegister /> },
      { path: "/register/employer", element: <EmployerRegister /> },
      { path: "/register/advisor", element: <AdvisorRegister /> },
    ],
  },
  {
    path: "/candidate",
    element: <CandidateLayout />,
    errorElement: <GlobalErrorFallback />, // Catches 404s on candidate routes
    children: [
      { index: true, element: <CandidateDashboard /> }, // Resolves to /candidate
      { path: "applications", element: <ApplicationTracker /> }, // Resolves to /candidate/applications
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
      { index: true, element: <EmployerDashboard /> }, // Resolves to /employer
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
      { index: true, element: <AdvisorDashboard /> }, // Resolves to /advisor
      { path: "employers", element: <EmployerVerification /> },
      { path: "portfolios", element: <PortfolioAudit /> },
    ],
  },
];