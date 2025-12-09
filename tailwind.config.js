/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,html}", // Adjust based on your project structure
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Custom primary color
          secondary: "#9333EA", // Custom secondary color
        },
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          'xl': '1.5rem',
        },
      },
    },
    darkMode: 'class', // Enable dark mode support
    plugins: [
      require('@tailwindcss/forms'), // For better form styling
      require('@tailwindcss/typography'), // For prose styling
      require('@tailwindcss/aspect-ratio'), // For aspect-ratio utilities
    ],
  };
  