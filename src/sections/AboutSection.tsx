import { portfolio } from '@/data/portfolio';
import ScrollReveal from '@/components/ScrollReveal';

export function AboutSection() {
  return (
    <ScrollReveal
      baseOpacity={0.1}
      enableBlur
      baseRotation={3}
      blurStrength={4}
    >
      {portfolio.about}
    </ScrollReveal>
  );
}
