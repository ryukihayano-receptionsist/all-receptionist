const logos1 = [
  '/img/reception-clients-logo-9@3x.png',
  '/img/reception-clients-logo-8.svg',
  '/img/logo/Nissan.png',
  '/img/kiwpie.jpg',
  '/img/reception-clients-logo-4.svg',
  '/img/logo/uuum.jpg',
  '/img/reception-clients-logo-18.svg',
  '/img/reception-clients-logo-17.svg',
  '/img/reception-clients-logo-16.svg',
  '/img/reception-clients-logo-15.svg',
  '/img/logo/raksul.jpg',
  '/img/reception-clients-logo-13.svg',
  '/img/reception-clients-logo-12.svg',
]

const logos2 = [
  '/img/reception-clients-logo-18.svg',
  '/img/reception-clients-logo-17.svg',
  '/img/reception-clients-logo-16.svg',
  '/img/reception-clients-logo-15.svg',
  '/img/logo/raksul.jpg',
  '/img/reception-clients-logo-13.svg',
  '/img/reception-clients-logo-12.svg',
  '/img/reception-clients-logo-9@3x.png',
  '/img/reception-clients-logo-8.svg',
  '/img/lm.jpg',
  '/img/kiwpie.jpg',
  '/img/reception-clients-logo-4.svg',
  '/img/reception-clients-logo-3.svg',
]

export default function LogoSlider() {
  return (
    <div className="logo-slider">
      <div className="logo-slide-track">
        {logos1.map((src, i) => (
          <div className="slide" key={`a-${i}`}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
      <div className="logo-slide-track">
        {logos2.map((src, i) => (
          <div className="slide" key={`b-${i}`}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
