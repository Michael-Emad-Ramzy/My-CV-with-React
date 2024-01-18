import Header from "./components/Header/Header.jsx";
import { Container } from "react-bootstrap";
import SeactionSelector from "./components/SeactionSelector.jsx";

function App() {
  return (
    <>
      <Container className="container">
        <Header />
      </Container>
      <Container className="container1">
        <SeactionSelector></SeactionSelector>
      </Container>
    </>
  );
}

export default App;
