import React from 'react'
import { Button, Card } from 'react-bootstrap'


const Player = (data) => {
    const { name, team, nationality, jerseyNumber, age, imageUrl } = data
  return (
    <div >


<Card id='card' style={{ width :'18rem' , margin: ' 50px 10px 10px 10'}}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            <p>Age : {age} </p>
            <p>Nationality : {nationality} </p>
            <p>Team : {team} </p>
            <p>JerseyNumber : {jerseyNumber} </p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
    </div>
  )
}
Player.deafaultProps = {
    name: "ahmed mhamed",
  age: "20years",
  jerseyNumber: "10",
  nationality: "tunisien",
  team: "tunis",
  photo:
    "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg",
};


export default Player