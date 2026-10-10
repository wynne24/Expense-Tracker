import './Sidebar.css'
import { PiggyBankIcon, PanelOpenIcon, PanelCloseIcon, HouseIcon, ArrowLeftRightIcon, ChartPieIcon, WalletIcon, GoalIcon, ProfileIcon, SettingsIcon } from './Icons/Icons'
import { useState } from 'react'
import { NavLink } from 'react-router'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((cur) => cur ? false : true);
  }

  return (
    <aside className={isOpen ? "show" : "hide"}>
      <div className="sidebar-header">
        <NavLink to="/">
          <PiggyBankIcon />
  
          <p>LILPIGGY</p>
        </NavLink>

        <button onClick={toggleSidebar}>
          {isOpen ? <PanelCloseIcon /> : <PanelOpenIcon />}
        </button>
      </div>

      <div className="sidebar-list">
        <ul className="sidebar-top">
          <li>
            <NavLink to="/">
              <HouseIcon />
              <p>Overview</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions">
              <ArrowLeftRightIcon />
              <p>Transactions</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <ChartPieIcon />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet">
              <WalletIcon />
              <p>Accounts / Wallet</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="goals">
              <GoalIcon />
              <p>Goals / Budget Planning</p>
            </NavLink>
          </li>
        </ul>

        <ul className="sidebar-btm">
          <li>
            <NavLink to="profile">
              <ProfileIcon />
              <p>Profile</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="settings">
              <SettingsIcon />
              <p>Settings</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}