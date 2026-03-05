export default function Footer() {
  return (
    <footer className="footer">
      <div className="section foot-nav-wrapper">
        <nav className="foot-nav container">
          <div className="uk-flex" style={{ flexWrap: 'wrap', gap: '30px' }}>
            <div className="uk-width-1-6@m">
              <div className="f-logo">
                <a href="https://all.receptionist.jp/">
                  <img src="/img/f_r_logo.svg" alt="株式会社RECEPTIONIST" />
                </a>
                <p className="pmark">
                  <img src="/img/isms.png" alt="isms" />
                </p>
              </div>
            </div>
            <div className="uk-width-5-6@m uk-flex" style={{ flexWrap: 'wrap', gap: '0' }}>
              {/* RECEPTIONIST */}
              <div className="f-nav-col">
                <div className="tit-box">
                  <h6>
                    <a href="https://receptionist.jp/">
                      <small>クラウド受付システム</small>RECEPTIONIST
                    </a>
                  </h6>
                </div>
                <ul className="f-nav-list">
                  <li><a href="https://receptionist.jp/function">機能の紹介</a></li>
                  <li><a href="https://receptionist.jp/case">導入事例</a></li>
                  <li><a href="https://receptionist.jp/plan">料金表</a></li>
                  <li><a href="https://receptionist.jp/document">資料一覧</a></li>
                </ul>
              </div>
              {/* 予約ルームズ */}
              <div className="f-nav-col">
                <div className="tit-box">
                  <h6>
                    <a href="https://rooms.receptionist.jp/">
                      <small>会議室の予約管理システム</small>予約ルームズ
                    </a>
                  </h6>
                </div>
                <ul className="f-nav-list">
                  <li><a href="https://rooms.receptionist.jp/function/">機能の紹介</a></li>
                  <li><a href="https://rooms.receptionist.jp/case/">導入事例</a></li>
                  <li><a href="https://rooms.receptionist.jp/document-price/">料金表</a></li>
                  <li><a href="https://rooms.receptionist.jp/documents/">資料</a></li>
                </ul>
              </div>
              {/* 調整アポ */}
              <div className="f-nav-col">
                <div className="tit-box">
                  <h6>
                    <a href="https://scheduling.receptionist.jp/">
                      <small>日程調整ツール</small>調整アポ
                    </a>
                  </h6>
                </div>
                <ul className="f-nav-list">
                  <li><a href="https://scheduling.receptionist.jp/function">機能の紹介</a></li>
                  <li><a href="https://scheduling.receptionist.jp/case">導入事例</a></li>
                  <li><a href="https://scheduling.receptionist.jp/plan">料金表</a></li>
                  <li><a href="https://scheduling.receptionist.jp/document">資料</a></li>
                </ul>
              </div>
              {/* 招待レセプション */}
              <div className="f-nav-col">
                <div className="tit-box">
                  <h6>
                    <a href="https://event.receptionist.jp/">
                      <small>イベント受付システム</small>招待レセプション
                    </a>
                  </h6>
                </div>
                <ul className="f-nav-list">
                  <li><a href="https://event.receptionist.jp/function/">機能の紹介</a></li>
                  <li><a href="https://event.receptionist.jp/case/">導入事例</a></li>
                  <li><a href="https://event.receptionist.jp/document/">資料</a></li>
                </ul>
              </div>
              {/* 代表電話コネクト */}
              <div className="f-nav-col">
                <div className="tit-box">
                  <h6>
                    <a href="https://ivr.receptionist.jp/">
                      <small>代表電話の自動応答</small>代表電話コネクト
                    </a>
                  </h6>
                </div>
                <ul className="f-nav-list">
                  <li><a href="https://ivr.receptionist.jp/function/">機能の紹介</a></li>
                  <li><a href="https://ivr.receptionist.jp/case/">導入事例</a></li>
                  <li><a href="https://ivr.receptionist.jp/document/">資料</a></li>
                </ul>
              </div>
              {/* サポート */}
              <div className="f-nav-col">
                <div className="tit-box">
                  <h6><small className="pc">&nbsp;</small>サポート</h6>
                </div>
                <ul className="f-nav-list">
                  <li><a href="https://app.receptionist.jp/sign_in">ログイン</a></li>
                  <li><a href="https://receptionist.jp/seminar/">講習会</a></li>
                  <li><a href="https://help.receptionist.jp/">ヘルプサイト</a></li>
                </ul>
              </div>
              {/* 下部リンク */}
              <nav className="f_s_nav w100">
                <ul>
                  <li><a href="https://receptionist.jp/company/" target="_blank" rel="noopener noreferrer">運営会社情報</a></li>
                  <li>|</li>
                  <li><a href="https://help.receptionist.jp/?p=402">個人情報保護方針</a></li>
                  <li>|</li>
                  <li><a href="https://receptionist.jp/trade-mark/">商標について</a></li>
                  <li>|</li>
                  <li><a href="https://help.receptionist.jp/?p=398">利用規約</a></li>
                </ul>
              </nav>
              <p className="f-copyright w100"><small>&copy; RECEPTIONIST, Inc</small></p>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  )
}
