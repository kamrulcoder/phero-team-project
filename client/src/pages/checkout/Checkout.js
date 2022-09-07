import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import styles from "./checkout.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import map from '../../../src/images/map.jfif';


function Checkout() {

  const mapImgStyle = {
    width:'90%',
    height:'20vh',
    margin:'25px',
    borderRadius:'5px'
  }
 

  return (
    <Container style={{marginTop:'4%'}}>
      
      <Row className="justify-content-md-center">
       <Col md={6} xs={12} 
       >
       
        <Card >
        <Card.Body>
        <Card.Title className='mt-3'>Select Branch</Card.Title>
        <Card.Subtitle className="my-1 text-muted">
        <Button href="#" style={{backgroundColor:'#28a745'}} className={styles.button}>Main</Button>{' '}
        <Button href="#" variant="light" className={styles.button}>Second Branch</Button>{' '}
        <Button href="#" variant="light" className={styles.button}>Third Branch</Button>{' '}
        <Button href="#" variant="light" className={styles.button}>Dhaka</Button>{' '}
        <Button href="#" variant="light" className={styles.button}>Farmgate</Button>{' '}
        </Card.Subtitle>
        
        <img style={mapImgStyle} src={map}></img>
      
        <Card.Text className='my-0'>
          Delivery Address
        </Card.Text>
        <Card.Text style={{color:'gray', textAlign:'center'}}>
          No Address Found
        </Card.Text>
        <Card.Text>
          Preference Time
        </Card.Text>
        <Button href="#" style={{backgroundColor:'#28a745'}} className={styles.button}  >Today</Button>{' '}
       
        <Button href="#" variant="light" className={styles.button}>Tomorrow</Button>{' '}
        <Button href="#" variant="light" className={styles.button}>3 September 2022</Button>{' '}
        <br></br>
        <Button href="#" style={{backgroundColor:'#28a745'}} className={styles.button}>17.30</Button>{' '}
        <Button href="#" variant="light" className={styles.button}>18.30</Button>{' '}
        
        
      </Card.Body>
    </Card>

    </Col>



        <Col md={4} xs={12}>
        <Card >
        <Card.Body>
          <Card.Title className='mt-3 text-muted '  style={{ textAlign:'center'}} >Payment Method</Card.Title>
          <Card.Subtitle className="my-5 "  >
          
            <input type='checkbox' id="cashOnDelivery" name="cashOnDelivery" value='cashOnDelivery' style={{marginRight:'2%',marginBottom:'4%',}}></input>
            <label for='cashOnDelivery'> Cash on Delivery</label><br/>

            <input type='checkbox' id="cashOnDelivery" name="cashOnDelivery" value='cashOnDelivery' style={{marginRight:'2%'}}></input>
            <label for='cashOnDelivery'> Digital Payment</label><br/>
          
          </Card.Subtitle>
          <Card.Text>
           
            <form class="form-inline" action="" style={{marginLeft:'2%',marginRight:'2%'}}>
            <input type="text" id="AdditionalNote" placeholder="Additional note" name="AdditionalNote" style={{width:'24vw',height:'18vh'}}></input>
            </form>

          </Card.Text>
         <Container >
            <Row style={{marginBottom:'2%'}}> 
              <Col>SubTotal</Col>
              <Col style={{textAlign:'end'}}>48.45$</Col>
            </Row>

            <Row>
            <Col>Delivery Fee</Col>
            <Col style={{textAlign:'end'}}>Not Found</Col>
          </Row>

         <hr></hr>

         <Row style={{marginBottom:'2%', color:'#28a745', fontSize:'15px', fontWeight:'bold'}}> 
              <Col>Total Amount</Col>
              <Col style={{textAlign:'end'}}>48.45$</Col>
            </Row>
         </Container>
        </Card.Body>

       
      </Card>

      <Button style={{width:'100%', marginTop:'5%', backgroundColor:'#28a745'}}>Place Order</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout;