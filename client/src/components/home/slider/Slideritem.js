import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./slider.module.css"


function Slideritem({title}) {
  return (
    <>
    <div className="row align-items-center justify-content-lg-between  align-items-center">
        <div className="col-lg-6 order-last">
          <div
            className={styles.slider_image}
            
          >
            <img
              src="https://jthemes.net/themes/html/neoncart/assets/images/slider/medical/img_01.png"
              alt="image_not_found"
            />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="slider_content">
            <h4
              className="text-uppercase"
            >
              <strong>10%</strong> off
            </h4>
            <h3
             
            >
              {title}
            </h3>
            <p
              
            >
              Don’t miss the sale and grab all the available products
            </p>
            <div
              className="abtn_wrap clearfix"
              
            >
              <Link  to="/"
                className="custom_btn"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
          
    </>
  )
}

export default Slideritem