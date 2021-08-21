import React, { useState } from 'react';
import Search from './Search';
import ListDisplay from './ListDisplay';
import '../../ctr.css';
const CoinTR = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="coin-app flex-column">
            <Search setSearch={setSearch} search={search} />
            <ListDisplay search={search}/>
        </div>
    );
};

export default CoinTR;