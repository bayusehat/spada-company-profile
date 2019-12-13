import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class About extends Component{
    componentWillMount(){
      document.title = 'SPADA Digital Consulting | About Us';
    }
    render(){
        return(
            <>
           <section className="breadcrumb breadcrumb_bg align-items-center">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-sm-6">
                    <div className="breadcrumb_tittle">
                        <p>home . about us</p>
                        <h2>about us</h2>
                    </div>
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
              <a href="# " className="btn_1">explore us</a>
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

export default About;