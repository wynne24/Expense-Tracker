import { Routes, Route } from 'react-router'
import { HomePage }from './pages/home/HomePage'
import '../../html and css/root.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
