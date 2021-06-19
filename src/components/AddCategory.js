import React, { useState } from 'react'

export const AddCategory = ( { setCategorie } ) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) =>{
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if ( inputValue.trim().length > 2) {
            setCategorie( cats => [ inputValue , ...cats] );
            setInputValue('');
        }
            
    }

    return (
            <div className="container mb-3">
                
                <form className="form-group"  onSubmit = {handleSubmit}>
                    <input
                    className="form-control "
                    type='text'
                    value = { inputValue }
                    onChange = { handleInputChange }
                    
                    /> 
                </form>
            </div>

    )
}
