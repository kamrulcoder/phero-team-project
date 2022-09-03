import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import HeaderSecion from "../../components/customComponents/headerSection/HeaderSecion";
import HomeCatagory from "../../components/home/catagoryItem/HomeCatagory";
import Header from "../../components/home/header-hasan/Header";
import ProductItem from "../../components/home/productItem/ProductItem";
import Slider from "../../components/home/slider/Slider";
import BigButton from "../../components/customComponents/BigButton"
import styles from "./home.module.css";
function Home() {
  return (
    <>
      <Header></Header>
      <Slider></Slider>

      <HeaderSecion title="Catagories   " />
      <HomeCatagory></HomeCatagory>

      <HeaderSecion title="Daily Needs  " />
      <Container>
        <Row>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </Row>
      </Container>

      <HeaderSecion title="Daily Needs  " />
      <Container>
        <Row>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <BigButton   title="See More "/>
            
        </Row>
      </Container>
    </>
  );
}

export default Home;
