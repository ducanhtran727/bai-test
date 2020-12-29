
import './App.css';
import React , {useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [userInput,setUserInput] = useState(
    {
      value: "",
    }
  )
  const [result,setResult] = useState({
    dataFound : []
  })
  const [data,setData] = useState([])
  
  const getdata = async ()=>{
      try{
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(res.data)
        const key = [];
        for(const i in res.data[0]){
          key.push(i)
        }
        console.log(key)
        // const filterAddress =  res.data.map(x =>{
        //    return x.address
        // })
        const filterName = res.data.map(x=>{
          return x.name
        })
        console.log(filterName)
        const filterUserName = res.data.map(x=>{
          return x.username
        })
        const filterEmail = res.data.map(x=>{
          return x.email
        })
        const filterPhone = res.data.map(x=>{
          return x.phone
        })
        const filterWebsite = res.data.map(x=>{
          return x.website
        })
        // const filterCompany = res.data.map(x=>{
        //   return x.company
        // })
        const filterId = res.data.map(x=>{
          return x.id
        })
        setData([
        ...filterEmail,...filterName,...filterPhone,...filterUserName,...filterWebsite,...filterId
        ])
        console.log(data)
      }catch(err){
        console.log(err)
      }
    }
  useEffect(()=>{
    getdata()
  },[]) 
  const setValue = (event)=>{
    setUserInput({
      value : event.target.value
    })
    setResult({
      dataFound : data.filter(x=>{
        return (x.indexOf(userInput.value) > -1)
      })
    })
  }
  console.log(userInput.value)
  return (
    <div className="App">
      <input value={userInput.value} onChange={setValue} type="text" />
      <br/>
      <select>
        {result.dataFound.map(x=>{
         return <option>{x}</option>
        })}
      </select>
    </div>
  );
}
export default App;
