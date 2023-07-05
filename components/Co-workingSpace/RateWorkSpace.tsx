
import React from 'react';
import ReactStars from 'react-stars'
  
export default function RateWorkSpace(){
  return (
    <div >
      <ReactStars
        count={5}
        size={24}
        color2={'#ffd700'} />
    </div>
  )
}