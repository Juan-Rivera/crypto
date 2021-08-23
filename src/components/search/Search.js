import React from 'react';

const Search = (props) => {

    const handleChange = e => {
		props.setSearch(e.target.value);
    };
    
    return (
        <div className='search'>
            <form className='search-form'>
                <input 
                    type='text'
                    value={props.search}
                    onChange={handleChange}
                    className='search-input'
                />
            </form>
        </div>
    )
};

export default Search;