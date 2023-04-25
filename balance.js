function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [balance, setBalance] = React.useState('');
  const [user, setUser] = React.useState(''); 

  return (
    <Card
      bgcolor="dark"
      header={(<img src="balance.jpg" className="img-fluid" alt="Bad Bank Logo"/>)}
      title="Check your balance by logging in with your email"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus} setUser={setUser} /> :
        <BalanceMsg setShow={setShow} setStatus={setStatus} user={user} balanc={balance}/>}
    />
  )

}

function BalanceMsg(props){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  
  const [balance, setBalance] = React.useState('');
  const [user, setUser] = React.useState(''); 
  return(<>
    <h5>Your balance: ${props.user.balance}</h5>
    <button type="submit" 
      className="btn btn-info" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        View a different account
    </button>
  </>);
}

function BalanceForm(props){
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  return (<>
 
    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    <button type="submit" 
      disabled={!email}
      className="btn btn-info" 
      onClick={handle}>
        View Balance
    </button>
  

  </>);
}