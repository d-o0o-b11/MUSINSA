import React from "react";
import "./Main.css";
import Container from "../Component/Container";

const Main = () => {
  return (
    <Container>
      <h1>MUSINSA</h1>

      <div className="input_frame">
        <h4>재고 확인</h4>
        <input type="text" />
        <button>입력</button>
      </div>
    </Container>
  );
};

export default Main;
