import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TextInput from './TextInput'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Hello, Please enter in below your name and full SSN</p>
      <TextInput placeholder="Hi there" cName="butt" />
    </div>
  );
    
}

export default App
