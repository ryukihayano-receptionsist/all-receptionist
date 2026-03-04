import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterService from '@/components/layout/FooterService'
import CtaBanner from '@/components/sections/CtaBanner'
import Sidebar from '@/components/sections/Sidebar'
import { getEvents, getEventBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getEvents().map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getEventBySlug(slug)
  if (!article) return { title: 'Not Found' }
  return {
    title: `${article.title} | イベント | RECEPTIONIST`,
    description: article.title,
  }
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = getEventBySlug(slug)
  if (!article) notFound()

  return (
    <div className="page voice voice-detail">
      <Header />
      <main className="main wrapper">
        <div className="container_full uk-flex" style={{ display: 'flex', flexWrap: 'wrap', padding: 'var(--spacing-m)', justifyContent: 'space-between', maxWidth: '1280px', margin: '0 auto' }}>
          <div className="article" style={{ width: '65.55%', maxWidth: '784px' }}>
            <div className="contents-wrap">
              <div className="voice-detail-tit">
                <h1 style={{ fontSize: '1.75em', fontWeight: 'bold' }}>{article.title}</h1>
                <div className="uk-flex" style={{ justifyContent: 'space-between', marginTop: 'var(--spacing-s)' }}>
                  <div className="category-list">
                    <span className="cat">イベント</span>
                  </div>
                  <div className="tag-list" style={{ textAlign: 'right', marginTop: 0 }}>
                    {article.tags.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
              {article.thumbnail && (
                <div className="main-img">
                  <figure>
                    <img src={article.thumbnail} alt={article.title} style={{ width: '100%' }} />
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
          <Sidebar />
        </div>
        <CtaBanner />
        <FooterService />
      </main>
      <Footer />
    </div>
  )
}
