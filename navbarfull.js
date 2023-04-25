function NavBar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-info" data-bs-theme="dark">
          <div className="container-fluid">
              <a className="navbar-brand mb-0 h1" href="#">Bad Bank Home
                  <img src="bank.png" alt="BadBank Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" href="#">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                      <li className="nav-item">
                          <a className="nav-link" href="#/createAccount/">Create Account</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#/login/">Login</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#/deposit/">Deposit</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#/withdraw/">Withdraw</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#/balance/">Balance</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#/alldata/">All Data</a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  )
};
