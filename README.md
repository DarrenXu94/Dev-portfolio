# Dev Portfolio

![Screenshot from 2021-08-22 17-26-30](https://user-images.githubusercontent.com/16931153/130346394-be58f8db-8e8b-4e48-9c17-ca76db05b8d4.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/04f80a13-27a3-4397-848a-bf92e92831f9/deploy-status)](https://app.netlify.com/sites/darren-xu/deploys)

This portfolio code is used to display my personal profile based off [this repo](https://github.com/RyanFitzgerald/devportfolio)

View the live portfolio [here](http://darrenxu.com/)

## Features

- Gulp ready (compiles Sass and minifies JS)
- Sass ready with lots of commenting
- Fully responsive
- Comes with Bootstrap grid system
- Easy colour changes can be done through simple variable edits
- Animate on scroll library

## Hosting

Deployed on Netlify with automatic deploys on the master branch

## Make gifs from screen recordings

ffmpeg -i filename am.mov -s 600x400 -pix_fmt rgb24 -r 10 -f gif - | gifsicle --optimize=3 --delay=10 > out.gif
