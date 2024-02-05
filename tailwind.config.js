/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pinkgradient':'linear-gradient(360deg, #FFCEC7 0%, rgba(217, 217, 217, 0) 43.04%, rgba(255, 255, 255, 0) 68.04%)',
        'pinkgradient3':'linear-gradient(180deg, #FFCEC7 0%, rgba(217, 217, 217, 0) 43.04%, rgba(255, 255, 255, 0) 68.04%)',
        'pinkgradient2':'background: linear-gradient(360deg, #FFCEC7 0%, rgba(217, 217, 217, 0) 68.04%, rgba(255, 255, 255, 0) 68.04%)'
      },
      colors: {
        'primary':'#8D50EF',
        'secondary':'#1E2D48',
        'blue':'#59A3EE',
        'pink':'#FE7A6D',
        'gray':'#F1F1F1',
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      lineHeight:{
       
      },
      fontFamily: {
        rokh: "rokh",
        stretch: "stretch",
        yekanBakhRegular: "yekanBakh-Regular",
      },
      boxShadow: {
        '1':"box-shadow: 0px 0px 35.20000076293945px 0px #0000000D",
        '2':"box-shadow: -11.199999809265137px 8.800000190734863px 64px 0px #FE7A6DB2",
        '3':'box-shadow: 0px -4px 96px -15px #0000001A',
        'next':'box-shadow: -2px 0px 24px 0px #0000001A',
      },
      maxWidth:{
        'content':'1268px',
      },
    }
},
  plugins: [],
}

