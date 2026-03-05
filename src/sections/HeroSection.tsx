import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { motion } from "framer-motion";
import { LinkedInIcon } from "@/components/icons";
import { title, subtitle } from "@/components/primitives";
import { portfolio } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center gap-6 py-16 md:py-24 min-h-[85vh]"
    >
      <motion.div
        className="inline-block max-w-3xl text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.span className={title()} variants={item}>
          {portfolio.name}
        </motion.span>
        <br />
        <motion.span
          className={title({ color: "violet", size: "sm" })}
          variants={item}
        >
          {portfolio.title}
        </motion.span>
        <motion.div className={subtitle({ class: "mt-4 text-center" })} variants={item}>
          {portfolio.tagline}
        </motion.div>
        <motion.p
          className="mt-4 text-default-500 text-sm md:text-base max-w-2xl mx-auto"
          variants={item}
        >
          {portfolio.location}
        </motion.p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3 justify-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <Button
            as={Link}
            isExternal
            href={siteConfig.links.linkedin}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            startContent={<LinkedInIcon size={20} />}
          >
            LinkedIn
          </Button>
        </motion.div>
        <motion.div variants={item}>
          <Button
            as={Link}
            href="#contact"
            className={buttonStyles({ variant: "bordered", radius: "full" })}
          >
            Get in Touch
          </Button>
        </motion.div>
      </motion.div>

      <motion.ul
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl text-left text-sm text-default-600"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {portfolio.highlights.map((highlight, i) => (
          <motion.li key={i} className="flex items-start gap-2" variants={item}>
            <span className="text-primary mt-0.5">•</span>
            <span>{highlight}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
