import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { portfolio } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 scroll-mt-20">
      <motion.h2
        className={title({ size: "sm", class: "mb-10 text-center" })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto space-y-10">
        {portfolio.experience.map((job, i) => (
          <motion.div
            key={job.company}
            className="rounded-2xl border border-default-200 bg-content1/50 p-6 shadow-sm"
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="text-lg font-semibold text-foreground">
                {job.role}
              </h3>
              <span className="text-sm text-default-500">
                {job.start} – {job.end}
              </span>
            </div>
            <p className="text-primary font-medium text-sm mb-1">{job.company}</p>
            <p className="text-default-500 text-xs mb-4">{job.location}</p>
            <ul className="space-y-2 text-sm text-default-600 mb-4">
              {job.responsibilities.map((r, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="text-xs font-medium text-default-500 uppercase tracking-wide mb-2">
              Key achievements
            </p>
            <ul className="space-y-1.5 text-sm text-default-600">
              {job.achievements.map((a, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-success mt-0.5">✓</span>
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
