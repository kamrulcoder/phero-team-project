import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "./headerSection.module.css"

function HeaderSecion({title}) {
  return (
    <>
    <Container>
    <div  className={styles.header}> 
    
<h2>{title} </h2>
<button> View All </button>
   
        
    </div>
    </Container>
    </>
  )
}

export default HeaderSecion