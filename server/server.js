const express=require('express');
const cors=require('cors');
const app=express();
const port=3001;
app.use(express.json());
app.use(cors());
const urlDatabase={};
function generateShortCode(){
  return Math.random().toString(36).substring(2, 8);
}
app.post('/api/shorten',(req, res)=>{
  const { longUrl, validityInMinutes,shortCode}=req.body;
  if (!longUrl){
    return res.status(400).json({error:'longUrl is required'});
  }
  let code;
  if (shortCode){
    if (urlDatabase[shortCode]){
      return res.status(400).json({error: 'Shortcode already exists'});  }
    code=shortCode;
  }else{
    do{
      code=generateShortCode();
    }while(urlDatabase[code]);  }
  const expiryDate=validityInMinutes
    ? new Date(Date.now()+validityInMinutes*60*1000)
    : null;
  urlDatabase[code]={longUrl,expiryDate};
  res.json({
    shortUrl:`http://localhost:${port}/${code}`,
    expiryDate:expiryDate?expiryDate.toTimeString():'Never',
    originalUrl:longUrl,     });    });

app.get('/:shortCode',(req,res)=>{
  const { shortCode}=req.params;
  const urlData=urlDatabase[shortCode];
  if(urlData){
    if (urlData.expiryDate && new Date(urlData.expiryDate)<new Date()) {
      res.status(404).send('URL expired');
    } else {
      res.redirect(urlData.longUrl);   }
  } else {
    res.status(404).send('URL not found');    }    });
app.listen(port,()=>{
  console.log(`Server listening at http://localhost:${port}`);      });