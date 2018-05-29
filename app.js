const Express = require('express');
const app = new Express();

app.get('/',(req, res)=> {
  res.send('Hello world');
});

const server = app.listen(3000,()=>{
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listen at http://%s:%s', host, port);
});