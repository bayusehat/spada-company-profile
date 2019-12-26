import React, {Component} from 'react';
import WorkProduct from './WorkProduct';

class Work extends Component{
    
    componentWillMount(){
        document.title = 'SPADA Digital Consulting | Work';
    }
    render(){
        return(
            <>
                 <section className="breadcrumb breadcrumb_bg align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                        <div className="col-sm-6">
                            <div className="breadcrumb_tittle">
                            <p>home . Works</p>
                            <h2>works</h2>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                
                    <section className="our_project section_padding single_page_project" id="portfolio">
                        <div className="container">
                            <WorkProduct />
                        </div>
                    </section>
                  
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

export default Work;