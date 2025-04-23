import styles from './listing.module.css'
import {StyledDiv,ListLi,StyledTitle,DetailsTag,DetailsSpan,AddToCartButton,SeeMoreButton} from '../styled/styled-components'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const Listing = ({data,page}) => {
    return(
        <ul className={page === 'details' ? styles['product'] : styles['products-list']}>
            {data.map((element,index) => {
                const {id,category,brand,stock,title,images,price,rating,minimumOrderQuantity,description,returnPolicy,dimensions} = element;
                console.log(id)
                return(
                    <ListLi key={id} className={`${styles['prod']} `}>
                        <img src={images[0]} height = {page === 'details' ? 220 : 140} style={{margin:'10px 0'}}/>
                        <div className={styles['info-div']}>
                        <StyledTitle>{title}</StyledTitle>
                        <DetailsTag>{description}</DetailsTag>
                        <DetailsTag>Brand : <DetailsSpan>{brand}</DetailsSpan></DetailsTag>
                        <DetailsTag>Category : <DetailsSpan>{category}</DetailsSpan></DetailsTag>
                        <DetailsTag>Price : <DetailsSpan>${price}</DetailsSpan></DetailsTag>
                        {page === 'details' ? <>
                            <DetailsTag>Stock : <DetailsSpan>{stock}</DetailsSpan></DetailsTag>
                            <DetailsTag>Min. Order Qty : <DetailsSpan>{minimumOrderQuantity}</DetailsSpan></DetailsTag>
                            <DetailsTag>Rating : <DetailsSpan>{rating}</DetailsSpan></DetailsTag>
                            <DetailsTag>Return : <DetailsSpan>{returnPolicy}</DetailsSpan></DetailsTag>
                        </> : ''}
                        <div className={styles['list-btn']}>
                            <AddToCartButton>Add To Cart</AddToCartButton>
                            {page==='details' ? <SeeMoreButton><Link href="/">Go To Home</Link></SeeMoreButton> : 
                                <SeeMoreButton><Link href={`/details/${id}`}>See More Details</Link></SeeMoreButton>
                            }
                        </div>
                        </div>
                    </ListLi>
                )
            })}
        </ul>
    )
}

export default Listing