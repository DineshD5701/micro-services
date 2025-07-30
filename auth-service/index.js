const http = require('http');
const PORT = process.env.PORT || 4000;
http.createServer((req, res) => {
  res.end("Hello from service auth-service deployed using jenkins on port " + PORT);
}).listen(PORT, () => console.log(`Running on port ${PORT}`));
