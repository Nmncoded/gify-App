import {useState,useEffect} from 'react'
import MainUI from './mainui'
import Pagination from '@mui/material/Pagination';
import SearchBar from './searchbar'


export default function App(){
    let limit = 9;
    let [totalCount,setTotalCount] = useState(0);
    let [mainData, setMainData] = useState([]);
    let [error,setError] = useState("");
    let [inputValue,setInputValue] = useState("");
    let [offset,setOffset] = useState(0);
  
      useEffect(() => {
            setMainData([])
            fetchData()
      },[offset])

      const handleClick= () => {
          setMainData([]);
          setTotalCount(0)
          fetchData();
          setInputValue("");
      }
  
      const handleInput = ({target}) => {
        let {value} = target;
        setError("");
        setMainData([]);
        setTotalCount(0)
        setInputValue(value);
      }
      const fetchData = () => {
        let key = "GlVGYHkr3WSBnllca54iNt0yFbjz7L65";
        fetch(`https://api.giphy.com/v1/gifs/${!inputValue ? "trending" : "search"}?api_key=${key}&limit=${limit}&offset=${offset}${inputValue ? `&q=${inputValue}` : "" }`)
        .then(res => {
          if(!res.ok){
            return res.json().then(err => {return Promise.reject(err)})
          }else{
            return res.json()
          }
        })
        .then(mainData => {
            if(!mainData.data.length){
                setError("No match found !!!")
            }else{
                setMainData(mainData.data);
                setTotalCount( mainData.pagination.total_count % 9 === 0 ? mainData.pagination.total_count : (mainData.pagination.total_count - mainData.pagination.total_count % 9) );
            }
        })
        .catch(err => {
          setError(`Error: Check your internet connection` )
        })
      }

      const handleOffset = (value) => {
          setError("");
        if(value === "prev"){
            setOffset(offset - limit >=0 ? offset - limit : offset)
        }
        if(value === "next"){
            setOffset(offset + limit <= totalCount ? offset + limit : offset)
        }
        if(typeof(value) === "number"){
            setOffset((value * limit) - limit)
        }
      }

      return (
          <>
              <SearchBar inputValue={inputValue} handleClick={handleClick} handleInput={handleInput} />
              <MainUI mainData={mainData} error={error} />
              <Pagination count={totalCount/9} onChange={(event,page) => handleOffset(page) } shape="rounded" color="primary" />
          </>   
      )
}
