const topServices = [
  {
    href: 'https://scheduling.receptionist.jp/',
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
    label: 'クラウド受付システム',
    name: 'RECEPTIONIST',
    description: '来客受付業務をシンプルに',
    image: '/img/img_reception_small.png',
    imageAlt: 'クラウド受付システム',
  },
  {
    href: 'https://rooms.receptionist.jp/',
    icon: '/img/img_00-2-3@2x.png',
    iconAlt: '予約ルームズ',
    label: '会議室予約システム',
    name: '予約ルームズ',
    description: '会議室の利用マナーを整える',
    image: '/img/img_meetingroom_small.png',
    imageAlt: '会議室の予約管理システム',
  },
]

const bottomServices = [
  {
    href: 'https://event.receptionist.jp/',
    icon: '/img/img_00-2-event.png',
    iconAlt: '招待レセプション',
    label: 'イベント受付システム',
    name: '招待レセプション',
    description: 'イベント受付もQRでスムーズに',
    image: '/img/img_event_kv_small.png',
    imageAlt: 'イベント受付システム',
  },
  {
    href: 'https://ivr.receptionist.jp/',
    icon: '/img/img_00-2-ivr.png',
    iconAlt: '代表電話コネクト',
    label: '電話応答自動システム',
    name: '代表電話コネクト',
    description: '代表電話はシステムで一次受け',
    image: '/img/img_ivr_kv_small.png',
    imageAlt: '電話応答自動システム',
  },
]

function ServiceCard({ s }: { s: typeof topServices[0] }) {
  return (
    <div className="box uk-width-1-3@m" style={{ flex: '0 0 33.333%', maxWidth: '33.333%' }}>
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
  )
}

export default function ServiceCards() {
  return (
    <section className="top-service-index-wrap">
      <div className="container">
        <h3 className="uk-text-center">各サービスについて</h3>
        {/* 上段3つ */}
        <div className="uk-grid uk-grid-medium" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {topServices.map((s) => (
            <ServiceCard s={s} key={s.name} />
          ))}
        </div>
        {/* 下段2つ — 中央寄せ、上段と同じカード幅 */}
        <div className="uk-grid uk-grid-medium" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {bottomServices.map((s) => (
            <ServiceCard s={s} key={s.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
