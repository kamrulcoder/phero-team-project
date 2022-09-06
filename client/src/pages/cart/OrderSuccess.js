import React from "react";
import styles from "./cart.module.css";

const OrderSuccess = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.text}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          fill="#03694C"
          class="bi bi-file-check"
          viewBox="0 0 20 20"
        >
          <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
        </svg>
        <div>
          <p className={styles.empty}>Order placed successfully</p>
          <p className={styles.emptys}>Order ID# 111223</p>
          <button className={styles.btn}>Track Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
