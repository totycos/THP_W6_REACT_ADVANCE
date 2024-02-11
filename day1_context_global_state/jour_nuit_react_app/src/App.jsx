import { useState } from 'react'
import JourNuitContext from './contexts/JourNuitContext';
import Button from './components/Button'
import Light from './components/Light'
import './App.css'

function App() {
  const [jour, setJour] = useState(true)


  return (
    <JourNuitContext.Provider value={{
      jour, // Ici on utilise le « short property assignment » ;)
      switch: () => setJour(!jour)
    }}>
      <Light />
      <Button />
    </JourNuitContext.Provider>
  )
}

export default App
