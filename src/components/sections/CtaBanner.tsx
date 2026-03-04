export default function CtaBanner() {
  return (
    <section className="bnr_dl_cta">
      <div className="container_full">
        <div className="bn-wrap uk-flex">
          <div className="txt-box">
            <h4>
              詳しくは、資料を<br className="sp" />
              ダウンロードください。
            </h4>
            <p className="b1 b2-sp">
              基本的な機能はもちろん、サポートの内容から導入事例まで詳しくご紹介しています。<br />
              サービス導入を検討されている方にぜひご覧いただきたい資料になります。
            </p>
            <div className="btn-box">
              <a href="https://receptionist.jp/document/" className="btn btn_dl">
                詳しい資料をダウンロード
              </a>
            </div>
          </div>
          <div className="img-box">
            <picture>
              <img src="/img/img_0.1-3-1.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
