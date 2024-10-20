/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
            'linear-gradient(0deg, rgba(69,0,3,1) 0%, rgba(193,1,6,1) 100%)',
      },

    },

  },
  plugins: [],
}
