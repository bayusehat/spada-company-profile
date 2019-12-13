import React,{Component} from 'react';
import axios from 'axios';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            contact : []
        }
    }

    componentWillMount(){
        document.title = 'SPADA Digital Consulting | Contact Us';
    }

    componentDidMount(){
        axios.get('http://localhost/contact')
            .then(res => {
                this.setState({
                    contact : res.data.result[0]
                })

                console.table(res.data.result[0]);
            })
    }
    render(){
        const {contact} = this.state;
        return (
            <>
                <section className="breadcrumb breadcrumb_bg align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-sm-6">
                                <div className="breadcrumb_tittle">
                                    <p>home . contact us</p>
                                    <h2>contact us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        
                <section className="contact-section section_padding">
                    <div className="container">
                    <div className="d-none d-sm-block mb-5 pb-4">
                        {/* <div id="map" style={{height:'480px'}}></div> */}
                    </div>
                    <div className="row">
                        <div className="col-12">
                        <h2 className="contact-title">Get in Touch</h2>
                        </div>
                        <div className="col-lg-8">
                        <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
                            <div className="row">
                            <div className="col-12">
                                <div className="form-group">
                                
                                    <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder = 'Enter Message'></textarea>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <input className="form-control" name="name" id="name" type="text" placeholder = 'Enter your name'/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <input className="form-control" name="email" id="email" type="email" placeholder = 'Enter email address'/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                <input className="form-control" name="subject" id="subject" type="text" placeholder = 'Enter Subject'/>
                                </div>
                            </div>
                            </div>
                            <div className="form-group mt-3">
                            <button type="submit" className="button button-contactForm btn_1">Send Message</button>
                            </div>
                        </form>
                        </div>
                        <div className="col-lg-4">
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-home"></i></span>
                            <div className="media-body">
                            <h3>{contact.contactName}</h3>
                            <p>{contact.contactAddress}</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
                            <div className="media-body">
                            <h3>{contact.contactPhone}</h3>
                            <p>Mon to Fri 9am to 6pm</p>
                            </div>
                        </div>
                        <div className="media contact-info">
                            <span className="contact-info__icon"><i className="ti-email"></i></span>
                            <div className="media-body">
                            <h3>{contact.contactEmail}</h3>
                            <p>Send us your query anytime!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </>
            );
        }
}

export default Contact;