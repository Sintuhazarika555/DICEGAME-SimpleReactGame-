import { useState } from 'react'
import './App.css'
import Comp1 from './component/comp1.jsx' 
// component se jo bhi export ho rha hai usko Comp1 name se use krenge

function App() {

  return (
    <div id='yha'>
      <Comp1/>
      {/* then use Comp1 name ka tag bna k use kr skte hai */}
    </div>
  )
}

export default App