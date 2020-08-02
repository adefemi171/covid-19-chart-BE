# Covid-19 Line Chart USing CubeJS and VueJs

# App Details
.......
................................................
................................

The app will consist of:

    └──Backend Folder      



# Proposed Stack
JavaScript(CubeJS and VueJS) 

# Top-level directory layout

    📦Covid-19-Chart
        ┗ 📦schema
            ┣ 📜CovidTimeseries.js
            ┣ 📜Orders.js
        ┣ 📜index.js
        ┣ 📜.env.example
        ┣ 📜.gitignore
        ┣ 📜package.json
        ┣ 📜package-lock.json
        ┣ 📜README.md

- `I used Postgres as my Database`
- The data stored in the database was gotten from [Centers for Disease Control and Prevention](https://data.cdc.gov/NCHS/Provisional-COVID-19-Death-Counts-by-Sex-Age-and-S/9bhg-hcku)
- The app was deployed using Heroku and the link can be found here [covid-dashboard-BE](https://covid19-us-dashboard.herokuapp.com/)

## How to setup project and run locally

### Clone the repository 

    ```
    git clone https://github.com/adefemi171/covid-19-chart.git
    ```

### Install all dependencies

Using npm

    ```
    npm install
    ```

### To start the App and run locally

    ```
    npm start
    ```    