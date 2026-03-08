import DefaultLayout from '@/layouts/default';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { ContactSection } from '@/sections/ContactSection';

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className='w-full h-full' style={{ width: '100%' }}>
        <HeroSection />
        <div className='container mx-auto max-w-6xl px-4 sm:px-6 pt-4'>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </div>
      </div>
    </DefaultLayout>
  );
}
