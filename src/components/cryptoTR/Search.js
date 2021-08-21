import React from 'react';

const Search = (props) => {
    const handleChange = e => {
		props.setSearch(e.target.value);
    };
    
    return (
        <div className="coin-search flex-column">
            <form>
                <input 
                    type="text"
                    value={props.search}
                    placeholder="Search..."
                    onChange={handleChange}
                    className='coin-input'
                />
            </form>
        </div>
    )
};

export default Search;