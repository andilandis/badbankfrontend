function Home(){
  return (
    <Card
      txtcolor="white"
      bgcolor="secondary"
      header="Welcome to Bad Bank!"
      title="The best bank for the worst security"
      text="Create a new account today and automatically receive a $2,000 sign on bonus!"
      body={(<img src="bank.png" className="img-fluid" alt="Bad Bank Logo"/>)}
    />
  );  
}
