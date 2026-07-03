import { createFileRoute } from '@tanstack/react-router'
import { allAffiliates } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/affiliates')({
  component: Affiliates,
})

function Affiliates() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Affiliates</h1>
        <p className="text-gray-600 mb-8">
          Tools, products, and services I personally use and recommend. Some
          links are affiliate links — if you purchase through them, I may
          earn a small commission at no extra cost to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allAffiliates.map((affiliate) => (
            <a
              key={affiliate._meta.path}
              href={affiliate.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block"
            >
              <Card className="cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    {affiliate.name}
                    <ExternalLink size={16} className="text-gray-400" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">
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
      </div>
    </div>
  )
}
