function App() {
  const name = 'Justin'
  const x = true

  return (
    <div className="App">
      <h1>Hello From React</h1>
      <h2>Hello {name}</h2>
      <h2>Hello {x ? 'Yes' : "No"}</h2>
    </div>
  );
}

export default App;