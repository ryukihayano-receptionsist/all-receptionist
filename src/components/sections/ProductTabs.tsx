'use client'

import { useState } from 'react'

const tabs = [
  {
    label: '日程調整ツール',
    icon: '/img/img_00-2-1.svg',
    productLabel: '日程調整ツール',
    name: '調整アポ',
    heading: '日程調整の手作業がなくなる',
    description: 'スケジュール調整をする時に手間のかかる作業をシステムで自動化。コピペしたURLを送るだけ日程調整が終わります。',
    image: '/img/img_scheduling_kv_middle.png',
  },
  {
    label: '受付システム',
    icon: '/img/img_00-2-2.svg',
    productLabel: 'クラウド受付システム',
    name: 'RECEPTIONIST',
    heading: 'あらゆる環境の受付の取次が０に',
    description: '来客受付をスムーズに行い、来客履歴はクラウドに自動保存されます。',
    image: '/img/img_reception_kv_middle.png',
  },
  {
    label: '会議室予約システム',
    icon: '/img/img_00-2-3@2x.png',
    productLabel: '会議室予約システム',
    name: '予約ルームズ',
    heading: '会議室の「空いてない」を解決',
    description: '空いてるスペースが一目でわかり、即予約ができます。時間お知らせ機能で退出の促しも可能です。',
    image: '/img/img_meetingroom_kv_middle.png',
  },
  {
    label: 'イベント受付',
    icon: '/img/img_00-2-event.png',
    productLabel: 'イベント受付システム',
    name: '招待レセプション',
    heading: 'イベント受付もQRでスムーズに',
    description: '招待状の発行から当日の受付まで、イベントに必要な受付業務をQRコードでシステム化。受付の混雑を解消します。',
    image: '/img/img_event_kv_middle.png',
  },
  {
    label: '代表電話',
    icon: '/img/img_00-2-ivr.png',
    productLabel: '電話応答自動システム',
    name: '代表電話コネクト',
    heading: '代表電話はシステムで一次受け',
    description: 'AIが代表電話に自動応答し、用件をチャットで担当者に通知。電話の取次業務をなくします。',
    image: '/img/img_ivr_kv_middle.png',
  },
]

export default function ProductTabs() {
  const [active, setActive] = useState(0)

  return (
    <section className="top-about">
      <div className="container">
        <h3>
          組織のコミュニケーションをアップデートする<br className="sp" />５つのサービス
        </h3>
        <div className="top-about-wrap">
          {/* Tab buttons */}
          <ul className="uk-subnav" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
            {tabs.map((tab, i) => (
              <li key={i} className={active === i ? 'uk-active' : ''}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setActive(i)
                  }}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="top-about-content" style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
          {/* Text content */}
          <div className="txt-box" style={{ flex: '1 1 45%', minWidth: '280px' }}>
            <div className="tit-box">
              <div className="icon-box">
                <img src={tabs[active].icon} alt="" />
              </div>
              <h3>
                <small>{tabs[active].productLabel}</small>
                {tabs[active].name}
              </h3>
            </div>
            <h4>{tabs[active].heading}</h4>
            <p>{tabs[active].description}</p>
          </div>
          {/* Image */}
          <div className="img-box" style={{ flex: '1 1 45%', minWidth: '280px' }}>
            <img src={tabs[active].image} alt={tabs[active].name} style={{ width: '100%', height: 'auto' }} />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
