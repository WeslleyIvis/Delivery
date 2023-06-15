import React from 'react'

const SearchBox = () => {
    const [valueInput, setValueInput] = React.useState<String>('');


    const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
    }

  return (
    <div className='content-t-input'>
      <input type="text" className="input-t-search" placeholder='Find your product' onChange={(event) => setValue(event)}/>
      <button><img src={require("../images/lupa.png")} alt='' onClick={(event) => console.log(valueInput)}/></button>
    </div>
  )
}

export default SearchBox
