import React, {Component} from 'react';

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
                        <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="filters portfolio-filter project_menu_item text-center">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                <li data-filter=".buildings">Web Design</li>
                                <li data-filter=".rebuild">Mobile App</li>
                                <li data-filter=".Digital">Digital marketing</li>
                            </ul>
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
                            <div className="col-lg-6 col-sm-6 all Digital">
                            <div className="single_our_project">
                                <div className="single_offer">
                                <img src="img/project_3.png" alt="offer_img_1" />
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
                                <img src="img/project_4.png" alt="offer_img_1" />
                                <div className="hover_text">
                                    <p>Web design</p>
                                    <a href="# "><h2>Web design & development</h2></a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 all buildings">
                            <div className="single_our_project">
                                <div className="single_offer">
                                <img src="img/project_5.png" alt="offer_img_1" />
                                <div className="hover_text">
                                    <p>Web development</p>
                                    <a href="# "><h2>Web design & development</h2></a>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6 all Digital">
                            <div className="single_our_project">
                                <div className="single_offer">
                                <img src="img/project_6.png" alt="offer_img_1" />
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