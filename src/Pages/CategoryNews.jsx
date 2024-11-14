import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryNews = () => {
    const {data} = useLoaderData()

    


    return (
        <div className='ml-4'>
            <h2 className='font-semibold text-xl mb-2'>Dragon News Home</h2>
           <p className='text-sm text-gray-400'>{data.length} data found this category</p>
        </div>
    );
};

export default CategoryNews;