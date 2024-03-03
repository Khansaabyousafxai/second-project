import React from 'react'
import ProductCard from './ProductCard'
import { LuCake } from "react-icons/lu";

export default function ProductSection(props) {
  return (
    <>

    <div className="container my-5">
        <h2 className='text-center my-5'>Our {props.sectionTitle} <LuCake size={60} color="blue"/></h2>
        <div className="row gap-5">
            <ProductCard brandName="Bonanza" collectionName="summer" catogeryName="Female"/>
            <ProductCard brandName="Sana Safinaz" collectionName="winter" catogeryName="male"/>
            <ProductCard brandName="MTJ" collectionName="summer" catogeryName="Female"/>
            <ProductCard brandName="J." collectionName="winter" catogeryName="male"/>
            
            
        </div>
    </div>
    </>
  )
}
