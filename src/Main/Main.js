import React, { useState } from "react";
import "./Main.css";
import Container from "../Component/Container";

const Main = () => {
  const [Number, SetNumber] = useState(0);

  const SetPartNumber = (e) => {
    SetNumber(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Container>
      <h1>MUSINSA</h1>

      <div className="input_frame">
        <h4>상품 확인</h4>
        <input type="text" placeholder="품번" onChange={SetPartNumber} />
        <button>검색</button>
      </div>
    </Container>
  );
};

export default Main;
