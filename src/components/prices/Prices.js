import React, { useState } from 'react';
import Search from '../search/Search';
import PriceList from './PriceList';

const CoinTR = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="prices flex-column">
            <Search setSearch={setSearch} search={search} />
            <PriceList search={search}/>
        </div>
    );
};

export default CoinTR;