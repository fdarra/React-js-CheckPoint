import React from 'react'
import players from '../players'
import Player from './Player'

const PlayerList = () => {

  return (
    <div className='container'>
    { players.map((player,key)=> 
      <Player {...player} key={player.name}/>
    )


    }
    </div>
  )
}

export default PlayerList