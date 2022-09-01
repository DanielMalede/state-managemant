import "./Home.css";
import React from "react";
import Counter from "../Counter/Counter";
import CounterProvider from "../../../context/Counter-Context/Counter-Context";

function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </div>
  );
}

export default Home;
