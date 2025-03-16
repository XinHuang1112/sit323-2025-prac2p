# SIT323 - Cloud Native Application Development
## Task 2.1P: Node.js and Express

### Overview
This task involves creating a simple web page using Node.js and Express.

### Steps to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/username/sit323-2025-prac2p.git
  
2. Navigate to the project folder:
   ```bash
   cd sit323-2025-prac2p
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node index.js
   ```
5. Open your browser and visit `http://localhost:3000.`
### Project Structure
- ``index.js``: The main server file.

- `views/index.html`: The HTML file for the web page.

- `public/css/styles.css`: The CSS file for styling.

- `public/images/logo.png`: The logo image.
### Detailed steps
1. **Install Node.js and npm:**
   Download and install Node.js from `https://nodejs.org.`
   Verify the installation by running:
   ```bash
   node -v
   npm -v
2. **Initialize the Project:**
   Create a new folder for the project and navigate to the folder.
   Initialize a Node.js project:
   ```bash
   npm init -y
3. **Install Express:**
   Install the Express framework:
   ```bash
   npm install express
4.**Create the Web Server:**
   Create an `index.js` file with the following code:
  ```JavaScript 
  const express = require('express');
  const path = require('path');
  const app = express();
  const port = 3000;

  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
   ```
5.**Create the Web Page**

 Create a `views/index.html` file with the following content:
  ```html
 <!DOCTYPE html>
 <html lang="en">
 <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Simple Web Page</title>
    <link rel="stylesheet" href="/css/styles.css">
 </head>
 <body>
    <header>
        <img src="/images/logo.png" alt="Logo" class="logo">
        <h1>Welcome to Xin Huang's Web Page!</h1>
    </header>
    <main>
        <p>This is a simple web page built with Node.js and Express.</p>
    </main>
    <footer>
        <p>&copy; 2025 My Web Page. All rights reserved.</p>
    </footer>
 </body>
 </html>
 ```
 6.**Add CSS syling:**
 Create a `public/css/styles.css` file with the following content:
 ```Css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
    margin: 0;
    padding: 0;
}

header {
    background-color: #007BFF;
    color: white;
    padding: 20px;
    text-align: center;
}

.logo {
    width: 100px;
    height: auto;
}

main {
    padding: 50px;
    font-size: 30px;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
```
7.**Add a logo image to my web page:**
Place a logo image in the `public/images` folder and name it logo.png.

8.**Screenshots:**
![1742117013400](https://github.com/user-attachments/assets/36eaf9ce-ec21-4d99-8c84-a60a20ae8f00)



   
   
