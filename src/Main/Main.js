import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Main.css";
import Container from "../Component/Container";
import ListItem from "../Component/ListItem";
import axios from "axios";
import cancel from "../img/cancel.png";

const Main = () => {
  const [Number, SetNumber] = useState(0);
  const [Size, SetSize] = useState(0);
  const [data, SetData] = useState([]);
  const [check, SetCheck] = useState(0);

  // const navigate = useNavigate();

  // const handleClick = (Nmber) => {
  //   navigate(`https://www.musinsa.com/app/goods/${Nmber}`);
  // };

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
      console.log(Response.data);
      // console.log(Response.data.imageHTML.slice('"'));
      // console.log((Response.data.imageHTML || "").split('"'));
      return SetData(Response.data);
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
        <button onClick={SendData}>저장</button>
      </div>

      <div className="list">
        {data.map((clothes, i) => {
          return (
            <ListItem key={i}>
              <div
                onClick={() =>
                  window.open(`https://www.musinsa.com/app/goods/${clothes.id}`)
                }>
                <img
                  src={cancel}
                  width="20px"
                  onClick={() => DeleteList(clothes.id, clothes.size)}
                />
                <img
                  src={
                    "https:" +
                    clothes.imageHTML.split('"', 2).toString().substr(10)
                  }
                  width="170px"
                />
                <h4>{clothes.title}</h4>
                <h4>{clothes.size}</h4>
                <h5>{clothes.id}</h5>
              </div>
            </ListItem>
          );
        })}
      </div>
    </Container>
  );
};

export default Main;
