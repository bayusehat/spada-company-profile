import React, {Component} from 'react';
import axios from 'axios';

class WorkProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories : [],
            products : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/category')
            .then(res => {
                this.setState({
                    categories : res.data.result
                });
            });
        
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                this.setState({
                    products : res.data.result
                });
            });
    }

    render(){
        const {categories, products} = this.state;
        return(
            <>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="filters portfolio-filter project_menu_item text-center">
                            <ul>
                                <li className="active" data-filter="*">All</li>
                                {
                                    categories.map((ct) => 
                                        <li data-filter=".rebuild" key={ct.categoryId}>{ct.categoryName}</li>
                                    )
                                }
                                {/* <li data-filter=".buildings">Web Design</li>
                                <li data-filter=".rebuild">Mobile App</li>
                                <li data-filter=".Digital">Digital marketing</li> */}
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="filters-content">
                            <div className="row justify-content-between portfolio-grid">
                            {
                                products.map((pr) => 
                                <div className="col-lg-6 col-sm-6 all" key={pr.productId}>
                                    <div className="single_our_project">
                                        <div className="single_offer">
                                            <img src={pr.productImage} alt={pr.productName} style={{width:'553px',height:'408px'}}/>
                                        <div className="hover_text">
                                            <p>{ pr.productName }</p>
                                            <a href="# "><h2>{ pr.categoryName }</h2></a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            
                            {/* <div className="col-lg-6 col-sm-6 all rebuild">
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
                            </div> */}
                            </div>
                        </div>
            </>
        );  
    }
}

export default WorkProduct;