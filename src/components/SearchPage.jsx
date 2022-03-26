import React, { useEffect, useState } from 'react';
import Result from './Result';
import './SearchPage.css';
import axios from '../axios';

function SearchPage() {

    const [input, setInput] = useState('');

    const [data, setData] = useState(null);

    const dataRes = async (e) => {
        e.preventDefault();

        const req = await axios.get(`/1/search.php?s=${input}`);
        console.log(req.data.meals);
        setData(req.data.meals);
        
        setTimeout(() => {
            setInput("");
        },300)
    }
    return (
        <div className='search__page'>
            <h1> Meal App With React </h1>
            <div className="search__container">
                <form className='search__containerForm' onSubmit={dataRes} >
                    <input
                        type="text"
                        value={input}
                        onChange={e => { setInput(e.target.value) }}
                        className="search__container-item"
                    />
                </form>
            </div>
            <Result data={data} />
        </div>
    )
}

export default SearchPage