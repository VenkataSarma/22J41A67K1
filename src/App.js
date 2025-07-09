import React,{useState} from 'react';
import './App.css';
function App(){
  const [longUrl,setLongUrl]=useState('');
  const [validity,setValidity]=useState('');
  const [shortCode,setShortCode]=useState('');
  const [results,setResults]=useState([]);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try 
    {
      const response = await fetch('http://localhost:3001/api/shorten',
        {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify({
          longUrl,
          validityInMinutes: validity?parseInt(validity,10):null,
          shortCode:shortCode||null,
        }),
      });
      const data=await response.json();
      if (response.ok){
        setResults([data,...results]);
        setLongUrl('');
        setValidity('');
        setShortCode('');
      }else{
        alert(data.error);
      }
    }catch (error) {
      console.error('Error shortening URL:',error);
      alert('An error occurred while shortening the URL.');
    }
  };
  return (
    <div className="app">
      <header className="appheader">
        <h1>URL SHORTENER</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            placeholder="ENTER A LONG URL"            required   />
          <input
            type="number"
            value={validity}
            onChange={(e) => setValidity(e.target.value)}
            placeholder="VALIDITY IN MIN (optional)" />
          <input
            type="text"
            value={shortCode}
            onChange={(e)=>setShortCode(e.target.value)}
            placeholder="PREFERRED SHORTCODE (optional)"/>
          <button type="submit">SHORTEN</button></form>
        <div className="Results">
          {results.map((result, index) => (
            <div key={index}className="Final-Result">
              <p>Original URL:<a href={result.originalUrl}target="_blank"rel="noopener noreferrer">{result.originalUrl}</a></p>
              <p>Shortened URL:<a href={result.shortUrl}target="_blank"rel="noopener noreferrer">{result.shortUrl}</a></p>
              <p>Expiry Date with Time(duration):{result.expiryDate}</p>
            </div>))}
        </div> </header>
    </div>
  );}
export default App;