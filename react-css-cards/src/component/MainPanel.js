import React,{ Component, Fragment } from 'react'
import FeaturesCard from '../component/features/featurescards'
import ProductCards from '../component/products/productscards'
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar'
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import FeaturesData from './featuresdata.json'
import ProductDetails from './details/productdetails'

class MainPanel extends Component {

    state = FeaturesData;

    render(){
        return ( 
            <Box component="span" m={10}>
                <SearchBar />
                <Divider variant="middle" />
                <Typography gutterBottom variant="h7">Features</Typography>
                <section class="card-list">
                    {this.state.features.map((data,index) =>{
                        return (
                            <Fragment>
                                <FeaturesCard  {...data}/>
                            </Fragment>
                        )
                    })}
                </section>
                <Divider variant="middle" />
                <Typography gutterBottom variant="h7">Products</Typography>
                <section class="card-list">
                    {this.state.products.map((data,index) =>{
                        return (
                            <Fragment>
                                <ProductCards  {...data}/>
                            </Fragment>
                        )
                    })}
                </section>
                <Divider variant="middle" />
                <Typography gutterBottom variant="h7">Details</Typography>
                <Box component="span" m={10}>
                    <ProductDetails />
                </Box>    
            </Box>
        )
    }


}



export default MainPanel;