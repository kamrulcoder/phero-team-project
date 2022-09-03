import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import styles from "./productItem.module.css";
function ProductItem() {
  return (
    <>
      <Col  sm={6}  lg={3}>
      <div className={styles.thumb_wrapper}>
        <span className={styles.wish_icon}>
          <i className="fa fa-heart-o"></i>
        </span>
        <div className={styles.img_box}>
          <img
            src="https://www.tutorialrepublic.com/examples/images/products/macbook-pro.jpg"
            className="img-fluid"
            alt="Headphone"
          />
        </div>
        <div className={styles.thumb_content}>
          <h4>Sony Headphone</h4>
          <div className={styles.star_rating}>
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star-o"></i>
              </li>
            </ul>
          </div>
		  <div className={styles.mezure}>
			<span>1 ltr</span>
		  </div>
          <p className="item-price">
            <strike>$25.00</strike> <b>$23.99</b>
          </p>
          <a href="#" className={styles.btn}>
            Add to Cart
          </a>
        </div>
      </div>
      </Col>
    </>
  );
}

export default ProductItem;
