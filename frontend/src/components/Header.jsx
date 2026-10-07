import './Header.css'
import { useState, useEffect } from 'react'

export function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((cur) => cur === "light" ? "dark" : "light");
  }

  return (
    <nav>
      <section className="left-sec">
        <a className="chevron-left">
          <svg className="svg-chevron-left" viewBox="0 0 24 24" stroke="currentColor">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </a>
        <span className="page-title">Overview</span>
        <a className="chevron-right">
          <svg className="svg-chevron-right" viewBox="0 0 24 24" stroke="currentColor">
            <path d="m9 18 6-6-6-6"/>
          </svg>
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
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" stroke="currentColor">
            <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
          </svg>
        )}
        </button>

        <a className="user-icon">
          <svg viewBox="0 0 24 24" stroke="currentColor">
            <path d="M17.925 20.056a6 6 0 0 0-11.851.001" />
            <circle cx="12" cy="11" r="4" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </a>
      </section>
    </nav>
  );
}