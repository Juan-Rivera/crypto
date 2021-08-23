import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Coin from './Coin';

const PriceList = (props) => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios
            .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then((res) => {
                setCoins(res.data)
            })
            .catch((err) =>{
                alert(err)
            })
    }, [])
    const display = coins.filter(coin =>
        coin.name.toLowerCase().includes(props.search.toLowerCase())
      );
    return (
        <div>
            <div className='key flex-row'>
                    <p className='key-name'>Coin</p>
                    <p className='key-symbol'>Key</p>
                    <p className='key-price'>Price</p>
                    <p className='key-volume'>24h Volume</p>
                    <p className='key-change'>24h Change</p>
                    <p className='key-marketcap'>Market Cap</p>
            </div>
            {display.map((coin) => {
                return <Coin key={coin.id} coin={coin} />
            })}
        </div>
    );
};

export default PriceList;