import React from 'react'
import logo from '../../images/logo.png'
import './Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="container">
          <div className="wrapp2">
              <div className="logo_wrapper">
                <img className='footer_logo' src={logo} alt="" />
                <p>GIRLS IN DIGITAL</p>
              </div>
              <ul>
                    <li>О Проекте</li>
                    <li>Направления</li>
                    <li>Результаты</li>
                    <li>Контакты</li>
              </ul>

              <div className="icons_wrap">
                <i class="fa-brands fa-square-instagram social"></i>
                <i class="fa-brands fa-telegram social"></i>
                <i class="fa-brands fa-youtube social"></i>
                <i class="fa-brands fa-square-facebook social"></i>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Footer