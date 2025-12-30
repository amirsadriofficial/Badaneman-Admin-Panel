export function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-search">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search..." className="search-input" />
      </div>

      <div className="topbar-actions">
        <div className="topbar-icons">
          <span className="icon">📱</span>
          <span className="icon">✉️</span>
          <span className="icon">⋯</span>
        </div>
        <div className="topbar-links">
          <a href="#" className="link">
            Wallet
          </a>
          <a href="#" className="link">
            Invoice
          </a>
        </div>
        <div className="user-info">
          <span className="user-greeting">Hi, Shakir</span>
          <div className="user-avatar">👤</div>
        </div>
      </div>
    </header>
  );
}
