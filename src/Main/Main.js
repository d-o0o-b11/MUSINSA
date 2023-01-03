import React, { useState } from "react";
import "./Main.css";
import Container from "../Component/Container";
import ListItem from "../Component/ListItem";
import axios from "axios";

const Main = () => {
  const [Number, SetNumber] = useState(0);
  const [Size, SetSize] = useState(0);

  const SetPartNumber = (e) => {
    SetNumber(e.target.value);
  };

  const SetPartSize = (e) => {
    SetSize(e.target.value);
  };

  const SendData = () => {
    axios({
      method: "post",
      url: "http://52.79.196.124:8080/api/v1/product",
      data: {
        id: Number,
        size: Size,
      },
    }).then((Response) => {
      console.log(Response);
    });
  };

  return (
    <Container>
      <h1>MUSINSA</h1>

      <div className="input_frame">
        <h4>재고 확인</h4>
        <input type="text" placeholder="품번" onChange={SetPartNumber} />
        <input type="text" placeholder="사이즈" onChange={SetPartSize} />
        <button onClick={SendData}>검색</button>
      </div>

      <div className="list">
        <ListItem>ddd</ListItem>
        <ListItem>ddd</ListItem>
        <ListItem>ddd</ListItem>
        <ListItem>ddd</ListItem>
      </div>
    </Container>
  );
};

export default Main;
