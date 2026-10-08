import './Sidebar.css'
import { PiggyBankIcon, PanelOpenIcon, PanelCloseIcon, HouseIcon, ArrowLeftRightIcon, ChartPieIcon, WalletIcon, GoalIcon, ProfileIcon, SettingsIcon } from './Icons/Icons'
import { useState } from 'react'
import { Link } from 'react-router'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((cur) => cur ? false : true);
  }

  return (
    <aside>
      <div className="sidebar-header">
        <Link to="/">
          <PiggyBankIcon />
  
          <p>LILPIGGY</p>
        </Link>

        <button onClick={toggleSidebar}>
          {isOpen ? <PanelCloseIcon /> : <PanelOpenIcon />}
        </button>
      </div>

      <div className="sidebar-list">
        <ul className="sidebar-top">
          <li>
            <Link to="/">
              <HouseIcon />
              <p>Overview</p>
            </Link>
          </li>
          <li>
            <Link to="/transactions">
              <ArrowLeftRightIcon />
              <p>Transactions</p>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <ChartPieIcon />
              <p>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link to="/wallet">
              <WalletIcon />
              <p>Accounts / Wallet</p>
            </Link>
          </li>
          <li>
            <Link to="goals">
              <GoalIcon />
              <p>Goals / Budget Planning</p>
            </Link>
          </li>
        </ul>

        <ul className="sidebar-btm">
          <li>
            <Link to="profile">
              <ProfileIcon />
              <p>Profile</p>
            </Link>
          </li>
          <li>
            <Link to="settings">
              <SettingsIcon />
              <p>Settings</p>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}