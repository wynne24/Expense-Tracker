import { Routes, Route } from 'react-router'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { HomePage }from './pages/home/HomePage'
import '../../html and css/root.css'

function App() {

  return (
    <>
      <Sidebar />

      <div className="layout">
        <Header />
      
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="transactions" element={<HomePage />} />
          <Route path="dashboard" element={<HomePage />} />
          <Route path="wallet" element={<HomePage />} />
          <Route path="goals" element={<HomePage />} />
          <Route path="profile" element={<HomePage />} />
          <Route path="settings" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
