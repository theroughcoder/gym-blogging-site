const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
  <style>
  /* css Reset */
*{
     margin: 0px;
     padding: 0px;
} 
body{

     position: relative;
}
/* This is the header */
header{
     background-color: rgb(11, 22, 11, .25);
     display:flex;
     align-items: center;
     width: 100%;
     position: fixed;
     top: 0;
     
     /* border: 2px solid white; */
     

}
/* This is the left side of header  */
#left{ 
     width: 20%;
     /* border: 2px solid #ff8052 ; */

}
/* This is the logo */
#logo{ 
     width: 50%; 
     margin: 10% 25% 10% 25%;
     transition: transform 1s ease-in-out;
     
}
#logo:hover{
     transform: scale(1.5);
     /* transform: rotate(360deg); */
}

/* This is the mid part of header  */
#mid{
     width: 60%;
     /* border: 2px solid #ff8052 ; */

}
#navbar{
     display: flex;
     box-sizing: border-box;
     justify-content: center;
     
}
#navbar li {
     list-style: none;
     border-radius: 50px;
    transition: background-color 1s ease-out;
     
}
#navbar li:hover{
     background-color: rgba(233, 225, 225, 0.4);
}

#navbar li a{
     display: block;
     text-decoration: none;
     font-family: 'Rajdhani', sans-serif ;
     font-size: 1.4vw;
     letter-spacing: 2px;
     color: rgb(255, 255, 255);
     margin: 10px;

}

/* This is the right side of header  */
#right{
     width:20%;
 
}
#search{
     background-color: #f58d38;
     width: 50%;
     margin: auto;
     border-radius: 50px;
     transition: width 1s ease-in-out;
}
#search:hover{
     width: 70%;

}

#search a{
     display: block;
     font-family:'Rajdhani', sans-serif ;
     font-size: 1vw;
     letter-spacing: 2px;
     color: rgb(250, 246, 246);
     padding: 10px;
     text-align: center;
     text-decoration: none;     
}
#search input{
     display: none;
     padding: 10px;
     border: 4px solid #ff8052 ;
     border-radius: 20px;
     text-align: center;
     width: 100%;
     color: #141414f6;
     background-color: white;
     background-image: url(img/search\ icon.png );
     background-position: 10px 10px; 
     background-repeat: no-repeat;
     background-size: 1.2vw;
     font-family: 'Rajdhani', sans-serif;
}
#search:hover input{
     display: block;   
}

#search:hover a{
     display: none;
}


/* This is the cover img of the website */
#backImg img{
     width: 100%;
}
#text{
     font-size: 5vw;
     text-align: center;
     font-family:  'Courgette', cursive;
     background-color:#ffe4c4 ;
     color: #643a09;
     padding-top: 4vw;
     padding-bottom: 2vw;
}
#background{
     background-color: #ffe4c4;
}
.odd {
     padding: 5%;
     display:flex;
     justify-content: space-evenly;
     /* background-color: ghostwhite; */

}
.odd div {
     width:40%;
     font-size: 1.8vw;
     font-family: 'Rajdhani', sans-serif;
     color: #91764de8;

}
.odd div img{
     width: 100%;
}
.even {
     padding: 5%;
     display:flex;
     justify-content: space-evenly;
     flex-direction: row-reverse;
     background-color: #f7f0f0e3;
}
.even div {
     width:40%;
     font-size: 1.8vw;
     font-family:'Rajdhani', sans-serif;
     color: #91764de8;

}
.even div img{
     width: 100%;
}
footer{
     display :flex;
     background-color: rgba(182, 109, 25, 0.384);
     font-family: 'Rajdhani', sans-serif ;
     font-size: 1.6vw;
     letter-spacing: 2px;
     color: rgb(250, 246, 246);
     padding: 8% 0;
     justify-content: space-around;

}
.footeritem {
     margin-bottom: 10px;
     transition: color .2s ease-out;
     
}
.footeritem:hover{
   
     color: #91764de8;
}

  </style>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>gym</title>
       <link rel="stylesheet" href="home.css">
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Rajdhani:wght@400;500&display=swap" rel="stylesheet">  
  </head>
  <body>
       <header>
            <!-- left box for logo -->
            <div id="left"> <img id="logo" src="img/Logo .png" alt="This is logo"></div>
            <!-- mid box for navigation -->
            <div id="mid">
                 <ul id="navbar">
                      <li class="item"><a href="home.html">Home</a></li>
                      <li class="item"><a href="about us.html">About Us</a></li>
                      <li class="item"><a href="contact us.html">Contact Us</a></li>
                      <li class="item"><a href="privacy policy.html">Privacy policy</a></li>
                 </ul>
  
            </div>
            <!-- right box for search -->
            <div id="right">
                 <div id="search">
                      <a href="#"> search</a>
                      <input type="text" name="search" placeholder="search here">
                 </div>
            </div>
       </header>
            <!-- This is the body section  -->
       <section id="background">
            <!-- This is the cover image -->
            <div id="backImg"> <img src="img/cover.jpg" alt=""></div>
            <div id="text"> GYM LIFE </div>
            <!-- This is the content box -->
            <div id="content">
                 <div class="odd">
                      <div><img src="img/photo 1.png" alt=""></div>
                      <div><h1>Boost Your Routine</h1><br> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet nesciunt cumque deleniti omnis incidunt iure excepturi quae, laudantium explicabo, velit natus provident voluptatem doloribus? Assumenda dolor omnis nemo non?
                      Nisi molestiae magni dolore culpa officia nostrum officis </p>  </div>
                 </div>
                 <div class="even">
                      <div><img src="img/photo 2.png" alt=""></div>
                      <div><h1>Magno Weights</h1><br> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet nesciunt cumque deleniti omnis incidunt iure excepturi quae, laudantium explicabo, velit natus provident voluptatem doloribus? Assumenda dolor omnis nemo non?
                           Nisi molestiae magni dolore culpa officia nostrum officiis </p></div>
                 </div>
                 <div class="odd">
                      <div><img src="img/photo 3.png" alt=""></div>
                      <div><h1>Total Core Workout</h1><br> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet nesciunt cumque deleniti omnis incidunt iure excepturi quae, laudantium explicabo, velit natus provident voluptatem doloribus? Assumenda dolor omnis nemo non?
                           Nisi molestiae magni dolore culpa officia nostrum officiis </p></div>
                 </div>
                 <div class="even">
                      <div><img src="img/photo 4.png" alt=""></div>
                      <div><h1>Equilibrion Fitness</h1><br> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic amet nesciunt cumque deleniti omnis incidunt iure excepturi quae, laudantium explicabo, velit natus provident voluptatem doloribus? Assumenda dolor omnis nemo non?
                           Nisi molestiae magni dolore culpa officia nostrum officiis </p></div>
                 </div>
  
            </div>
       </section>
       <!-- This is the footer -->
       <footer>
            <div>
                  <div class="footeritem"> Privacy Policy </div>
  
            </div>
            <div>
                 <div  class="footeritem"> Contact Us </div>
            </div>         
            <div>
                 <div  class="footeritem"> About Us</div>
            </div>
       </footer>
       
  </body>
  </html>node`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
