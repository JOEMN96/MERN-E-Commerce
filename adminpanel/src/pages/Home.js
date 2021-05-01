import React from "react";
import { Jumbotron } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <Jumbotron>
        <h1>Welcome to Dashboard</h1>
      </Jumbotron>
      <p>
        Hey this is my MERN projects Admin Dashboard made with react-bootstrap !
      </p>
    </div>
  );
}

export default Home;
