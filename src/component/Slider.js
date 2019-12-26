import React , {Component} from 'react';
import Awsm from 'react-awesome-slider';
import AwsmCss from 'react-awesome-slider/src/core/styles.scss';
import axios from 'axios';

class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            banner : []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8000/api/banner')
            .then(res => {
                this.setState({
                    banner : res.data.result
                })
            })
    }
    render(){
        const {banner} = this.state;
        const listBanner = banner.map((b) => 
            <div data-src={b.bannerImage}>
                <div className="flex-caption">
                    <h3>{b.bannerTitle}</h3> 
                    <p>{b.bannerDescription}</p>     
                </div>
            </div>
        );
        return(
            <>
                <section id="banner">
                    <Awsm cssModule={AwsmCss} bullets={false}>
                        {listBanner}
                    </Awsm>
                </section> 
            </>
        );
    }
}

export default Slider;