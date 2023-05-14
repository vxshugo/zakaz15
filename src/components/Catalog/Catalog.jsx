import React from 'react'
import "./catalog.css"
import { Link } from 'react-router-dom'
const Catalog = ({ link, name, option, imgLink }) => {
  return (
    <div className='catalog'>
      <img src={imgLink} />
      {option ? (
        <p>{option}</p>
      ) : <></>}
      <div className='catalog-link'>
        <h4><Link style={{ color: "inherit" }} to={link}>{name}</Link></h4>
        <h4><Link style={{ color: "inherit" }} to={link}>Өту</Link></h4>
      </div>
    </div>
  )
}

export default Catalog