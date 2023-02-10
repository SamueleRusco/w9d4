import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";

import { Container } from "react-bootstrap";
import BookList from "./components/BookList";

import fantasy from "./data/fantasy.json";

function App() {
  return (
    <Container>
      <MyNav />

      <BookList fantasyBooks={fantasy} />
    </Container>
  );
}

export default App;
