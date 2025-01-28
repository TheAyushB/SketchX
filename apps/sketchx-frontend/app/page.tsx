import { Hero } from '@repo/ui/components/Hero/Hero';
import { FeatureCard } from '@repo/ui/components/FeatureCard/FeatureCard';
import { Button } from '@repo/ui/components/Button/Button';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero 
        title="SketchX"
        subtitle="Modern Drawing Experience"
        description="Reimagined Excalidraw clone with collaborative superpowers"
      >
        <Button variant="primary">Signup</Button>
        <Button variant="secondary">Signin</Button>
      </Hero>

      <div className="grid md:grid-cols-3 gap-8 my-20">
        <FeatureCard
          title="Real-time Collaboration"
          description="Work simultaneously with your team in perfect sync"
          icon="👥"
        />
        <FeatureCard
          title="Infinite Canvas"
          description="Expand your creativity without boundaries"
          icon="🎨"
        />
        <FeatureCard
          title="Version Control"
          description="Track changes and revert to any point in time"
          icon="⏳"
        />
      </div>
    </div>
  );
}