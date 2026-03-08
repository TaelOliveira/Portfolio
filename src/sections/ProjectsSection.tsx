import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { motion } from 'framer-motion';
import { title } from '@/components/primitives';
import { portfolio } from '@/data/portfolio';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

export function ProjectsSection() {
  return (
    <section id='projects' className='py-16 md:py-24 scroll-mt-20'>
      <motion.h2
        className={title({ size: 'lg', class: 'mb-10 text-center' })}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className='grid gap-6 sm:grid-cols-1 lg:grid-cols-2 max-w-5xl mx-auto mt-4'>
        {portfolio.projects.map((project, i) => (
          <motion.article
            key={project.id}
            className='rounded-2xl border border-default-200 bg-content1/50 p-7 shadow-sm hover:shadow-md transition-shadow'
            custom={i}
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, margin: '-40px' }}
          >
            <h3 className='text-xl font-semibold text-foreground mb-3'>
              {project.title}
            </h3>
            <p className='text-default-600 text-base leading-relaxed mb-4'>
              {project.description}
            </p>
            <p className='text-default-500 text-sm mb-4'>
              <span className='font-medium'>Role:</span> {project.role}
            </p>
            <div className='flex flex-wrap gap-2 mb-4'>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className='text-sm px-2.5 py-1 rounded-md bg-primary/10 text-primary'
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <Button
                as={Link}
                isExternal
                href={project.link}
                size='md'
                variant='flat'
                color='primary'
              >
                View project
              </Button>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
