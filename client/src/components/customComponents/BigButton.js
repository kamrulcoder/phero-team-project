import React from 'react'
import { Button } from 'react-bootstrap'
import styles from "./customButton.module.css"

function BigButton({title}) {
  return (
    <div  className={styles.customButton}>
    <Button  size="lg">{title}</Button>
    </div>
  )
}

export default BigButton