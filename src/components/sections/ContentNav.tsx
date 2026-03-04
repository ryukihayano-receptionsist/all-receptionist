import Link from 'next/link'

export default function ContentNav() {
  return (
    <section className="section column-index-wrap bg_blue">
      <div className="container">
        <div className="uk-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px 0' }}>
          <div className="column-card-box" style={{ width: '50%', paddingLeft: '15px', paddingRight: '15px' }}>
            <Link href="/column/" className="uk-card uk-card-default uk-card-body" style={{ display: 'block' }}>
              <h4>コラム</h4>
              <p>製品の活用方法やトレンドについて書いております。</p>
            </Link>
          </div>
          <div className="column-card-box" style={{ width: '50%', paddingLeft: '15px', paddingRight: '15px' }}>
            <Link href="/event/" className="uk-card uk-card-default uk-card-body" style={{ display: 'block' }}>
              <h4>イベント情報</h4>
              <p>企業様イベントを多数開催しております。</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
