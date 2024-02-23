import '../assets/styles/ProductPage.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
function ProductPage() {
  return (
    <div className='prod_container'>
    <Header/>
    <div className='spacer'></div>
    <div className='content-container'>
        <div className='left-image-container'>
        <div className='spacer'/>
            <div className='image-sub-container'>
            <img src='https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440' alt='shoe-1'/>
            <img src='https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440' alt='shoe-2'/>
            <img src='https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440' alt='shoe-3'/>
            <img src='https://nb.scene7.com/is/image/NB/m990gl6_nb_02_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440' alt='shoe-4'/>
            </div>
        </div>
        <div className='right-option-container'>
        <div className='spacer'/>
            <div className='option-sub-container'>
                <p className='prod-category'>Category</p>
                <h1 className='prod-name'>Product Name</h1>
                <p className='prod-price'>Price</p>
                <p className='prod-rating'>Rating</p>
                <div className='size-grid'>
                    <div>uk7</div>
                    <div>uk8</div>
                    <div>uk9</div>
                    <div>uk10</div>
                    <div>uk11</div>
                </div>
                <button className='addToCart' type='button'>Add To Cart</button>
                <div className='descriptionDiv'>
                    <p>Description</p>
                </div>
            </div>
        </div>
    </div>
    <div className='spacer'/>
    <Footer/>
    </div>
  )
}

export default ProductPage