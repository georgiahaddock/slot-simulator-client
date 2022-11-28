import './App.css';
import Grid from "./Components/Grid.js"

function App() {


  return (
    <div>
      <header>
      </header>
      <main id="container">
        <Grid columns={5} rows={4}/>
      </main>
    </div>
  );
}

export default App;
