import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Form from 'react-bootstrap/Form';
import styles from "./footer.module.css"
import headerStyles from "./../header-hasan/header.module.css"
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import googlePlayLogo from './../../../images/Google_Play-Badge-Logo.wine.svg'
import appStoreLogo from './../../../images/App_Store_(iOS)-Badge-Logo.wine.svg'

function Footer() {
    return (
        <footer>
            <Container>
                <div className="row">
                    <div className="col-lg-4 col-12">
                        <div className={`${headerStyles.textPrimary} ${styles.logo}`}>groFresh</div>
                        <div className={`${styles.footerTitle} text-uppercase mt-4`}>News Letter</div>
                        <p>Subscribe to our newsletter to get updates</p>
                        <div>
                            <Form className={`d-lg-flex ${styles.newsLetter} d-none`}>
                                <Form.Control
                                    type="search"
                                    className="me-2 border-0 bg-transparent"
                                    aria-label="Search"
                                    placeholder='Your Email Address'
                                />
                                <Button type='submit'>
                                    Subscribe
                                </Button>
                            </Form>
                        </div>
                        <p>Follow us on</p>
                        <div className='d-flex gap-3'>
                            <Link to='/' className={`${styles.icon}`}><i className='fab fa-facebook'></i></Link>
                            <Link to='/' className={`${styles.icon}`}><i className='fab fa-linkedin'></i></Link>
                            <Link to='/' className={`${styles.icon}`}><i className='fa fa-pinterest'></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className={`${styles.footerTitle} text-uppercase mt-4 text-center`}>Download Our App</div>
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <img src={googlePlayLogo} width='100%' alt="" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <img src={appStoreLogo} width='100%' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-12"></div>
                            <div className="col-lg-6 col-12"></div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer