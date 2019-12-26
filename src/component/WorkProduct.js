import React, {Component} from 'react';
import axios from 'axios';
import Animate from 'react-smooth';

class WorkProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            categories : [],
            products : [],
            setActive : '',
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

    getAllProduct(){
        axios.get('http://localhost:8000/api/product')
        .then(res => {
            this.setState({
                products : res.data.result
            });
        });
    }

    filterbyCategory(event, id){

        event.preventDefault();
        axios.get('http://localhost:8000/api/product/category/'+id)
            .then(res => {
                this.setState({
                    products : res.data.result,
                    setActive : id
            });
        });
    }

    render(){
        const {categories, products, setActive} = this.state;
        return(
            <>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="filters portfolio-filter project_menu_item text-center">
                            <ul>
                                <li onClick={()=> this.getAllProduct()}>All</li>
                                {
                                    categories.map((ct) => 
                                        <li id={ct.categoryId} className={(setActive === ct.categoryId ? 'active' : '')} onClick={(e) => this.filterbyCategory(e, ct.categoryId)} key={ct.categoryId}>{ct.categoryName}</li>
                                    )
                                }
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
                    </div>
                </div>
            </>
        );  
    }
}

export default WorkProduct;