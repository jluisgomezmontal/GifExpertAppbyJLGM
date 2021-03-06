import React, { useEffect, useState } from 'react'
// import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category }) => {

    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__flipInX">{ category }</h3>    
            <div className="card-grid">
            {
                images.map( img => (
                    <div className="text-center">
                        <GifGridItem 
                        key = { img.id }
                        { ...img }
                        />
                    </div>
                ))
            }
            </div>
        </>
    )
}
