import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { portfolio } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 scroll-mt-20">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className={title({ size: "sm", class: "mb-6" })}>About Me</h2>
        <p className="text-default-600 leading-relaxed text-base md:text-lg">
          {portfolio.about}
        </p>
      </motion.div>
    </section>
  );
}
