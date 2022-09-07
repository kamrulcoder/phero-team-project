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
                        <div className={`${styles.footerTitle} text-uppercase`}>News Letter</div>
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
                        <div className='d-flex gap-3 justify-content-center justify-content-lg-start'>
                            <Link to='/' className={`${styles.icon}`}><i className='fab fa-facebook'></i></Link>
                            <Link to='/' className={`${styles.icon}`}><i className='fab fa-linkedin'></i></Link>
                            <Link to='/' className={`${styles.icon}`}><i className='fa fa-pinterest'></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className={`${styles.footerTitle} text-uppercase mt-4 text-lg-center`}>Download Our App</div>
                        <div className='d-flex mt-3 flex-column flex-sm-row gap-2 gap-sm-0 text-left' >
                            <img src={googlePlayLogo} width='100%' height='50px' alt="" />
                            <img src={appStoreLogo} width='100%' height='50px' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className={`${styles.footerTitle} mt-4`}>My account</div>
                                <div className='d-flex flex-column gap-2 mt-3'>
                                    <a className={styles.footerLink} href="/">Profile</a>
                                    <a className={styles.footerLink} href="/">Adress</a>
                                    <a className={styles.footerLink} href="/">Live Chat</a>
                                    <a className={styles.footerLink} href="/">My Order</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className={`${styles.footerTitle} mt-4`}>Quick Links</div>
                                <div className='d-flex flex-column gap-2 mt-3'>
                                    <a className={styles.footerLink} href="/">Profile</a>
                                    <a className={styles.footerLink} href="/">Adress</a>
                                    <a className={styles.footerLink} href="/">Live Chat</a>
                                    <a className={styles.footerLink} href="/">My Order</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <hr />
            <Container>
                <p className={styles.credit}>Copyright © 2022, groFresh</p>
            </Container>
        </footer>
    )
}

export default Footer