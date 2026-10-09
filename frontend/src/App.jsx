import { Routes, Route } from 'react-router'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { HomePage }from './pages/home/HomePage'
import { DashboardPage }from './pages/dashboard/DashboardPage'
import { GoalPage }from './pages/goal/GoalPage'
import { WalletPage }from './pages/wallet/WalletPage'
import { AccountPage }from './pages/account/AccountPage'
import '../../html and css/root.css'

function App() {

  return (
    <>
      <Sidebar />

      <Header />
    
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="transactions" element={<HomePage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="wallet" element={<WalletPage />} />
        <Route path="goals" element={<GoalPage />} />
        <Route path="profile" element={<AccountPage />} />
        <Route path="settings" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
