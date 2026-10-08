import './Header.css'
import { ChevronLeftIcon, ChevronRightIcon, MoonIcon, SunIcon, ProfileIcon } from './Icons/Icons'
import { useState, useEffect } from 'react'

export function Header() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((cur) => cur === "light" ? "dark" : "light");
  }

  return (
    <nav>
      <section className="left-sec">
        <a className="chevron-left">
          <ChevronLeftIcon />
        </a>
        <span className="page-title">Overview</span>
        <a className="chevron-right">
          <ChevronRightIcon />
        </a>
      </section>
    
      <section className="right-sec">
        <select>
          <option value="today">Today</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="year">Year</option>
          <option value="ytd">YTD</option>
        </select>

        <button className="theme-switcher-btn" onClick={toggleTheme}>
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>

        <a className="user-icon">
          <ProfileIcon />
        </a>
      </section>
    </nav>
  );
}