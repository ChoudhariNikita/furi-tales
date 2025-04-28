function Header() {
    return (
      <header className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <a className="navbar-brand" href="#">📚 Furi-Tales</a>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button className="btn btn-light btn-sm mx-2">About Us</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light btn-sm">Feedback</button>
            </li>
          </ul>
        </div>
      </header>
    );
  }
  
  export default Header;
  