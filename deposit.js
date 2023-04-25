function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
  const [deposit, setDeposit] = React.useState('');
  const [balance, setBalance] = React.useState(2000);
  


  return (
    <Card
      bgcolor="dark"
      title="Deposit"
      header={(<img src="deposit.jpg" className="img-fluid" alt="Bad Bank Logo"/>)}
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus} setBalance={setBalance}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-info" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Make Another Deposit
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');

  function handle(){
    fetch(`/account/update/${email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(JSON.stringify(data.value));
            props.setShow(false);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed: Please enter registered email')
            console.log('err:', text);
        }
    });
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="$0.00" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
    disabled={!email || !amount}
      className="btn btn-info" 
      onClick={handle}>Deposit Funds</button>

  </>);
}