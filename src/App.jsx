import { useState } from 'react'

function App() {
 const [color, setColor] = useState('')

  return (
    <>
      <h2>color generator</h2>
      <input type="color" value={color} onInput={(e) => setColor(e.target.value)} />

      <div className='container' style={{backgroundColor:color}}></div>
    </>
  )
}

export default App
