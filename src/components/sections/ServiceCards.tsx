const services = [
  {
    href: 'https://scheduling.receptionist.jp',
    icon: '/img/img_00-2-1.svg',
    iconAlt: '調整アポ',
    label: '日程調整ツール',
    name: '調整アポ',
    description: '日程調整がコピペで終わる',
    image: '/img/img_cheduling_kv_small.png',
    imageAlt: '日程調整ツール',
  },
  {
    href: 'https://receptionist.jp/',
    icon: '/img/img_00-2-2.svg',
    iconAlt: 'RECEPTIONIST',
    label: '受付システム',
    name: 'RECEPTIONIST',
    description: '来客受付業務をシンプルに',
    image: '/img/img_reception_small.png',
    imageAlt: 'クラウド受付システム',
  },
  {
    href: 'https://rooms.receptionist.jp',
    icon: '/img/img_00-2-3@2x.png',
    iconAlt: '予約ルームズ',
    label: '会議室予約システム',
    name: '予約ルームズ',
    description: '会議室の利用マナーを整える',
    image: '/img/img_meetingroom_small.png',
    imageAlt: '会議室の予約管理システム',
  },
]

export default function ServiceCards() {
  return (
    <section className="top-service-index-wrap">
      <div className="container">
        <h3 className="uk-text-center">各サービスについて</h3>
        <div className="uk-grid uk-grid-medium">
          {services.map((s) => (
            <div className="box uk-width-1-3@m" key={s.name}>
              <a href={s.href}>
                <div className="tit-box">
                  <div className="icon-box">
                    <img src={s.icon} alt={s.iconAlt} />
                  </div>
                  <h3><small>{s.label}</small>{s.name}</h3>
                </div>
                <p className="b1 uk-text-justify">{s.description}</p>
                <div className="img-box">
                  <picture>
                    <img src={s.image} alt={s.imageAlt} />
                  </picture>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
