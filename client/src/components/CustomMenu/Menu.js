import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../home/header-hasan/Header';
import styles from './menu.module.css'
import orders from './../../images/orders.svg'
import discount from './../../images/percentage-svgrepo-com.svg'
import notification from './../../images/bell-svgrepo-com.svg'
import chat from './../../images/chat-svgrepo-com.svg'
import map from './../../images/map.svg'
import login from './../../images/login-svgrepo-com.svg'
import profile from './../../images/profile.svg'
import world from './../../images/world-grid-svgrepo-com.svg'
import bag from './../../images/shopping-bag-svgrepo-com.svg'
import policy from './../../images/policy.svg'
import terms from './../../images/terms.svg'
import users from './../../images/users-svgrepo-com.svg'
import { Link } from 'react-router-dom';
import Footer from '../home/footer-hasan/Footer';
const CustomMenu = () => {
    const menuItem = [
        { name: 'My Order', icon: orders },
        { name: 'Profile', icon: profile },
        { name: 'Address', icon: map },
        { name: 'Live Chat', icon: chat },
        { name: 'Coupon', icon: discount },
        { name: 'Notification', icon: notification },
        { name: 'Contact Us', icon: world },
        { name: 'Shopping Bag', icon: bag },
        { name: 'Privacy Policy', icon: policy },
        { name: 'Terms & Conditions', icon: terms },
        { name: 'About Us', icon: users },
        { name: 'Login', icon: login },
    ]
    return (
        <>
            <Header />
            <section>
                <Container className={styles.customMenu}>
                    <div className='menuHeader'>
                        <div>
                            <div className={styles.imgBox}>
                                <img src="https://thumbs.dreamstime.com/z/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" alt="" />
                            </div>
                        </div>
                        <div className={`${styles.menuContent} d-none d-lg-block`}>
                            <p>Guest</p>
                            <p>madebyhasan@test.com</p>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='py-5 mt-5'>
                <Container>
                    <div className='row g-4'>
                        {menuItem.map(item => <div className={`${styles.menuItem} col-lg-2 col-md-4 col-12`}>
                            <Link to='/'><img src={item.icon} alt="" className='mx-auto' />
                                <p>{item.name}</p></Link>
                        </div>)}
                    </div>
                </Container>
            </section>
            <Footer></Footer>
        </>
    );
};

export default CustomMenu;