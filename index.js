const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 设置静态文件目录（用于存放 CSS 和图片）
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});