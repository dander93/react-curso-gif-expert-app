import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () => {

const [categories, setCategories] = useState(['Samurai X']);

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategory={setCategories}/>

            <hr />

            {
                categories.map((category) => (
                    <GifGrid 
                        key={category} 
                        category={category} 
                    />
                ))
            }
            
        </>
    );
};


export {
    GifExpertApp as default
};