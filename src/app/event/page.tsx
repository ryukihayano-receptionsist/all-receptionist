import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterService from '@/components/layout/FooterService'
import CtaBanner from '@/components/sections/CtaBanner'
import ArticleList from '@/components/sections/ArticleList'
import { getEvents, getLatestArticles } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'イベント情報 | RECEPTIONIST',
  description: 'RECEPTIONISTシリーズが開催・参加するイベント・ウェビナー情報をご紹介します。',
}

export default function EventListPage() {
  const events = getLatestArticles(getEvents(), 4)

  return (
    <div className="page voice">
      <Header />
      <main className="main wrapper">
        <div className="hero page-title wrapper">
          <div className="hero-tit">
            <h2>イベント情報</h2>
            <p className="b1">企業様イベントを多数開催しております。</p>
          </div>
        </div>
        <div className="container" style={{ paddingBottom: 'var(--spacing-l)' }}>
          <ArticleList
            articles={events}
            basePath="/event"
            categoryLabel="ウェビナー"
            buttonLabel="予約する"
          />
        </div>
        <CtaBanner />
        <FooterService />
      </main>
      <Footer />
    </div>
  )
}
