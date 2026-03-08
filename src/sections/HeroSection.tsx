import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { button as buttonStyles } from '@heroui/theme';
import { motion } from 'framer-motion';
import { LinkedInIcon } from '@/components/icons';
import { title, subtitle } from '@/components/primitives';
import { portfolio } from '@/data/portfolio';
import { siteConfig } from '@/config/site';
import LiquidEther from '@/components/LiquidEther.jsx';

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
    <div className='relative w-full min-h-screen'>
      {/* Liquid Ether background - full bleed behind content */}
      <div
        className='absolute inset-0 z-0'
        style={{ width: '100%', height: '100%' }}
      >
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0='#5227FF'
          color1='#FF9FFC'
          color2='#B19EEF'
        />
      </div>
      {/* Hero content on top */}
      <section
        id='hero'
        className='relative z-10 flex flex-col items-center justify-center gap-6 py-16 md:py-24 min-h-screen'
      >
        <motion.div
          className='inline-block max-w-3xl text-center'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span className={title()} variants={item}>
            {portfolio.name}
          </motion.span>
          <br />
          <motion.span
            className={title({ color: 'violet', size: 'sm' })}
            variants={item}
          >
            {portfolio.title}
          </motion.span>
          <motion.div
            className={subtitle({ class: 'mt-4 text-center' })}
            variants={item}
          >
            {portfolio.tagline}
          </motion.div>
          <motion.p
            className='mt-4 text-default-500 text-sm md:text-base max-w-2xl mx-auto'
            variants={item}
          >
            {portfolio.location}
          </motion.p>
        </motion.div>

        <motion.div
          className='flex flex-wrap gap-3 justify-center'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.div variants={item}>
            <Button
              as={Link}
              isExternal
              href={siteConfig.links.linkedin}
              className={buttonStyles({
                color: 'primary',
                radius: 'full',
                variant: 'shadow',
              })}
              startContent={<LinkedInIcon size={20} />}
            >
              LinkedIn
            </Button>
          </motion.div>
          <motion.div variants={item}>
            <Button
              as={Link}
              href='#contact'
              className={buttonStyles({
                variant: 'bordered',
                radius: 'full',
              })}
            >
              Get in Touch
            </Button>
            <Button
              as='a'
              href='/Tael-de-Oliveira-CV.pdf'
              download='Tael-de-Oliveira-CV.pdf'
              variant='flat'
              radius='full'
              size='md'
              color='secondary'
            >
              Download CV
            </Button>
          </motion.div>
        </motion.div>

        <motion.ul
          className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl text-left text-sm text-default-600'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          {portfolio.highlights.map((highlight, i) => (
            <motion.li
              key={i}
              className='text-default-600 text-base leading-relaxed mb-4'
              variants={item}
            >
              <span className='text-primary mt-0.5'>•</span>
              <span className='ml-2'>{highlight}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>
    </div>
  );
}
