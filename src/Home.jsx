import React from "react";
import Button from "@material-ui/core/Button";
import './App.css';
import Header from "./Header";

function Home() {
  return (
    <div className="home">
      <Header />
      <Button variant="contained" color="secondary">
        Create Survey
      </Button>
      <Button variant="contained" color="secondary">
        Take Survey
      </Button>
    </div>
  );
}

export default Home;
