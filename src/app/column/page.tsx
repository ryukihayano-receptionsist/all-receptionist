import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FooterService from '@/components/layout/FooterService'
import CtaBanner from '@/components/sections/CtaBanner'
import ArticleList from '@/components/sections/ArticleList'
import { getColumns, getLatestArticles } from '@/lib/content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'コラム | RECEPTIONIST',
  description: 'RECEPTIONISTシリーズの製品活用方法やビジネストレンドについてのコラム記事をご紹介します。',
}

export default function ColumnListPage() {
  const columns = getLatestArticles(getColumns(), 4)

  return (
    <div className="page voice">
      <Header />
      <main className="main wrapper">
        <div className="hero page-title wrapper">
          <div className="hero-tit">
            <h2>コラム</h2>
            <p className="b1">製品の活用方法やトレンドについて書いております。</p>
          </div>
        </div>
        <div className="container" style={{ paddingBottom: 'var(--spacing-l)' }}>
          <ArticleList
            articles={columns}
            basePath="/column"
            categoryLabel="コラム"
            buttonLabel="詳しく見る"
          />
        </div>
        <CtaBanner />
        <FooterService />
      </main>
      <Footer />
    </div>
  )
}
