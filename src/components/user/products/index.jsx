import React, { useState, useEffect, memo } from 'react';
import { productsApi } from '../../../services/base';
import ProductCard from '../productcard';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, selectProduct } from '../../../redux/productSlice';

function Products() {
    const products = useSelector((state) => state.products.items);
    const dispatch = useDispatch();

    useEffect(() => {
        productsApi.getAllProduct().then(data => dispatch(setProducts(data)));
    }, [dispatch]);

    return (
        <section id='products'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className="section-heading text-center">
                        <p className='subheading'>Xəyalındakı məhsulu buradan tap</p>
                        <h2>Məhsullar</h2>
                    </div>
                </div>
                <div className="row">
                    {products.map(item => (
                        <div 
                            className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12' 
                            onClick={() => dispatch(selectProduct(item.id))} 
                            key={item.id}
                        >
                            <ProductCard {...item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default memo(Products);
