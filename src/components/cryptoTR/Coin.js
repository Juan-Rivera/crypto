import React from 'react';

const Coin = (props) => {
    const { coin } = props;

    return (
        <div className='coin-container flex-row'>
            <div className="coin-row flex-row">
                <div className='coin-info flex-row'>
                    <img src={coin.image} alt='crypto' className='coin-image' />
                    <h1 className='coin-name'>{coin.name}</h1>
                    <p className='coin-symbol'>{coin.symbol}</p>
                </div>
                <div className='coin-data flex-row'>
                    <p className="coin-price">${coin.current_price.toLocaleString()}</p>
                    <p className="coin-volume">${coin.total_volume.toLocaleString()}</p>
                    {coin.price_change_percentage_24h < 0 ? (
                        <p className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketcap'>
                        ${coin.market_cap.toLocaleString()}
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Coin;