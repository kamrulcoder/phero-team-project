import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Footer from '../../components/home/footer-hasan/Footer'
import Header from '../../components/home/header-hasan/Header'
import styles from "./home.module.css"
function Home() {
    return (
        <>
            <Header></Header>
            <Container>Home</Container>
            <Footer></Footer>
        </>
    )
}

export default Home