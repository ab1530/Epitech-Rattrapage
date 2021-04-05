const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const ip = require('ip');

//Config .env to ./config/config.env
require('dotenv').config({
    path: './config/config.env'
});

//Connnect DB
connectDB();

//about.json
app.use('/about.json', (req, res) => {
    var time = (new Date).getTime()
    res.json({
        "client": {
          "host": ip.address()
        },
        "server": {
          "current_time": time,
          "services": [{
            "name": "Weather",
            "widgets": [{
              "name": "Daily Temperature",
              "description": "Display current Temperature in a chosen city or country",
              "params": [{
                "name": "city",
                "type": "String"
                },
                {
                  "name": "country",
                  "type": "String"
              }]
            },{
            "name": "Daily Wind Speed",
            "description": "Display current wind speed in a chosen city or country",
            "params": [{
              "name": "city",
              "type": "String"
              },
              {
                "name": "country",
                "type": "String"
            }]
          },
        ]},
            {
            "name": "Youtube",
            "widgets": [{
               "name": "Youtube Video",
               "description": "Display Youtube window with a search bar and you can choose to watch a video",
               "params": [{
                 "name": "video name",
                 "type": "String"
                 },
                ]          
            }
           ]
         },
         {
            "name": "Google map",
            "widgets": [{
               "name": "Geolocation",
               "description": "Display a window with a button and show a google map with your current position when you click on it",
               "params": [{
                 "name": "Geolocation",
                 "type": "Button"
                 },
                ]
            }
           ]
         },
         {
          "name": "Spotify",
          "widgets": [{
             "name": "Last Listened Song",
             "description": "Display a lastest listened song on Spotify.",
             "params": [{
               "name": "",
               "type": ""
               },
              ]
          }
         ]
       },
          ]
        }
    })
});

//Config bodyParser
app.use(bodyParser.json())

// Config for only development
if (process.env.NODE_ENV === 'development') {
    // app.use(cors({
    //     origin: process.env.CLIENT_URL
    // }))
    app.use(cors())

    app.use(morgan('dev'))
    //Morgan give information about each request
    //Cors it's allow to deal with react for localhost at port 3000 whitout any problem
}

//Load all routes

const authRouter = require('./routes/auth.route');
const { use } = require('./routes/auth.route');

//Use Routes
app.use('/', authRouter);
//app.use('/', require('./client/about.json'));

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.status(404).json({
        success: false,
        message: "Page not found"
    })
    next()
});

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});