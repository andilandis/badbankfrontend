function Spa() {
  return (
      <HashRouter>
          <div>
              <NavBar></NavBar>
              <UserContext.Provider value={{ users: [{ name: 'Keeley Jones', email: 'keeley@kjpr.com', password: 'bantr', balance: 10000 }] }}>
                  <div className="container" style={{ padding: "20px" }}>
                      <Route path="/" exact component={Home} />
                      <Route path="/CreateAccount/" component={CreateAccount} />
                      <Route path="/login/" component={Login}  />
                      <Route path="/deposit/" component={Deposit} />
                      <Route path="/withdraw/" component={Withdraw} />
                      <Route path="/balance/" component={Balance} />
                      <Route path="/alldata/" component={AllData} />
                  </div>
              </UserContext.Provider>
          </div>
      </HashRouter>
  );
}

ReactDOM.render(<Spa></Spa>,
  document.getElementById('root')
);