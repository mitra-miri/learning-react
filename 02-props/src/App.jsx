import Student from "./Student";

function App() {
  return (
    <>
      <Student name="Spongebob" age={30} isStudent={true}/>
      <Student name='patrick' age={45} isStudent={false}/>
      <Student />
      
    </>
  );
}

export default App
