import React from 'react'

import './card.style.css'

export const Card = props => (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
        <h4>{props.monster.username}</h4>
        <p>{props.monster.email}</p>
    </div>
)

// {props.monsters.map(monster =>
//     <Card key={monster.id} name="monster"></Card>)}