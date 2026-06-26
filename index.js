const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Root route serving inline HTML
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Azure Node App</title>
      <style>
        body { font-family: Arial; text-align: center; margin-top: 50px; }
        h1 { color: #0078D4; }
        button { padding: 10px 20px; font-size: 16px; }
      </style>
    </head>
    <body>
      <h1>🚀 Azure App Service is Working!</h1>
      <p id="msg">Click the button to call API</p>
      <button onclick="callApi()">Call API</button>

      <script>
        function callApi() {
          fetch('/api/hello')
            .then(res => res.json())
            .then(data => {
              document.getElementById('msg').innerText = data.message;
            })
            .catch(() => {
              document.getElementById('msg').innerText = "Error calling API";
            });
        }
      </script>
    </body>
    </html>
  `);
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
