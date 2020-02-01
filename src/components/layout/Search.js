import React, { useState, useEffect } from 'react';

const SearchCards = () => {

  const [text, setText] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(false);
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onFocus = () => {
    setSearching(true);
  }

  const onBlur = () => {
    setSearching(false);
    setText('')
  }

  const thisStyle = {
    width: searching ? '155%' : '100%'
  }

  return (
    <>
      <input
        type='text'
        placeholder='جستجو در محصولات'
        onFocus={onFocus}
        onBlur={onBlur}
        className={`${searching ? 'op-9' : 'op-7'}`}
        onChange={onChange}
        style={thisStyle}
        value={text}/>
    </>
  )
}

export default SearchCards