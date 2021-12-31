import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header
        title="Trending"
        subTitle="See what the GitHub community is most excited about today."
      />
    </div>
  );
}

export default App;
