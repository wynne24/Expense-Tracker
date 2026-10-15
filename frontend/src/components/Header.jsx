import './Header.css'
import { ChevronLeft, ChevronRight, Moon, Sun, CircleUserRound } from 'lucide-react'
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
          <ChevronLeft />
        </a>
        <span className="page-title">Wallet-1</span>
        <a className="chevron-right">
          <ChevronRight />
        </a>
      </section>
    
      <section className="right-sec">
        <p>Cash</p>

        <select>
          <option value="today">$3,000.00</option>
        </select>

        <button className="theme-switcher-btn" onClick={toggleTheme}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </button>

        <a className="user-icon">
          <CircleUserRound />
        </a>
      </section>
    </nav>
  );
}