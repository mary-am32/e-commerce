import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrump from '../components/Breadcrums/Breadcrump';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescrptuonBox from '../components/DescriptionBox/DescrptuonBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId}= useParams();
    const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrump product={product}/>
      <ProductDisplay product={product}/>
      <DescrptuonBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product

