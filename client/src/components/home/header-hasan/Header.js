import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import styles from "./header.module.css"
import lock from "./../../../images/lock.svg"
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
//#EEF4F2
export default function Header() {
    return (
        <>
            <div className={styles.fixedHeader}>
                <section className={`${styles.headerTopNav} d-none d-lg-flex`}>
                    <Container>
                        <div className='d-flex align-items-center justify-content-end' >
                            <Link to="/login" className={`d-flex align-items-center gap-1 ${styles.btnLink}`}><img height="20px" src={lock} alt="Image not found " /> Login</Link>
                        </div>
                    </Container>
                </section>
                <section className={styles.navContainer}>
                    <Container>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Navbar bg="transparent" expand="lg" className={styles.navbar}>

                                <Navbar.Toggle aria-controls="basic-navbar-nav" className={`border-0 ${styles.menuHamBurger}`}>
                                    <i className={`fas fa-th-large fs-4 ${styles.textPrimary}`}></i>
                                </Navbar.Toggle>
                                <Navbar.Brand href="#home" className={`${styles.textPrimary} fs-3 fw-bold`}>R</Navbar.Brand>
                                <Navbar.Collapse id="basic-navbar-nav" className={`${styles.navLink}`}>
                                    <Nav className="me-auto ">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">
                                                Separated link
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#home">Favourite</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <div className='d-flex align-items-center gap-lg-5 gap-2'>
                                <Form className={`d-lg-flex ${styles.searchBox} d-none`}>
                                    <Form.Control
                                        type="search"
                                        className="me-2 border-0 bg-transparent"
                                        aria-label="Search"
                                    />
                                    <Button variant='outline' className='bg-transparent border-0'>
                                        <i class="fas fa-search"></i>
                                    </Button>
                                </Form>
                                <Link to="/cart" >
                                <i className={`fas fa-shopping-cart ${styles.textPrimary} fs-4`}></i>
                                </Link>
                                <Link to="/menu" className={`${styles.textPrimary} d-none d-lg-block`}><i class="fas fa-bars"></i></Link>
                                <Button variant='outline' className='bg-transparent border-0 d-flex d-lg-none'>
                                    <i class="fas fa-search"></i>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>
            </div>
            <div className={`${styles.navPlaceholder}`}></div>
            <div className={`${styles.headerPlaceholder} d-none d-lg-block`}></div>
        </>
    )
}
