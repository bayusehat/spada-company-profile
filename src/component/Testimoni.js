import React, {Component} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import axios from 'axios';

class Testimoni extends Component{
    constructor(props){
        super(props)
        this.state = {
            testimonis : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost/testimoni')
            .then(res =>{
                this.setState({
                    testimonis : res.data.result
                })
            })
    }

    render(){
        const testimoni = this.state.testimonis.map((test) => 
            <div className="singler_eview_part" key={test.testimoniId}>
                <div className="client_info">
                    <img src="img/client_1.png" alt="" />
                    <h4>{test.testimoniName}</h4>
                    <p>{test.testimoniWork}</p>
                </div>
                <p>
                “{test.testimoniContent}.
                </p>
            </div>
        );
        return(
            <>
            <OwlCarousel
                        className="review_part_text owl-carousel"
                        loop
                        autoplay
                        nav
                        margin={5}
                    >
                    {testimoni}
                </OwlCarousel>
            </>
        )
    }
}

export default Testimoni;