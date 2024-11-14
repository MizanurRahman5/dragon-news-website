import React, { useEffect, useState } from 'react';

const LeftNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() =>{
        const loadCategorie = async () =>{
            const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
            const data = await res.json()
            setCategories(data.data.news_category
            )
        }
        loadCategorie()
    } ,[])
    return (
        <div>
            <div className='font-bold text-xl mb-3'>All Caterogy({categories.length})</div>
            <div className='flex flex-col gap-2'>
            {
                categories.map((category) => <button className='btn' key={category.category_id}>{category.category_name}</button>)
            }
            </div>

        </div>
    );
};

export default LeftNavbar;