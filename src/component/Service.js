import React, {Component} from 'react';
import axios from 'axios';
import Testimoni from './Testimoni';
// import OwlCarousel from 'react-owl-carousel';
// import {Link} from 'react-router-dom';

class Service extends Component{
    constructor(props){
        super(props);
        this.state = {
            services : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost/service/home/3')
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
            <section className="breadcrumb breadcrumb_bg align-items-center">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-sm-6">
                            <div className="breadcrumb_tittle">
                                <p>home . services</p>
                                <h2>services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="our_service section_padding">
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
                    <Testimoni />
                    {/* <OwlCarousel
                        className="review_part_text"
                        loop
                        autoplay
                        margin={5}
                    >
                    <div className="singler_eview_part">
                        <div className="client_info">
                        <img src="img/client_1.png" alt="" />
                        <h4>Justine Miller</h4>
                        <p>Web developer at Envato</p>
                        </div>
                        <p>
                        “There winged grass midst moving earth seed herb fifth you
                        multiply you divide cattle stars first cattle was had spirit
                        you're thing, night darkness. Which itself stars creature.
                        </p>
                    </div>
                    <div className="singler_eview_part">
                        <div className="client_info">
                        <img src="img/client_2.png" alt="" />
                        <h4>Danny Jonson</h4>
                        <p>Creative director at Apple</p>
                        </div>
                        <p>
                        “There winged grass midst moving earth seed herb fifth you
                        multiply you divide cattle stars first cattle was had spirit
                        you're thing, night darkness. Which itself stars creature.
                        </p>
                    </div>
                    <div className="singler_eview_part">
                        <div className="client_info">
                        <img src="img/client_1.png" alt="" />
                        <h4>Justine Miller</h4>
                        <p>Web developer at Envato</p>
                        </div>
                        <p>
                        “There winged grass midst moving earth seed herb fifth you
                        multiply you divide cattle stars first cattle was had spirit
                        you're thing, night darkness. Which itself stars creature.
                        </p>
                    </div>
                    <div className="singler_eview_part">
                        <div className="client_info">
                        <img src="img/client_2.png" alt="" />
                        <h4>Danny Jonson</h4>
                        <p>Creative director at Apple</p>
                        </div>
                        <p>
                        “There winged grass midst moving earth seed herb fifth you
                        multiply you divide cattle stars first cattle was had spirit
                        you're thing, night darkness. Which itself stars creature.
                        </p>
                    </div>
                    </OwlCarousel> */}
                </div>
                </div>
            </div>
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

export default Service;