const express = require('express')
// import database
const db = require('./config/db/index_db')
db.connect()
const app = express()
const port = 3000
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')

const indoorsRouter = require('./routes/indoors')
const siteRouter = require('./routes/site')
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(cors())
app.use(express.json());
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

app.use(morgan('combined'))
//import router
const route = require('./routes/index_routes')

// config main css
app.use(express.static(path.join(__dirname, '/public')))
// config main js
app.use(express.static(path.join(__dirname, '/public/js')));

app.use(methodOverride('_method'))

const exphbs = require('express-handlebars');
app.engine(
  'handlebars',
  exphbs({
    helpers: {
      sum: (a, b) => a + b,
      div: (a) => parseInt(a) * 5,
      total: (a, b) => parseInt(a) * 5 + parseInt(b),
      json: function (context) { return JSON.stringify(context) }
    }
  }))

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'))
route(app)
app.use('./routes/indoors', indoorsRouter)
app.use('./routes/site', siteRouter)
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
// khai báo

// middleware

// routes

//listen