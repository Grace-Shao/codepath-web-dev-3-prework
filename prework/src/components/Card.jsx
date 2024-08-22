import React from 'react'
import { useState } from 'react'
// import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {
  return (
      <div className="Card">
        <Link to={'edit/'+ props.id}><button className="editButton" alt="edit button"/></Link>
        <h2 className="name">{props.name}</h2>
        <h3 className="url">{"url: " + props.url}</h3>
        <p className="description">{props.description}</p>
        <p><Link to={`SingleCreator/${props.id}`}>More Details</Link></p>
      </div>
  );
};

export default Card;