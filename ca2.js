function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const ctx = React.useContext(UserContext);
  
    function validate(field, label) {
      if (!field) {
        setStatus("Error: ' + label");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
      return true;
    }
  
    function validateEmail() {
      let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.match(emailValidation)) {
        setStatus("Please enter valid email");
        setTimeout(() => setStatus(''), 3000);
        return false;
      }
      return true;
    }
  
    function validatePassword() {
      if (password.length < 8) {
        setStatus("Password must be at least 8 characters");
        setTimeout(() => setStatus(''), 3000);
        return false;
      }
      return true;
    }
  
    function handleCreate(){
      console.log(name, email, password);
      if (!validate(name, "name")) return;
      if (!validateEmail(email, "email")) return;
      if (!validatePassword(password, "password")) return;
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
            var res  = await fetch(url);
            var data = await res.json();    
            console.log(data);        
        })();
        props.setShow(false);
  }
  
    function clearForm() {
      setName("");
      setEmail("");
      setPassword("");
      setShow(true);
    }
  
    return (
      <>
      <Card
        bgcolor="dark"
        txtcolor="white"
        header="Create Bad Bank Account"
        status={status}
        body={
          show ? (
            <>
              First & Last Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter First & Last Name"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
              <br />
              Bad Bank Username
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <br />
              Password
              <br />
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Create Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <br />
              <button
                id="submit-button"
                disabled={!name || !email || !password}
                type="submit"
                className="btn btn-primary"
                onClick={handleCreate}
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Account Succefully Created!</h5>
              <button type="submit" className="btn btn-primary" onClick={clearForm}>
                Add Another Account
              </button>
              <br />
            </>
          )
        }
      />
      </>
    );
  }