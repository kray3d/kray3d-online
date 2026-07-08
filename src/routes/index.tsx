import { createFileRoute, Link } from '@tanstack/react-router'
import { allProjects, allAffiliates } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const featuredProjects = allProjects.slice(0, 3)
  const featuredAffiliates = allAffiliates.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Intro / Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-16 pb-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">
              Hi, I'm Kray Mohsin
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Digital transformation and change leadership, powered by AI.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
              Strategic Change Management & Creative Lead with 15+ years
              driving large-scale digital transformation across corporate
              and government-linked (GLC) ecosystems in Malaysia, bridging
              Generative AI automation with 3D creative direction.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
              >
                View my work
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium text-gray-700"
              >
                Get in touch
              </Link>
            </div>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}headshot.png`}
            alt="Kray Mohsin"
            className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover shadow-md"
          />
        </div>
      </section>

      {/* Project Showcase */}
      <section className="bg-gray-50 border-y border-border">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Projects
              </h2>
              <p className="text-gray-600">
                A few things I've recently designed and built.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              See all projects
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Card key={project._meta.path} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.liveUrl &&
                      (project.liveUrl.startsWith('/') ? (
                        <a
                          href={project.liveUrl}
                          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ArrowRight size={14} />
                          Case Study
                        </a>
                      ) : (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live
                        </a>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              See all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Tools I Recommend
            </h2>
            <p className="text-gray-600">
              Products and services I personally use and vouch for. Some
              links below are affiliate links, which help support this site
              at no extra cost to you.
            </p>
          </div>
          <Link
            to="/affiliates"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 shrink-0"
          >
            See all
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredAffiliates.map((affiliate) => (
            <a
              key={affiliate._meta.path}
              href={affiliate.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block"
            >
              <Card className="cursor-pointer h-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {affiliate.name}
                    <ExternalLink size={14} className="text-gray-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {affiliate.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {affiliate.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
