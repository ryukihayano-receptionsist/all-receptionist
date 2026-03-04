'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* PC Header */}
      <header className="header pc" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="container">
          <div className="h_top-block">
            <div className="h_left">
              <Link href="/" className="logo-mark">
                <img src="/img/img-logo-reception.svg" alt="RECEPTIONIST" />
              </Link>
              <nav className="h_l_nav">
                <ul>
                  <li><a href="https://receptionist.jp/">受付システム</a></li>
                  <li><a href="https://scheduling.receptionist.jp">日程調整ツール</a></li>
                  <li><a href="https://rooms.receptionist.jp">会議室予約システム</a></li>
                </ul>
              </nav>
            </div>
            <div className="h_right">
              <nav className="h_r_nav">
                <ul>
                  <li>
                    <a href="https://receptionist.jp/document-200/" className="btn btn_dl pc">
                      資料ダウンロード
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* SP Header */}
      <div className="h_top-block sp">
        <Link href="/" className="logo-mark">
          <img src="/img/img-logo-reception.svg" alt="RECEPTIONIST" />
        </Link>
        <p className="site-title">総合トップ</p>
        <div
          className={`navbar-burger burger sp${menuOpen ? ' is-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* SP Menu */}
      <nav className={`navbar-menu h_nav_sp sp${menuOpen ? ' is-active' : ''}`}>
        <div className="inner">
          <a href="https://receptionist.jp/document-200/" className="btn btn_dl">
            資料ダウンロード
          </a>
          <dl>
            <dd><Link href="/" onClick={() => setMenuOpen(false)}>総合トップ</Link></dd>
            <dd>
              <h6>製品紹介</h6>
              <ul className="nav_product">
                <li>
                  <a href="https://scheduling.receptionist.jp">
                    <span className="icon">
                      <img src="/img/img_00-2-1.svg" alt="日程調整ツール「調整アポ」" />
                    </span>
                    <p>調整アポ<small>日程調整ツール</small></p>
                  </a>
                </li>
                <li>
                  <a href="https://receptionist.jp/">
                    <span className="icon">
                      <img src="/img/img_00-2-2.svg" alt="クラウド受付システムRECEPTIONIST" />
                    </span>
                    <p>RECEPTIONIST<small>クラウド受付システム</small></p>
                  </a>
                </li>
                <li>
                  <a href="https://rooms.receptionist.jp">
                    <span className="icon">
                      <img src="/img/img_00-2-3@2x.png" alt="予約ルームズ" />
                    </span>
                    <p>予約ルームズ<small>会議室の予約管理システム</small></p>
                  </a>
                </li>
              </ul>
            </dd>
            <dd><Link href="/column/" onClick={() => setMenuOpen(false)}>コラム</Link></dd>
            <dd><Link href="/event/" onClick={() => setMenuOpen(false)}>イベント情報</Link></dd>
          </dl>
        </div>
      </nav>
    </>
  )
}
