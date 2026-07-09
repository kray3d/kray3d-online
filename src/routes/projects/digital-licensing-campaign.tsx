import { createFileRoute, Link } from '@tanstack/react-router'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft } from 'lucide-react'

export const Route = createFileRoute('/projects/digital-licensing-campaign')({
  component: DigitalLicensingCampaign,
})

const categories = [
  'Multimedia',
  'Project Management',
  'GovTech',
  'Digital Transformation',
]

const problems = [
  {
    title: 'Last-Minute Bottlenecks',
    body: 'Merchants consistently renewed licenses at the very last minute physically at council counters, causing heavy congestion.',
  },
  {
    title: 'The Digital Gap',
    body: 'Small business owners lacked the technical familiarity to onboard themselves onto the new app, leading to failed or delayed digital renewals.',
  },
  {
    title: 'Enforcement Perception',
    body: 'Enforcement officers were traditionally viewed as punitive figures (issuing fines) rather than supportive agents of transition.',
  },
]

const strategy = [
  {
    number: '01',
    title: 'Narrative-Driven Multimedia',
    body: 'Produced a series of promotional and tutorial videos that repositioned officers as "Digital Transformation Agents" assisting merchants directly on-site.',
  },
  {
    number: '02',
    title: 'On-Ground Activation',
    body: 'Coordinated logistics and marketing assets for mall activation campaigns to provide face-to-face onboarding support for less tech-savvy business owners.',
  },
]

const gallery = [
  {
    src: 'https://placehold.co/600x400?text=Behind+The+Scenes',
    alt: 'Behind-the-scenes video production shoot',
  },
  {
    src: 'https://placehold.co/600x400?text=Mall+Activation',
    alt: 'On-ground mall activation booth',
  },
  {
    src: 'https://placehold.co/600x400?text=Field+Monitoring',
    alt: 'Enforcement team field monitoring',
  },
]

const results = [
  {
    title: 'Behavioral Shift',
    body: 'Successfully incentivized early digital account linking, significantly reducing physical counter congestion during peak renewal months.',
  },
  {
    title: 'Operational Transparency',
    body: 'Merchants became highly proactive through real-time notifications, resulting in better compliance and reduced friction with local councils.',
  },
  {
    title: 'New Local Council Baseline',
    body: 'Established a proven digital communication blueprint that can be replicated for future GovTech rollouts.',
  },
]

const tools = [
  'Creative Direction',
  'Storyboarding',
  'Video Editing',
  'Event Logistics',
  'Business Process Improvement (BPI)',
  'Government Stakeholder Management',
]

function DigitalLicensingCampaign() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-12 sm:mb-20"
        >
          <ArrowLeft size={16} />
          Back to projects
        </Link>

        {/* Hero */}
        <header className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-16 sm:mb-24">
          <div className="md:col-span-8">
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
              Case Study
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-[1.05] mb-6 text-balance">
              Digital Licensing Awareness Campaign
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-gray-400 italic">
              &ldquo;Daftar Dulu, Baru Renew&rdquo;
            </p>
          </div>
          <div className="md:col-span-4 md:border-l md:border-gray-200 md:pl-8 flex flex-col justify-end gap-6 pt-6 md:pt-0">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                My Role
              </p>
              <p className="text-gray-900">
                Media & Creative Content Manager — led video production
                strategy, storyboarding, site logistics, and campaign impact
                monitoring.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                Categories
              </p>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge key={category} variant="secondary">
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* The Problem */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-16 sm:mb-24">
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
              The Problem
            </h2>
          </div>
          <div className="md:col-span-9">
            <p className="font-serif text-2xl sm:text-3xl text-gray-900 leading-snug mb-10 text-balance">
              Merchants consistently renewed licenses at the very last
              minute&nbsp;— physically, at council counters&nbsp;— the exact
              bottleneck digital transformation was meant to solve.
            </p>
            <ul className="space-y-6 border-t border-gray-200 pt-8">
              {problems.map((problem) => (
                <li key={problem.title} className="text-lg text-gray-600">
                  <span className="font-semibold text-gray-900">
                    {problem.title} —{' '}
                  </span>
                  {problem.body}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The Solution & Strategy */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mb-16 sm:mb-24">
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
              The Solution
            </h2>
          </div>
          <div className="md:col-span-9">
            <p className="text-lg text-gray-600 mb-10 max-w-2xl">
              We structured the{' '}
              <span className="font-semibold text-gray-900">
                &ldquo;Daftar Dulu, Baru Renew&rdquo;
              </span>{' '}
              campaign using a dual-layered approach.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {strategy.map((item) => (
                <div key={item.number} className="border-t-2 border-gray-900 pt-4">
                  <p className="font-serif text-5xl text-gray-200 mb-2">
                    {item.number}
                  </p>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind The Scenes & Field Activation */}
        <section className="mb-16 sm:mb-24">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Behind The Scenes & Field Activation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {gallery.map((image) => (
              <img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="w-full h-56 sm:h-64 object-cover rounded-xl"
              />
            ))}
          </div>
        </section>

        {/* The Results & Impact */}
        <section className="mb-16 sm:mb-24 bg-gray-50 rounded-2xl px-6 py-12 sm:px-14 sm:py-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-10">
            The Results & Impact
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            {results.map((result) => (
              <div key={result.title}>
                <p className="font-serif text-2xl text-gray-900 leading-snug mb-3 text-balance">
                  {result.title}
                </p>
                <p className="text-gray-600">{result.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Skills */}
        <section>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6">
            Tools & Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary">
                {tool}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
