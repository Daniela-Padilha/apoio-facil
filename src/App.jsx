import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Home />
      </main>
    </div>
  );
}

export default App;
