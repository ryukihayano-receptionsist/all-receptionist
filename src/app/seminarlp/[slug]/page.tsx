import Footer from '@/components/layout/Footer'
import { getSeminarLps, getSeminarLpBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getSeminarLps().map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getSeminarLpBySlug(slug)
  if (!article) return { title: 'Not Found' }
  return {
    title: `${article.title} | RECEPTIONIST`,
    description: article.title,
  }
}

export default async function SeminarLpPage({ params }: PageProps) {
  const { slug } = await params
  const article = getSeminarLpBySlug(slug)
  if (!article) notFound()

  return (
    <div className="seminar-lp-page">
      {/* セミナーLPにはヘッダーナビなし（single-seminarlp.php準拠） */}
      <main className="main wrapper">
        <div className="article">
          <div className="contents-wrap">
            <div className="voice-detail-tit">
              <h1>{article.title}</h1>
              {article.tags && article.tags.length > 0 && (
                <div className="tag-list">
                  {article.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
            {article.thumbnail && (
              <div className="main-img">
                <figure>
                  <img src={article.thumbnail} alt={article.title} />
                </figure>
                {article.person && (
                  <p className="cap uk-text-right mt-xs">{article.person}</p>
                )}
              </div>
            )}
            <section className="interview">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
