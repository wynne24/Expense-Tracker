import './Sidebar.css'
import { PiggyBank, PanelRight, PanelLeft, House, ArrowLeftRight, ChartPie, Wallet, Goal, CircleUserRound, Settings } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 800);

  const toggleSidebar = () => {
    setIsOpen((cur) => cur ? false : true);
  }

  return (
    <aside className={isOpen ? "show" : "hide"}>
      <div className="sidebar-header">
        <NavLink to="/">
          <PiggyBank />
  
          <p>LILPIGGY</p>
        </NavLink>

        <button onClick={toggleSidebar}>
          {isOpen ? <PanelLeft /> : <PanelRight />}
        </button>
      </div>

      <div className="sidebar-list">
        <ul className="sidebar-top">
          <li>
            <NavLink to="/">
              <House />
              <p>Overview</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions">
              <ArrowLeftRight />
              <p>Transactions</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <ChartPie />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/accounts">
              <Wallet />
              <p>Accounts / Wallet</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="goals">
              <Goal />
              <p>Goals / Budget Planning</p>
            </NavLink>
          </li>
        </ul>

        <ul className="sidebar-btm">
          <li>
            <NavLink to="profile">
              <CircleUserRound />
              <p>Profile</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="settings">
              <Settings />
              <p>Settings</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}