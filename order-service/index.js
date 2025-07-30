const http = require('http');
const PORT = process.env.PORT || 6000;
http.createServer((req, res) => {
  res.end("Hello from order-service deployed by jenkins ci/cd on port " + PORT);
}).listen(PORT, () => console.log(`Running on port ${PORT}`));
