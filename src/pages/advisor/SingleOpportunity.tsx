import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import { opportunities } from "./Opportunities";

export default function SingleOpportunity() {
  const { opportunityId } = useParams();

  const opportunity = opportunities.find(
    (item) => item.id === Number(opportunityId)
  );
  
  if (!opportunity) {
    return (
      <div className="min-h-screen bg-white dark:bg-zinc-950 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            Opportunity not found
          </h1>

          <Link
            to="/opportunities"
            className="inline-block mt-6 px-5 py-3 bg-pink-600 text-white rounded-lg"
          >
            Back to opportunities
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-20">

        <Link
          to="/opportunities"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-pink-600 mb-10"
        >
          <ArrowLeft size={16} />
          Back to opportunities
        </Link>

        {/* Header */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-10">

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-semibold">
              {opportunity.logo}
            </div>

            <div>
              <p className="text-zinc-500 dark:text-zinc-400">
                {opportunity.company}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mt-1">
                {opportunity.role}
              </h1>
            </div>

          </div>

          <div className="flex flex-wrap gap-5 mt-7 text-sm text-zinc-500">

            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {opportunity.location} · {opportunity.workStyle}
            </span>

            <span className="flex items-center gap-2">
              <Briefcase size={16} />
              {opportunity.salary}
            </span>

            <span className="flex items-center gap-2">
              <Calendar size={16} />
              Apply by {opportunity.deadlineDisplay}
            </span>

          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {opportunity.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-[1fr_280px] gap-12 mt-12">

          <div className="space-y-10">

            <section>
              <h2 className="text-xl font-bold mb-4">
                About the role
              </h2>

              <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                {opportunity.overview}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">
                Responsibilities
              </h2>

              <ul className="space-y-3">
                {opportunity.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-pink-600 shrink-0 mt-1"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">
                Requirements
              </h2>

              <ul className="space-y-3">
                {opportunity.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-pink-600 shrink-0 mt-1"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">
                Qualifications
              </h2>

              <ul className="space-y-3">
                {opportunity.qualifications.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-zinc-600 dark:text-zinc-400"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-pink-600 shrink-0 mt-1"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          {/* Apply card */}
          <aside>
            <div className="sticky top-28 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">

              <p className="text-sm text-zinc-500 mb-2">
                Application deadline
              </p>

              <p className="font-semibold mb-6">
                {opportunity.deadlineDisplay}
              </p>

              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg">
                Apply now
              </button>

            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}