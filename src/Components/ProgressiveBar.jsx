import React from 'react'

export default function ProgressiveBar({width}) {
  return (
    <div className='container'>
      <div className="parent">
        {width >= 0 && width <= 100 ? (<div className="dynamic" style={{width : `${width}%`}}>
          <h2>{width}%</h2>
        </div>) : alert('The value is not valuable')}
        
      </div>
    </div>
  )
}
