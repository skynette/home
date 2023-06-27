/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body:{
          300:'#F1F3F8',
          400:'#D6E0F0',
          500:'#8D93AB',
          600:'#5E6580',
          700:'#4C5166',
          800:'#393B44'
        },
        cyellow:{
          500:'#F6FA70',
          600:'#EEF60C',
          700:'#FFFF00',
          800:'#FFB703'
        },
        cblue:{
          500:'#7570FA',
          600:'#5D57F9',
          800:'#4D49A4',
          900:'#4A4978',
          1000: '#43425A'
        },
        cred:{
          200:'#F8EAEA',
          300:'#F0C6C6',
          400:'#F19E9D',
          500:'#FA7170',
          600:'#F83E3E'
        }
      },
      fontFamily:{
        main: ['Nunito']
      }
    },
  },
  plugins: [],
}
