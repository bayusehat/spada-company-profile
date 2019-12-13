import React, {Component} from 'react';
import Carousel, {Modal, ModalGateway} from 'react-images';
import axios from 'axios';
// import Lightbox from 'react-lightbox-component';

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            open : false,
            images : [],
            portfolio : [],
            categories : []
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.filterbyCategory = this.filterbyCategory.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost/product/')
            .then(res => {
                this.setState({
                    portfolio : res.data.result
                })
            })
        
        axios.get('http://localhost/category')
            .then(res => {
                this.setState({ categories : res.data.result })
            })
    }

    showModal(event){
        event.preventDefault();
        axios.get('http://localhost/product/')
            .then(res => {
                this.setState({
                    portfolio : res.data.result
                })
            })
    }

    filterbyCategory(event, id){
        event.preventDefault();
        axios.get('http://localhost/product/category/'+id)
            .then(res => {
                this.setState({
                    portfolio : res.data.result
            });
        });
    }

    openModal(event,param){
        event.preventDefault();
        this.setState({
            open : true,
            images : [{src : param}]
        });

        console.log(param)
    }

    closeModal(){
        this.setState({
            open : false,
            images : null
        });
    }
    render(){
        const {open, images, portfolio, categories} = this.state;
        const portfolios = portfolio.map((prt) =>
                <div className="col-md-4 col-sm-6 col-xs-12 gallery-item-wrapper artwork creative" key={prt.productId}>
                    <div className="gallery-item">
                        <div className="gallery-thumb">
                            <img src={prt.productImage} className="img-responsive" alt="1st gallery Thumb"/>
                            <div className="image-overlay"></div>
                            <a href="# " className="gallery-zoom" onClick={(e)=>{this.openModal(e,prt.productImage)}}><i className="fa fa-eye"></i></a>
                            <a href="# " className="gallery-link"><i className="fa fa-link"></i></a>
                        </div>
                        <div className="gallery-details">
                            <div className="editContent">
                                <h5>{prt.productName}</h5>
                            </div>
                            <div className="editContent">
                                <p>{prt.productDescription}</p>
                            </div>
                        </div>
                    </div>
                </div> 
                );
        const category = categories.map((ctg) => 
            <li key={ctg.categoryId}><a href="# " onClick={(e) => this.filterbyCategory(e, ctg.categoryId)} >{ctg.categoryName}</a></li>
        );
        return(
            <>
                <section id="gallery-1" className="content-block section-wrapper gallery-1">
                    <div className="container">
                    <div className="editContent">
                        <ul className="filter">
                            <li><a href="# " onClick={(e) => this.showModal(e)} >All</a></li>
                            {category}
                        </ul>
                    </div>
                    <div className="row">
                        <div id="isotope-gallery-container">
                            {portfolios}
                            <ModalGateway>
                                {open ?(
                                    <Modal onClose={this.closeModal}>
                                        <Carousel views={images} />
                                    </Modal>
                                )
                                    : null
                                }
                            </ModalGateway>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default Gallery;