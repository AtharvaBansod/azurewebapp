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
      <h1>App by Atharva !!!</h1>
      

      
    </body>
    </html>
  `);
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
