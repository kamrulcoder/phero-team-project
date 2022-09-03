import React from 'react'
import styles from "./catagoryItem.module.css"
function CatagoryItem() {
  return (
    <>
    <div  className={styles.catagoryItem}>
        <div className="img">
            <img src="/img/catagortyItem.png" alt="Image not found " />
        </div>
        <div className="text">
        <h4>BreakFast </h4>
        </div>
        
    </div>
    </>
  )
}

export default CatagoryItem