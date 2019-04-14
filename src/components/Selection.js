import React from 'react';
import './sidebar.css'

//generating the individual genre tags from the genres array
const Selection = (props) => {
  return (
    <div className="sidebar">
      <div value={props.genre} onChange={props.onGenChange}>
        {props.genres.map(gen => (
          <button className="gen-btn"
              key={gen.id}
              value={gen.name}
              onClick={props.onClickGen}>
          {gen.name}</button>
        ))}
      </div>
    </div>
  )


}

export default Selection;
