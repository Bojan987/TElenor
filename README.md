# Telenor Tech Task

https://telenor-movies.netlify.app/

​

### Description

Application display 3 movies picked from https://api.tvmaze.com/shows and is fully responsive. It has different views based on screen size . Desktop and Mobile.

1.  Home Page
    - View Shows and their rating snown in Bar Chart
2.  Movie Page
    - View selected Movie Detail

### Technologies

1. react 17.0.2

2. react-router-dom 6.2.1

3. axios 0.25.0

4. Material UI 5.3.0

5. Emotion/Styled 11.6.0

6. chart.js 3.7.0

7. html-react-parser 1.4.5

​

### Folder structure :

​

    - Components


      1. Card : Desktop view Card - View and pick 1 of the movies
      2. CardMobile:  Mobile view Card - View and pick 1 of the movies
      3. Loader : Loader with Telenor logo, when fething data from API
      4. Rating : Rating component for showing Show Rating. Can accept color and text
      5. RatingChart : Chart showing Movie Rating


    - Pages
      1. HomePage : Display Shows and their ratings in Chart
      2. MoviePage: Display selected movie details

    - theme : Material UI themeing


    - Utils :

      1. cartOptions : Chage chart base on screen size. Horizontal Bar chart on desktop | Vertical Bar Chart on Mobile

​

### Installation

​

Firstly install NodeJS (v16.13.1)

    1. Clone the Git Repository

    2. npm install

    3. If necessary :
        - npm install react-router-dom
        - npm install axios
        - npm install @emotion/react
        - npm install @emotion/styled
        - npm install @mui/icons-material
        - npm install @mui/material
        - npm install chart.js
        - npm install html-react-parser
        - npm install react-chartjs-2
        - npm install react-router-doms

​
`

​

### Starting the project

    1. ```npm start```
