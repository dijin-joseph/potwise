import "./Navbar.css";

import { Search, HardDrive, Settings, Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar-menu">
      <div className="nav-content">
        <div className="navbar-left">
          <div className="search-container">
            <Search className="search-icon" size={18} />

            <input
              className="input-search"
              type="search"
              placeholder="Search pots..."
              aria-label="Search pots"
            />
          </div>
        </div>

        <div className="navbar-right">
          <div className="storage-indicator">
            <HardDrive size={18} />
            <span className="storage-dot"></span>
            <span className="storage-text">Stored locally</span>
          </div>

          <div className="navbar-divider"></div>
          <div className="settings-container">
            <Settings className="settings-icon" size={22} />
          </div>
          <div>
            <button className="add-pot-btn">
              <Plus size={18} />
              Add Pot
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
