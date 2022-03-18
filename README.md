# Simple Dashboard

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

Setup project with Create React App

```
npm install -g create-react-app

npx create-react-app simple-dashboard
cd simple-dashboard
```

## Install Library

```
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Run

```
npm run start
```

## Add sample data

- Download these datas.

  - [ข้อมูลผู้เสียชีวิตจากอุบัติเหตุทางถนน](https://data.go.th/dataset/rtddi)
  - [รายงาน Covid-19 ประจำวัน](https://data.go.th/dataset/covid-19-daily)

- Rename field names to camelCase.
- Copy first 1000 rows order by random including header and convert to json
- Convert `csv` to `json` using [CSV to Json Converter](https://www.convertcsv.com/csv-to-json.htm)
- Save files to
```
src/data/accident.json
src/data/covid.json
```



## Branch

1. [Setup Tailwind + React Router](https://github.com/soAcademy/simple-dashboard/tree/release/1-setup-tailwind-router)
2. [Add Sample Data](https://github.com/soAcademy/simple-dashboard/tree/feature/2-add-data)


