import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

// Updated import path assuming you have a folder structure: src/routes/routes.tsx
import { routes } from "./routes/routes"; 

const router = createBrowserRouter(routes);

// Branded loading fallback for lazy-loaded routes and initial mount
function GlobalLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <div className="w-12 h-12 rounded-2xl bg-[#064E3B] text-white flex items-center justify-center font-bold text-xl tracking-wider shadow-md">
          DC<span className="text-[#10B981]">.</span>
        </div>
        <p className="text-sm font-semibold text-slate-500 tracking-wide">
          Loading workspace...
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<GlobalLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}