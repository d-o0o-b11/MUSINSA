import React, { useState, useEffect } from "react";
import "./Main.css";
import Container from "../Component/Container";
import ListItem from "../Component/ListItem";
import axios from "axios";

const Main = () => {
  const [Number, SetNumber] = useState(0);
  const [Size, SetSize] = useState(0);
  const [data, SetData] = useState([]);
  const [check, SetCheck] = useState(0);

  useEffect(() => {
    GetData();
  }, [check]);

  const SetPartNumber = (e) => {
    SetNumber(e.target.value);
  };

  const SetPartSize = (e) => {
    SetSize(e.target.value);
  };

  const GetData = () => {
    axios({
      method: "get",
      url: "http://musinsa-stock-notification-bot.shop/api/v1/product",
    }).then((Response) => {
      SetData(Response.data);
    });
  };

  const SendData = () => {
    axios({
      method: "post",
      url: "http://musinsa-stock-notification-bot.shop/api/v1/product",
      data: {
        id: Number,
        size: Size,
      },
    }).then((Response) => {
      SetCheck(check + 1);
    });
  };

  const DeleteList = (Number, Size) => {
    console.log("Number: " + Number);
    console.log("Size: " + Size);
    axios({
      method: "delete",
      url: `http://musinsa-stock-notification-bot.shop/api/v1/product/${Number}/${Size}`,
    }).then((Response) => {
      SetCheck(check + 1);
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
        {data.map((clothes, i) => {
          return (
            <ListItem key={i} onClick={DeleteList}>
              <h2>{clothes.id}</h2>
              <h4>{clothes.size}</h4>
              <button onClick={() => DeleteList(clothes.id, clothes.size)}>
                cancel
              </button>
            </ListItem>
          );
        })}
      </div>
    </Container>
  );
};

export default Main;
