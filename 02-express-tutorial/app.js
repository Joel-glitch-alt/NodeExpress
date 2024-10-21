// //console.log('Express Tutorial........')
// const http = require('http')

// const { readFileSync } = require('fs')
// //Get all files...
// const homePage = readFileSync("./navbar-app/index.html")
// const homeStyles  = readFileSync("./navbar-app/styles.css")
// const homeImage = readFileSync("./navbar-app/logo.svg")
// const homeLogic = readFileSync("./navbar-app/browser-app.js")
// //Creating Server
// const server = http.createServer((req, res)=>{
//     //console.log(req.method)
//     //console.log(req.url)
//     const url = req.url;
//     //home page
//     if(url === '/'){
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write(homePage)
//         res.end()
//     }
//     //About Page
//     else if ( url === '/about') {
//         res.writeHead(200, {'Content-Type': 'text/html'})
//         res.write('<h1>About Page Available<h1>')
//         res.end()
//     }
//      //Styles...
//     else if ( url === '/styles.css') {
//         res.writeHead(200, {'Content-Type': 'text/css'})
//         res.write(homeStyles)
//         res.end()
//     }

//     //Images/Logo
//     else if ( url === '/logo.svg') {
//         res.writeHead(200, {'Content-Type': 'image/svg+xml'})
//         res.write(homeImage)
//         res.end()
//     }
//    //Logic
//    else if ( url === '/browser-app.js') {
//     res.writeHead(200, {'Content-Type': 'text/javascript'})
//     res.write(homeLogic)
//     res.end()
// }
// //End
//     else{
//         res.writeHead(404, {'Content-Type': 'text/html'})
//         console.log('User hit server')
//         res.write('<h1>Page not available<h1>')
//         res.end()
//     }  
// })

// server.listen(5000)

//Using Express...
// const express = require('express')
// const app = express()
// const path = require('path')


// //Static and Middleware
// app.use(express.static('./navbar-app/public'))


// // app.get('/', (req, res)=>{
// //     //res.status(200).send('Home Page')
// //     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// // })

// //
// app.get('/about', (req, res)=>{
//     res.status(200).send('About Page')
// })
// //
// app.get('*', (req, res)=>{
//     res.status(404).send('Page not available')
// })

// app.listen(5000, ()=>{
//     console.log('Server is listening on port 5000')
// })

//Project Start...


// Calling Express...
const express = require('express')
const app = express();
//Using Static Assets...
app.use(express.static('./methods-public'))
//Parse form data
app.use(express.urlencoded({ extended: false}))
//
const people = require('./routes/people')
const auth = require('./routes/auth')

//
app.use('/api/people',people)
app.use('/login',auth)


//Using API'S


/* Learning Curve...

const morgan = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')


const { products } = require('./data.js')

//Using api's 
app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

//
app.get('/api/products', (req, res) => {  // Added leading slash to the route
    const newProducts = products.map((product) => {  // Changed parameter to 'product'
        const { id, name, image } = product;
        return { id, name, image };
    });
    res.json(newProducts);
});

//Using different id's
app.get('/api/products/:productID', (req, res)=>{
    console.log(req)
    console.log(req.params)
    const singleProduct = products.find((product)=>product.id === Number(productID ))
    if (!singleProduct) {
        return res.status(404).send('Product does not Exist')
    }

    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req, res)=>{
  console.log(req.params)
  res.send('Hello my World...')
})



app.get('/api/v1/query', (req, res)=>{
    console.log(req.query)
 res.send("This is my Story...")
})



//app.use ([authorize])
app.use(morgan('tiny'))


// Working with Middle ware
app.get('/',logger, (req,res)=>{
   
    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})


app.get('/api/products',logger, (req, res)=>{
    res.send('Products')
})
*/

app.listen(5000, ()=>{
    console.log('Server listening on Port 5000')
})