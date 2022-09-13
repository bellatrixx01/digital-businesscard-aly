import React from "react"

export default function Header() {
  return (
    <header>
      <img src="src\images\me2x2.jpg" alt="prof" width="317px" />
      <h2 className="header--name">Alyssa Sanchez</h2>
      <p className="header--job">Frontend Developer</p>
      <p className="header--website">alyxnchz.website</p>
      {/* button */}
      <div className="buttons">
        <a className="button-link" href="mailto:sanchezaeinstein@gmail.com">
          <button className="header--button">
            <span className="button-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <span className="button-email">Email</span>
          </button>
        </a>

        <a className="button-link" href="#">
          <button className="linkedin--button">
            <span className="button-icon">
              <ion-icon name="logo-linkedin"></ion-icon>
            </span>
            <span className="button-linkedin">LinkedIn</span>
          </button>
        </a>
      </div>
    </header>
  )
}
