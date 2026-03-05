import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Link } from '@heroui/link';
import { LinkedInIcon } from '@/components/icons';
import { title } from '@/components/primitives';
import { portfolio } from '@/data/portfolio';
import { siteConfig } from '@/config/site';
import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'default_service';
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_o2almzn';
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'la7sJtoqGHJq-ny29';

type SubmitStatus = 'idle' | 'success' | 'error';

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      if (result?.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setErrorMessage('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tryAgain = () => {
    setSubmitStatus('idle');
    setErrorMessage('');
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
            href={siteConfig.links.email}
            variant='bordered'
            radius='full'
          >
            {portfolio.email}
          </Button>
        </div>

        {submitStatus === 'success' ? (
          <div className='rounded-2xl border border-default-200 bg-content1/50 p-8 flex flex-col items-center justify-center text-center gap-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-success/20 text-success'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='h-6 w-6'
                aria-hidden
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='space-y-1'>
              <p className='text-foreground font-medium'>Message sent</p>
              <p className='text-sm text-default-500'>
                Thanks! I’ll get back to you soon.
              </p>
            </div>
            <Button
              type='button'
              color='primary'
              variant='flat'
              radius='lg'
              onPress={tryAgain}
            >
              Send another message
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='rounded-2xl border border-default-200 bg-content1/50 p-6 space-y-4'
            noValidate
          >
            {submitStatus === 'error' && (
              <div
                id='contact-error'
                role='alert'
                className='rounded-lg bg-danger-50 dark:bg-danger-500/10 border border-danger-200 dark:border-danger-500/30 px-3 py-2 text-sm text-danger'
              >
                {errorMessage}
                <Button
                  type='button'
                  variant='light'
                  size='sm'
                  className='mt-2'
                  onPress={tryAgain}
                >
                  Try again
                </Button>
              </div>
            )}
            <Input
              label='Name'
              placeholder='Your name'
              value={formData.name}
              onValueChange={(v) => setFormData((p) => ({ ...p, name: v }))}
              isRequired
              disabled={isSubmitting}
              autoComplete='name'
            />
            <Input
              type='email'
              label='Email'
              placeholder='your@email.com'
              value={formData.email}
              onValueChange={(v) => setFormData((p) => ({ ...p, email: v }))}
              isRequired
              disabled={isSubmitting}
              autoComplete='email'
            />
            <div>
              <label
                htmlFor='contact-message'
                className='text-sm text-foreground mb-1 block'
              >
                Message <span className='text-danger'>*</span>
              </label>
              <textarea
                id='contact-message'
                name='message'
                placeholder='Your message...'
                value={formData.message}
                onChange={(e) =>
                  setFormData((p) => ({ ...p, message: e.target.value }))
                }
                className='w-full min-h-[100px] px-3 py-2 rounded-lg border border-default-200 bg-default-100 text-foreground placeholder:text-default-400 focus:outline-none focus:ring-2 focus:ring-primary'
                rows={4}
                disabled={isSubmitting}
                required
                aria-describedby={
                  submitStatus === 'error' ? 'contact-error' : undefined
                }
              />
            </div>
            <Button
              type='submit'
              color='primary'
              fullWidth
              radius='lg'
              isLoading={isSubmitting}
              isDisabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </Button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
