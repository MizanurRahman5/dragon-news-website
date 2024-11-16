import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../component/NewsCard';

const CategoryNews = () => {
    const {data} = useLoaderData()

    


    return (
        <div className='mx-4'>
            <h2 className='font-semibold text-xl mb-2'>Dragon News Home</h2>
           <p className='text-sm text-gray-400'>{data.length} data found this category</p>

        <div>
            {
                data.map(news =><NewsCard key={news._id} news={news}></NewsCard> )
            }
        </div>

        </div>
    );
};

export default CategoryNews;