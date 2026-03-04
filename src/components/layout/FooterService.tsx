export default function FooterService() {
  return (
    <section className="service-index-wrap">
      <div className="container">
        <h3 className="uk-text-center">RECEPTIONISTシリーズについて</h3>
        <p className="b1 b2-sp uk-text-center">
          RECEPTIONISTシリーズは、<br className="sp" />社外ビジネスコミュニケーションをアップデートすることで、<br />
          社員ひとり一人がさらにパフォーマンスを発揮できる<br className="sp" />環境を作るクラウドサービス群です。
        </p>
        <div className="uk-grid uk-grid-medium" style={{ marginTop: 'var(--spacing-m)' }}>
          {/* 調整アポ */}
          <div className="card-box uk-width-1-3@m">
            <div className="uk-card uk-card-default uk-card-body">
              <a href="https://scheduling.receptionist.jp">
                <div className="tit-box">
                  <div className="icon-box">
                    <img src="/img/img_00-2-1.svg" alt="調整アポ" />
                  </div>
                  <h3><small>日程調整ツール</small>調整アポ</h3>
                </div>
                <p className="b1 uk-text-justify">日程調整がコピペで終わる</p>
                <div className="img-box">
                  <picture>
                    <img src="/img/services/img_cheduling_kv_small.png" alt="日程調整ツール" />
                  </picture>
                </div>
              </a>
            </div>
          </div>
          {/* RECEPTIONIST */}
          <div className="card-box uk-width-1-3@m">
            <div className="uk-card uk-card-default uk-card-body">
              <a href="https://receptionist.jp/">
                <div className="tit-box">
                  <div className="icon-box">
                    <img src="/img/img_00-2-2.svg" alt="RECEPTIONIST" />
                  </div>
                  <h3><small>受付システム</small>RECEPTIONIST</h3>
                </div>
                <p className="b1 uk-text-justify">シェアNo.1 クラウド受付システム</p>
                <div className="img-box">
                  <picture>
                    <img src="/img/services/img_reception_small.png" alt="クラウド受付システム" />
                  </picture>
                </div>
              </a>
            </div>
          </div>
          {/* 予約ルームズ */}
          <div className="card-box uk-width-1-3@m">
            <div className="uk-card uk-card-default uk-card-body">
              <a href="https://rooms.receptionist.jp">
                <div className="tit-box">
                  <div className="icon-box">
                    <img src="/img/img_00-2-3@2x.png" alt="予約ルームズ" />
                  </div>
                  <h3><small>会議室の予約管理システム</small>予約ルームズ</h3>
                </div>
                <p className="b1 uk-text-justify">会議室などの予約管理をカンタンに</p>
                <div className="img-box">
                  <picture>
                    <img src="/img/services/img_meetingroom_small.png" alt="会議室の予約管理システム" />
                  </picture>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
