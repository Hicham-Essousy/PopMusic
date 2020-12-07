import React from 'react'
import './hed.css'
const Tracks = (props) => {
    return (
        
            props.item.map((track,index)=> (
                <figure key={index} className="figure">
                    <figcaption className="figure-caption text-xs-right"> {track.title} </figcaption>
                    <audio controls src={track.preview}>
                    Your browser does not support the audio element.
                    </audio>
                </figure>
            
               
            )))
    
}

export default Tracks
