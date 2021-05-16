import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categorie, setCategorie] = useState(['Miles Morales']);
    
    return (
        <>
            <h2>GifExpertApp by JLGM</h2>
            <AddCategory setCategorie = { setCategorie }/>
            <hr/>

            <ol>
                {
                    categorie.map( category => 
                        <GifGrid 
                            key =  { category } 
                            category = { category } 
                        />
                    )
                }
            </ol>
        </>
    )
}

AddCategory.propTypes = {
    setCategorie : PropTypes.func.isRequired
}