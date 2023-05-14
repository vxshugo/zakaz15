import React from 'react'
import './main.css'
import background from './backgroundImage.png';

const Main = () => {
  return (
    <div className="main">
      <div className="main-background" style={{ backgroundImage: `url("https://evatex37.ru/sites/default/files/field/image/ocenka-kachestva-tkani.jpg")` }} />
      <div className="main-container">
        <div className="main-content">
          <div className="main-text">
            Тігілген модельдер мен үлгілердің сапасын бақылау
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main