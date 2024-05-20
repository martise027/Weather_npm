#!/usr/bin/env node
const { program } = require('commander');
const { getLoc }  = require('./location'); 
const { getWeather } = require('./weather');
const { displayWeather } =require('./display');




program
    .command('lmk')
    .description('get current weather information')
    .action(async () => {
        try{
            const loc = await getLoc();

            console.log('location :',loc);

            const weatherData = await getWeather(loc);
            displayWeather(weatherData);

        }catch(error){
            console.log('ERROR1',error.message);
        }


    });

program.parse(process.argv);