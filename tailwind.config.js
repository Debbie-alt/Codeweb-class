/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary:"#0b0b34",
        secondary:"068c7c",
        black:"#000000",
        white: "#fff",
        gray:"#c6c6c6",
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '20px',
    }
  },
  plugins: [],
}

}