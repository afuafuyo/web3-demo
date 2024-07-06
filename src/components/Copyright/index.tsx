import './index.css'

export default function Copyright() {
  return (
    <div className="c-wrapper">
      <div className="c-left">2024 Company Name. All Rights Reserved.</div>
      <div className="c-right">
        <img src="/images/x.svg" className="c-right-icon"/>
        <img src="/images/git.svg" className="c-right-icon"/>
        <img src="/images/tg.svg" className="c-right-icon"/>
        <img src="/images/med.svg" className="c-right-icon"/>
      </div>
    </div>
  )
}