import React from 'react'

export const GifGridItem = ( {title , url} ) => {

    return (
                <div className= "card  bg-info mb-3 animate__animated animate__zoomIn col-lg-6 col-sm-12 " >

                <img className="card-img-top" src={ url } alt={ title } alt="Card image cap"/>
                <div className="card-body">

                    <p className="card-text"> { title }</p>
                </div>
                </div>
    )
}
