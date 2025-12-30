import type { NavigationItem } from "../../types";

const navigationItems: NavigationItem[] = [
  { label: "Dashboard", icon: "📊", isActive: true },
  { label: "Transactions", icon: "💳" },
  { label: "Contacts", icon: "👥" },
  { label: "Features", icon: "⚙️" },
  { label: "Library", icon: "📚" },
];

const settingsItems: NavigationItem[] = [
  { label: "Base Wallet", icon: "💼" },
  { label: "My Contacts", icon: "📇" },
  { label: "Invoices", icon: "📄" },
  { label: "Schedules", icon: "📅" },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <span className="brand-icon">💜</span>
          <span className="brand-name">Super Finti</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav-list">
          {navigationItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`nav-item ${item.isActive ? "active" : ""}`}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {/* <span className="nav-arrow">→</span> */}
              </a>
            </li>
          ))}
        </ul>

        <ul className="nav-list">
          {settingsItems.map((item) => (
            <li key={item.label}>
              <a href="#" className="nav-item">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
                {/* <span className="nav-arrow">→</span> */}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="help-center">
        <div className="help-icon">?</div>
        <h3>Help Center</h3>
        <p>Having trouble in Finti. Please contact us for more questions.</p>
        <button className="help-button">Go To Help Center</button>
      </div>
    </aside>
  );
}
