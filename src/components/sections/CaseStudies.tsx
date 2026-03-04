const cases = [
  {
    href: 'https://receptionist.jp/case/lotte/',
    image: 'https://receptionist.jp/wp-content/uploads/2022/08/lotte-eyecatch_900x600.jpg',
    alt: '株式会社ロッテ',
    title: '無人化で完全非接触の「安心・安全な受付」を実現。会社のDX化にも貢献',
    company: '株式会社ロッテ',
    spec: '従業員数：2,491名',
  },
  {
    href: 'https://case.receptionist.jp/maruigroup/',
    image: 'https://receptionist.jp/wp-content/themes/receptionist.jp/img/marui.png',
    alt: 'MARUI',
    title: '「DBJ健康経営格付」で最高ランクの企業が 有人×受付システム..とチャット浸透で業務効率化に成功！',
    company: '株式会社丸井グループ',
    spec: '従業員数：5175名',
  },
  {
    href: 'https://receptionist.jp/case/matsukiyococokara/',
    image: 'https://receptionist.jp/wp-content/uploads/2022/09/matsukiyococokara-eyecatch_900x600-2.jpg',
    alt: '株式会社マツキヨココカラ＆カンパニー',
    title: '長年課題だった総務部門の負担がほぼ0へ！グループのABW推進にも貢献',
    company: '株式会社マツキヨココカラ＆カンパニー',
    spec: '従業員数：13,321名（連結）',
  },
]

export default function CaseStudies() {
  return (
    <section className="top_voice">
      <div className="container">
        <h3 className="uk-text-center">お客様の声</h3>
        <div className="uk-grid normal-index-wrap uk-flex" style={{ gap: '30px 0' }}>
          {cases.map((c) => (
            <div className="normal-index-box uk-width-1-3@m" key={c.company}>
              <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
                <div className="uk-card uk-card-default">
                  <div className="uk-card-media-top">
                    <picture>
                      <img src={c.image} alt={c.alt} />
                    </picture>
                  </div>
                  <div className="uk-card-body">
                    <h5>{c.title}</h5>
                    <p className="corp_name">{c.company}</p>
                    <p className="spec">{c.spec}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
