import React,{ useState } from 'react'
import ProgressiveBar from './ProgressiveBar'

export default function Home() {
  const [value, setValue] = useState(100)
  const takeValue = (e) => {
    setValue(e.target.value)
  }
  return (
    <div className='home'>
      <h1>Progressive Bar</h1>
      <ProgressiveBar width={value}/>
      <form action="" className='progress'>
        <label htmlFor="val">Input Percentage : </label>
        <input type="number" id='val' value={value} onChange={takeValue}/>
      </form>
    </div>
  )
}
