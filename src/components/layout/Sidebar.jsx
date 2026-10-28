import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Sidebar.css";

import {
  LayoutDashboard,
  BanknoteArrowUp,
  Wallet,
  CalendarDays,
  PiggyBank,
  ChartNoAxesCombined,
  Settings,
  Menu,
  X,
} from "lucide-react";
const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: "income",
    label: "Income",
    icon: BanknoteArrowUp,
  },
  {
    id: "pots",
    label: "My Pots",
    icon: Wallet,
  },
  {
    id: "budgets",
    label: "Monthly Budgets",
    icon: CalendarDays,
  },
  {
    id: "savings",
    label: "Savings",
    icon: PiggyBank,
  },
  {
    id: "insights",
    label: "Insights",
    icon: ChartNoAxesCombined,
  },
];

export default function Sidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState);
  }

  return (
    <aside className="sidebar-menu">
      {/* Logo and mobile hamburger */}
      <div className="sidebar-header">
        <button
          className="sidebar-hamburger"
          type="button"
          onClick={toggleMenu}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="sidebar-navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <img className="logo-image" src={logo} alt="PotWise" />
      </div>

      <hr className="sidebar-divider" />

      {/* Main navigation */}
      <nav
        id="sidebar-navigation"
        className={`menu-bar ${isMenuOpen ? "menu-open" : ""}`}
        aria-label="Main navigation"
      >
        <ul>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <Icon size={18} strokeWidth={2} />
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>

        {/* Settings */}
        <div className="sidebar-settings">
          <hr className="sidebar-settings-divider" />

          <ul>
            <li>
              <Settings size={18} strokeWidth={2} />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
