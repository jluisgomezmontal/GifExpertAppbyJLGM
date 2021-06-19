import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import PropTypes from 'prop-types';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categorie, setCategorie] = useState(['Miles Morales']);
    
    return (
        <div className="container" >
            <h1 className="py-3 text-center">Buscador de Gifs by JLGM</h1>
            <AddCategory setCategorie = { setCategorie }/>
            <hr/>
            {
                categorie.map( category => 
                    <GifGrid 
                        key =  { category } 
                        category = { category } 
                    />
                )
            }
        </div>
    )
}

AddCategory.propTypes = {
    setCategorie : PropTypes.func.isRequired
}