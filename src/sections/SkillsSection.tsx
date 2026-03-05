import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { title } from "@/components/primitives";
import { portfolio } from "@/data/portfolio";

const COLORS = [
  "hsl(var(--heroui-primary))",
  "hsl(var(--heroui-secondary))",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#c084fc",
  "#d8b4fe",
  "#e9d5ff",
  "#f3e8ff",
  "#f5f3ff",
];

export function SkillsSection() {
  const data = portfolio.skills.map((s) => ({
    name: s.name.length > 12 ? s.name.slice(0, 10) + "…" : s.name,
    fullName: s.name,
    value: s.value,
    category: s.category,
  }));

  return (
    <section id="skills" className="py-16 md:py-24 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={title({ size: "sm", class: "mb-8 text-center" })}>
          Skills & Technologies
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 20, left: 80, bottom: 5 }}
              >
                <XAxis type="number" domain={[0, 100]} hide />
                <YAxis
                  type="category"
                  dataKey="fullName"
                  width={75}
                  tick={{ fontSize: 12 }}
                  tickLine={false}
                />
                <Tooltip
                  content={({ payload }) =>
                    payload?.[0] ? (
                      <div className="bg-content1 border border-default-200 rounded-lg px-3 py-2 shadow-lg">
                        <p className="font-medium">{payload[0].payload.fullName}</p>
                        <p className="text-primary">
                          {payload[0].value}% proficiency
                        </p>
                      </div>
                    ) : null
                  }
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={28}>
                  {data.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {["Frontend", "Backend", "Design", "Process", "Tools"].map((cat) => (
              <span
                key={cat}
                className="text-xs px-2 py-1 rounded-full bg-default-100 text-default-600"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
