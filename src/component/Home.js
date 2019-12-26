import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Testimoni from './Testimoni';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';
import JQuery from 'jquery';
window.JQuery = JQuery;
require('owl.carousel');
// import Slider from './Slider';
// import axios from 'axios';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            services : [],
        }
    }

    componentWillMount(){
        document.title = 'SPADA Digital Consulting | Software Company Jakarta Surabaya';
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/service')
            .then(res => {
                this.setState({
                    services : res.data.result
                })
            })
    }
    render(){
        const {services} = this.state;
        return(
        <>
            <section className="banner_part">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-1">
                    <div className="banner_text">
                    <div className="banner_text_iner">
                        <h5>We are digital agency</h5>
                        <h1>Digital and innovative idea</h1>
                        <a href="# " className="btn_1">Explore Work</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
            
            <section className="client_logo">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-12">
                    <OwlCarousel
                        className="client_logo_slider d-flex justify-content-between"
                        loop
                        autoplay
                        // margin={5}
                        nav={false}
                        dots={false}
                    >
                        <div className="single_client_logo">
                            <img src="img/logo/Logo1.png" alt="" />
                        </div>
                        <div className="single_client_logo">
                            <img src="img/logo/Logo2.png" alt="" />
                        </div>
                        <div className="single_client_logo">
                            <img src="img/logo/Logo3.png" alt="" />
                        </div>
                        <div className="single_client_logo">
                            <img src="img/logo/Logo4.png" alt="" />
                        </div>
                        <div className="single_client_logo">
                            <img src="img/logo/Logo5.png" alt="" />
                        </div>
                        <div className="single_client_logo">
                            <img src="img/logo/Logo6.png" alt="" />
                        </div>
                        <div className="single_client_logo">
                            <img src="img/logo/Logo1.png" alt="" />
                        </div>
                    </OwlCarousel>
                </div>
                </div>
            </div>
            </section>
        
            <section className="about_part section_padding">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                <div className="col-md-6">
                    <div className="about_part_text">
                    <img src="img/spada/spada-icon.png" alt="..."/>
                    <hr/>
                    <h5>About Us</h5>
                    <h2>Digital design and development company</h2>
                    <p>
                        There winged grass midst moving earth seed herb fifth you're
                        multiply, you divide cattle stars first cattle was had spirit
                        you're thing, night darkness. Which itself stars creature.
                    </p>
                    <Link to={'/about'} className={'btn_1'}>explore us</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="about_part_img">
                    <img src="img/about_part_img.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="our_service">
            <div className="container">
                <div className="row">
                {
                    services.map((srv) => 
                    <div className="col-sm-6 col-xl-4" key={srv.serviceId}>
                        <div className="single_feature">
                            <div className="single_service">
                                <span>{srv.serviceId}</span>
                                    <h4>
                                    {srv.serviceName}
                                    </h4>
                                <p>
                                    {srv.serviceDescription}
                                </p>
                                {/* <ul>
                                    <li><a href="# ">Branding and Identity.</a></li>
                                    <li><a href="# ">Mobile app</a></li>
                                    <li><a href="# ">Web design</a></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    )
                }
                </div>
            </div>
        </section>

        <section className="our_project section_padding" id="portfolio">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                <div className="col-lg-4">
                    <div className="section_tittle">
                    <p>our project</p>
                    <h2>Our Projects</h2>
                    </div>
                </div>
                <div className="col-lg-5 col-md-6">
                    <div className="filters portfolio-filter project_menu_item">
                    <ul>
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".buildings">Web Design</li>
                        <li data-filter=".rebuild">Mobile App</li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="more_btn d-none d-md-block">
                    <a href="# " className="more_btn_iner">more projects</a>
                    </div>
                </div>
                </div>
                <div className="filters-content">
                <div className="row justify-content-between portfolio-grid">
                    <div className="col-lg-6 col-sm-6 all buildings">
                    <div className="single_our_project">
                        <div className="single_offer">
                        <img src="img/project_1.png" alt="offer_img_1" />
                        <div className="hover_text">
                            <p>Web development</p>
                            <a href="# "><h2>Web design & development</h2></a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-6 col-sm-6 all rebuild">
                    <div className="single_our_project">
                        <div className="single_offer">
                        <img src="img/project_2.png" alt="offer_img_1" />
                        <div className="hover_text">
                            <p>Web design</p>
                            <a href="# "><h2>Web design & development</h2></a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <img src="img/animate_icon/icon_2.png" className="animation_icon_2" alt=""/>
            </section>
        
            <section className="creative padding_bottom">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-start">
                <div className="col-md-6 col-xl-6">
                    <div className="creative_img">
                    <img src="img/creative_img.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-xl-4">
                    <div className="creative_part_text">
                    <h2>We work hard and think creatively</h2>
                    <p>
                        There winged grass midst moving earth seed herb fifth you
                        multiply you divide cattle stars first cattle.
                    </p>
                    <span
                        >“There winged grass midst moving earth seed herb fifth you
                        multiply you divide cattle stars first cattle.</span
                    >
                    <a
                        href="https://www.youtube.com/watch?v=tDiJnd7SM2Y"
                        className="popup-youtube"
                        ><i className="ti-control-play"></i> See how we work</a
                    >
                    </div>
                </div>
                </div>
            </div>
            </section>
        
            <div className="review_part padding_bottom" id="testimonial">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-lg-7">
                    <div className="section_tittle text-center">
                    <p>Testimonials</p>
                    <h2>What our Client say</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    {/* <div className="review_part_text owl-carousel"> */}
                    <Testimoni />
                </div>
                </div>
            </div>
            <img src="img/animate_icon/icon_3.png" className="animation_icon_3" alt="" />
            </div>
        
            <div className="cta_part">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="cta_iner">
                    <h1>Let’s create something awesome together</h1>
                    <a href="# " className="btn_1">Discuss project</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
    	</>
        );
    }
}

export default Home;