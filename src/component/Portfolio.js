import React, {Component} from 'react';
import Gallery from './Gallery';

class Portfolio extends Component{
    render(){
        return(
            <> 
            <section id="inner-headline">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="pageTitle">Portfolio</h2>
                        </div>
                    </div>
                </div>
            </section>
        <section id="content">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="about-logo">
                            <h3>Voluptatem Accusantium Doloremque</h3>
                            <p>Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
                            <p>Sed ut perspiciaatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas</p>
                        </div>  
                    </div>
                </div>                
            </div>
        </section>
        <Gallery />	
            </>
        );
    }
}

export default Portfolio;