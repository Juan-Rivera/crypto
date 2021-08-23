import React, { useState } from 'react';
import logo from '../../images/Cryptory.svg';
import { Icon } from '@iconify/react';
import { useHistory } from 'react-router-dom';
const Home = () => {
    const [search, setSearch] = useState('')
    let history = useHistory();
    
    const handleChange = e => {
		setSearch(e.target.value);
    }; 
    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/directory/${search}`)
    }
    return (
        <div className='home flex-column'>
            <img src={logo} alt="cryptory logo"/>
            <div className='home-search'>
                
                <form className='home-form flex-row' onSubmit={handleSubmit}>
                    <Icon icon="ant-design:search-outlined" color="#9aa0a6" height='20'/>
                    <input 
                        type='text'
                        value={search}
                        onChange={handleChange}
                        className='home-input'
                    />
                </form>
                
            </div>
        </div>
    );
};

export default Home;