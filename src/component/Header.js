import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
// import {TransitionGroup, CSSTransition} from 'react-transition-group';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Work from './Work';
import PageProgress from 'react-page-progress';
// import axios from 'axios';
class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            maps : [
                {
                    active : 'home',
                    name : 'Home',
                    to : '/',
                    className : 'nav-link'
                },
                {
                    active : 'about',
                    name : 'About',
                    to : '/about',
                    className : 'nav-link'
                },
                {
                    active : 'works',
                    name : 'Works',
                    to : '/work',
                    className : 'nav-link'
                },
                {
                    active : 'services',
                    name : 'Services',
                    to : '/service',
                    className : 'nav-link'
                },
                {
                    active : 'contact',
                    name : 'Contact',
                    to : '/contact',
                    className : 'nav-link'
                },
            
            ],
            activeLink : null,
            services : [],
            banner : {},
            testimonial : []
        }
    }

    componentDidMount(){
        this.setState({
            activeLink : 'home'
        });
    }

    isClicked(event,active){
        event.preventDefault();
        this.setState({
            activeLink : active
        })
    }
    render(){
        const {maps, activeLink} = this.state;
        return(
            <>
                <header className="main_menu home_menu">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to={'/'}><img src="img/spada/logo.png" alt="logo" style={{width:'50%'}} /></Link>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="ti-menu"></span>
                            </button>

                            <div
                                className="collapse navbar-collapse main-menu-item justify-content-center"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav align-items-center">
                                    {
                                        maps.map((mp) => {
                                            return(<li className="nav-item" onClick={(e) => this.isClicked(e,mp.active)} key={mp.active}>
                                                <Link className={'nav-link ' + (mp.active === activeLink ? 'active' : '')} to={mp.to}>{mp.name}</Link>
                                            </li>)
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="social_icon d-none d-lg-block">
                                <a href="# "><i className="ti-facebook"></i></a>
                                <a href="# "><i className="ti-twitter-alt"></i></a>
                                <a href="# "><i className="ti-dribbble"></i></a>
                                <a href="# "><i className="ti-instagram"></i></a>
                            </div>
                            </nav>
                        </div>
                        </div>
                    </div>
                    </header>
                <PageProgress color={'skyblue'} height={5}/>
                <AnimatedSwitch
                    atEnter={{ opacity: 0 }}
                    atLeave={{ opacity: 0 }}
                    atActive={{ opacity: 1 }}
                >
                    <Route exact path='/'><Home/></Route>
                    <Route path='/about'><About /></Route>
                    <Route path='/service'><Service /></Route>
                    <Route path='/contact'><Contact/></Route>
                    <Route path='/work'><Work /></Route>
                </AnimatedSwitch>
            </>
        );
    }
}

export default Header;