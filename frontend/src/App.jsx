import { Routes, Route } from 'react-router'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { HomePage }from './pages/home/HomePage'
import { TransactionPage }from './pages/transaction/TransactionPage'
import { DashboardPage }from './pages/dashboard/DashboardPage'
import { GoalPage }from './pages/goal/GoalPage'
import { AccountPage }from './pages/account/AccountPage'
import { ProfilePage }from './pages/profile/ProfilePage'
import './assets/root.css'

function App() {

  return (
    <>
      <Sidebar />

      <Header />
    
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="transactions" element={<TransactionPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="accounts" element={<AccountPage />} />
        <Route path="goals" element={<GoalPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
