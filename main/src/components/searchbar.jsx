import {MdOutlineSearch} from 'react-icons/md'

export default function SearchBar(props){
    let {inputValue,handleInput,handleClick} = props;
    return (
        <header className="header flex-center-center " >
          <div className="search-bar">
            <input type="text" className="search" name="search" value={inputValue} onChange={handleInput} placeholder="search any gifs" />
            <button onClick={handleClick} className="search-btn flex-center-center" ><MdOutlineSearch /></button>
          </div>
        </header>
    )
  }