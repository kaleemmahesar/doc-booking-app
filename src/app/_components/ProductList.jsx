'use client'
import ProductItem from './ProductItem'

function ProductList({productList}) {
    return (
        <div className='mt-16'>
            <h2 className='text-green-600 font-bold text-2xl mb-10'>Our Popular Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    productList?.map((product) => {
                        return <ProductItem key={product.id} product={product} />
                    })
                }
            </div>
        </div>
    )
}

export default ProductList