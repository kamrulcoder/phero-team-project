import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import styles from "./header.module.css"
import lock from "./../../../images/lock.svg"
import Button from 'react-bootstrap/esm/Button';
//#EEF4F2
export default function Header() {
    return (
        <>
            <section className={styles.headerTopNav}>
                <Container>
                    <div className='d-flex align-items-center justify-content-end' >
                        <a href="/" className={`d-flex align-items-center gap-1 ${styles.btnLink}`}><img height="20px" src={lock} alt="" /> Login</a>
                    </div>
                </Container>
            </section>
            <section className={styles.navContainer}>
                <Container>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Navbar bg="transparent" expand="lg" className={styles.navbar}>
                            <Navbar.Brand href="#home" className={`${styles.textPrimary} fs-3 fw-bold`}>R</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" className={styles.navLink}>
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
                        <div className='d-flex align-items-center gap-lg-5 gap-3'>
                            <Form className={`d-flex ${styles.searchBox}`}>
                                <Form.Control
                                    type="search"
                                    className="me-2 border-0 bg-transparent"
                                    aria-label="Search"
                                />
                                <Button variant='outline' className='bg-transparent border-0'>
                                    <i class="fas fa-search"></i>
                                </Button>
                            </Form>
                            <i className={`fas fa-shopping-cart ${styles.textPrimary} fs-4`}></i>
                            <a href="" className={styles.textPrimary}><i class="fas fa-bars"></i></a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
