import Header from "./components/Header";

function App() {
  const name = 'Justin'
  const x = true

  return (
    <div className="container">
      <Header />
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 'Yes' : "No"}</h2>
    </div>
  );
}

export default App;