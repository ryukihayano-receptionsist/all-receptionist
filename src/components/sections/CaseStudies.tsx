const cases = [
  {
    href: 'https://receptionist.jp/case/mec/',
    image: '/img/case-mec.jpg',
    alt: '三菱地所株式会社',
    title: '来訪者対応の常識を変える、三菱地所のオフィスDXへの挑戦',
    company: '三菱地所株式会社',
    spec: '従業員数：11,412名（連結）',
  },
  {
    href: 'https://receptionist.jp/case/nissan/',
    image: '/img/case-nissan.jpg',
    alt: '日産自動車株式会社',
    title: '受付×会議室のシステム化でお客様ファーストを実現！グローバル企業の日産が目指す次世代オフィス',
    company: '日産自動車株式会社',
    spec: '従業員数：133,580名（連結）',
  },
  {
    href: 'https://receptionist.jp/case/dms/',
    image: '/img/case-dms.jpg',
    alt: '株式会社ディーエムエス',
    title: '「100人来ても大丈夫！」ディーエムエスの生産現場が実現した受付DX最前線',
    company: '株式会社ディーエムエス',
    spec: '従業員数：293名',
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
