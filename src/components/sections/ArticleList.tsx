import Link from 'next/link'
import type { Article } from '@/lib/content'

interface ArticleListProps {
  articles: Article[]
  basePath: string // '/column' or '/event'
  categoryLabel: string
  buttonLabel?: string
}

export default function ArticleList({ articles, basePath, categoryLabel, buttonLabel = '詳しく見る' }: ArticleListProps) {
  if (articles.length === 0) {
    return (
      <div className="uk-text-center" style={{ padding: 'var(--spacing-l) 0' }}>
        <p>記事はまだありません。</p>
      </div>
    )
  }

  return (
    <div className="interview-bn-box-wrap">
      {articles.map((article) => (
        <div className="interview-bn-box event-bn-box" key={article.slug}>
          <Link href={`${basePath}/${article.slug}/`} style={{ display: 'block' }}>
            <div className="uk-flex" style={{ flexWrap: 'wrap' }}>
              <div className="uk-width-1-2@m">
                <div className="uk-card-media-top">
                  {article.thumbnail && (
                    <img src={article.thumbnail} alt={article.title} style={{ width: '100%' }} />
                  )}
                </div>
              </div>
              <div className="uk-width-1-2@m">
                <div className="uk-card-body">
                  <div className="tit-box">
                    <div className="category-list">
                      <span className="cat">{categoryLabel}</span>
                    </div>
                    {article.eventTimeDetail && (
                      <h5><small>{article.eventTimeDetail}</small></h5>
                    )}
                    <h4>{article.title}</h4>
                    <a className="btn btn_more">{buttonLabel}</a>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
