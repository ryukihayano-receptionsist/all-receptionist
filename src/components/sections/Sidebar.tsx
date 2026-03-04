import Link from 'next/link'
import { getAllArticles, type Article } from '@/lib/content'

interface SidebarProps {
  maxItems?: number
}

export default function Sidebar({ maxItems = 10 }: SidebarProps) {
  const articles = getAllArticles().slice(0, maxItems)

  return (
    <div className="side">
      <div className="prof-box">
        <div className="inner">
          <h4 className="uk-text-center">関連記事</h4>
          <ul className="news-list" id="itemList">
            {articles.map((article) => {
              const basePath = article.category === 'event' ? '/event' : '/column'
              return (
                <li key={article.slug}>
                  <Link href={`${basePath}/${article.slug}/`}>
                    <small className="cat">{article.category === 'event' ? 'イベント' : 'コラム'}</small>
                    <span className="txt">{article.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
