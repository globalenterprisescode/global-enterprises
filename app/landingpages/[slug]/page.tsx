import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LandingPageTemplate from '@/src/components/landingpages/LandingPageTemplate';
import { landingProjects } from '@/src/data/landingProjects';

type LandingPageProps = {
  params: { slug: string };
};

function getProject(slug: string) {
  return landingProjects[slug] ?? landingProjects[slug === 'purvavajrahalli' ? 'purva-vajrahalli' : slug];
}

export function generateMetadata({ params }: LandingPageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  return {
    title: `${project.name} | Luxury Apartments in South Bengaluru`,
    description: `${project.name} in ${project.location}. Explore premium residences, indicative pricing and register your interest for the latest availability.`,
    keywords: [project.name, `${project.name} price`, `${project.name} ${project.location}`, 'luxury apartments South Bengaluru', '3 BHK apartments Kanakapura Road'],
    robots: { index: true, follow: true },
  };
}

export default function LandingPage({ params }: LandingPageProps) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return <LandingPageTemplate project={project} />;
}
