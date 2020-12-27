import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Products extends Component {
    constructor(){
super()

        this.state={

            products: []
        }

    }
componentDidMount(){
    axios.get('https://practiceapi.devmountain.com/products')
    .then(res=> {
        this.setState({products:res.data})
    })

}

render() {
    let products = this.state.products.map((el,index) =>{
        if (el.image){
            return (
                <Link key={index} to={`/details/${el.id}`}>
                    <img width='200' src={el.image}/>
                </Link>
            )
        }
    })

return(
    <div>
        <h1>Products</h1>
        {products}
    </div>
    )
}
}
export default Products