function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [accountId, setAccountId] = React.useState('');

  const validate = (field, label) => {
    if (!field) {
      setStatus("Error: Missing " + label);
      setTimeout(() => setStatus(""), 6000);
      return false;
    }
    return true;
  }

  const validateEmail = (email) => {
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailValidation)) {
      setStatus("Please enter a valid email");
      setTimeout(() => setStatus(''), 6000);
      return false;
    }
    return true;
  }

  const validatePassword = (password) => {
    if (password.length < 8) {
      setStatus("Password must be at least 8 characters");
      setTimeout(() => setStatus(''), 6000);
      return false;
    }
    return true;
  }

  return (
    <Card
      bgcolor="dark"
      header="Create Bad Bank Account"
      status={status}
      body={show ?
        <CreateForm setShow={setShow} setStatus={setStatus} setAccountId={setAccountId} setName={setName} setEmail={setEmail} setPassword={setPassword} accountId={accountId} name={name} email={email} password={password} /> :
        <CreateMsg setShow={setShow} setAccountId={setAccountId} setName={setName} setEmail={setEmail} setPassword={setPassword} />}
    />
  )


  function CreateMsg(props) {
    const accountId = Math.floor(Math.random() * 1000000)

    return (<>
      <h5>Thank you for registering with Bad Bank! Account #{accountId} successfully created!</h5>
      <button type="submit"
        className="btn btn-info"
        onClick={() => { props.setShow(true); props.setAccountId(''); props.setName(''); props.setEmail(''), props.setPassword(''); }}>Create another account</button>
    </>);
  }

  function CreateForm(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function handle() {
      console.log(name, email, password);
      const url = `/account/create/${accountId}/${name}/${email}/${password}`;
      (async () => {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
      })();
      if (!validate(name, "name")) return;
      if (!validateEmail(email, "email")) return;
      if (!validatePassword(password, "password")) return;
      ctx.users.push({ name, email, password, balance: 2000 });
      props.setShow(false);
    }

    return (<>

      Name<br />
      <input type="input"
        className="form-control"
        placeholder="Enter Name"
        value={name}
        onChange={e => setName(e.currentTarget.value)} /><br />

      Email address<br />
      <input type="input"
        className="form-control"
        placeholder="Enter Email"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)} /><br />

      Password<br />
      <input type="password"
        className="form-control"
        placeholder="Enter Password"
        value={password}
        onChange={e => setPassword(e.currentTarget.value)} /><br />

      <button type="submit"
        className="btn btn-info"
        disabled={!name || !email || !password}
        onClick={handle}>Create Account</button>

    </>);
  }
}