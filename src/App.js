import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <BookList />
    </div>
  );
}

export default App;
