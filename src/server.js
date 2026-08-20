const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Actions Azure Demo</title>
</head>
<body>
  <h1>GitHub Actions → Azure Web App</h1>
  <p>This application was deployed using GitHub Actions.</p>
  <p>Environment: Azure App Service</p>
</body>
</html>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});