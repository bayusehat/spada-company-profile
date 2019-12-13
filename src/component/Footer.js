import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Footer extends Component{
    constructor(props){
        super(props);
        this.state = {
            contact : {}
        }
    }

    componentDidMount(){
        axios.get('http://localhost/contact')
            .then(res => {
                this.setState({contact : res.data.result[0]});
        })
    }
    render(){
        const {contact} = this.state;
        return(
            <>
            <footer className="footer-area">
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-3 col-xl-3">
                        <div className="single-footer-widget footer_1">
                        <Link to={'/'}>
                            <img src="img/spada/logo-navy.png" alt="" style={{width:'100px',height:'auto'}}/>
                        </Link>
                        <ul>
                            <li><a href="# ">Work</a></li>
                            <li><Link to={'/service'}>Services</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                        </ul>
                        <div className="social_icon">
                            <a href="# "><i className="ti-facebook"></i></a>
                            <a href="# "><i className="ti-twitter-alt"></i></a>
                            <a href="# "><i className="ti-dribbble"></i></a>
                            <a href="# "><i className="ti-instagram"></i></a>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-3">
                        <div className="single-footer-widget footer_2">
                        <h4>Company</h4>
                        <ul>
                            <li>
                            <a href="# ">Media</a>
                            </li>
                            <li>
                            <a href="# ">Carrier</a>
                            </li>
                            <li>
                            <a href="# ">Testimonials</a>
                            </li>
                            <li>
                            <a href="# ">FAQ</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-3">
                        <div className="single-footer-widget footer_2">
                        <h4>Resources</h4>
                        <ul>
                            <li>
                            <a href="# ">UI kit</a>
                            </li>
                            <li>
                            <a href="# ">WordPress theme</a>
                            </li>
                            <li>
                            <a href="# ">Illustration</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-md-3">
                        <div className="single-footer-widget footer_2">
                        <div className="single_contact_info">
                            <h3>{contact.contactName}</h3>
                            <p>{contact.contactAddress}</p>
                            <p>{contact.contactPhone}</p>
                        </div>
                        {/* <div className="single_contact_info">
                            <h3>New York - USA</h3>
                            <p>127, Manchaster city, London</p>
                            <p>+008 728 362 278</p>
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright_part_text text-center">
                        <div className="row">
                            <div className="col-lg-12">
                            <p className="footer-text m-0">
                              Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="ti-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" rel="noopener noreferrer" target="_blank">Colorlib</a>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <img src="img/animate_icon/icon_2.png" className="animation_icon_2" alt="" />

                </footer> 
            </>
        );
    }
}

export default Footer;