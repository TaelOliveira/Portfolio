import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Link } from '@heroui/link';
import { LinkedInIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { portfolio } from '@/data/portfolio';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id='contact' className='py-16 md:py-24 scroll-mt-20'>
      <motion.div
        className='max-w-2xl mx-auto'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
      >
        <h2 className={title({ size: 'sm', class: 'mb-2 text-center' })}>
          Contact
        </h2>
        <p className='text-default-500 text-center text-sm mb-8'>
          Let’s connect for opportunities and collaboration.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-10'>
          <Button
            as={Link}
            isExternal
            href={siteConfig.links.linkedin}
            color='primary'
            variant='flat'
            radius='full'
            startContent={<LinkedInIcon size={20} />}
          >
            LinkedIn
          </Button>
          <Button
            as={Link}
            href={portfolio.email}
            variant='bordered'
            radius='full'
          >
            {portfolio.email}
          </Button>
        </div>

        <form
          onSubmit={handleSubmit}
          className='rounded-2xl border border-default-200 bg-content1/50 p-6 space-y-4'
        >
          <Input
            label='Name'
            placeholder='Your name'
            value={formData.name}
            onValueChange={(v) => setFormData((p) => ({ ...p, name: v }))}
            isRequired
          />
          <Input
            type='email'
            label='Email'
            placeholder='your@email.com'
            value={formData.email}
            onValueChange={(v) => setFormData((p) => ({ ...p, email: v }))}
            isRequired
          />
          <div>
            <label className='text-sm text-foreground mb-1 block'>
              Message
            </label>
            <textarea
              placeholder='Your message...'
              value={formData.message}
              onChange={(e) =>
                setFormData((p) => ({ ...p, message: e.target.value }))
              }
              className='w-full min-h-[100px] px-3 py-2 rounded-lg border border-default-200 bg-default-100 text-foreground placeholder:text-default-400 focus:outline-none focus:ring-2 focus:ring-primary'
              rows={4}
            />
          </div>
          <Button type='submit' color='primary' fullWidth radius='lg'>
            {submitted ? 'Thanks! I’ll get back to you.' : 'Send message'}
          </Button>
        </form>
      </motion.div>
    </section>
  );
}
