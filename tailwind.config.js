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
          100:'#F1F3F8',
          200:'#D6E0F0',
          300:'#8D93AB',
          400:'#5E6580',
          500:'#4C5166',
          600:'#393B44'
        },
        cyellow:{
          100:'#F6FA70',
          200:'#EEF60C'
        },
        cblue:{
          100:'#7570FA',
          200:'#5D57F9'
        },
        cred:{
          100:'#FA7170',
          200:'#F83E3E'
        }
      },
      fontFamily:{
        main: ['Nunito']
      }
    },
  },
  plugins: [],
}
