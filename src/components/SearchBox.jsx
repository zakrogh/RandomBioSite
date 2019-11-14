import React from 'react';

function SearchBox(){
  return (
    <div className="search-box">
      <style global jsx>{`
          .search-box{
            float:right;
            border-style: solid;
            border-width: 2px;
            border-color: lightblue;
            border-radius: 10px;
          }
        `}</style>
      <form>
        <label htmlFor="search">SearchLabelTest</label>
        <input
          type='text'
          id='search'
          placeholder='Search'/>
      </form>
    </div>
  );
}

export default SearchBox;
