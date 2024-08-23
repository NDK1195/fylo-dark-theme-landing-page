/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      dropShadow:{
        button:'2px 3px 6px rgba(0, 0, 0, 0.16)'
      },boxShadow:{
        testimonial:'5px 5px 8px 4px rgba(56, 56, 56, 0.10)',
        subscribe:'5px 5px 8px 0px rgba(0, 0, 0, 0.25)'
      },colors:{
        'dark-blue-intro-email-bg':'hsl(217, 28%, 15%)',
        'dark-blue-main-bg':'hsl(218, 28%, 13%)',
        'dark-blue-footer-bg':'hsl(216, 53%, 9%)',
        'dark-blue-testimonial-bg':'hsl(219, 30%, 18%)',
        'cyan':'hsl(176, 68%, 64%)',
        'blue':'hsl(198, 60%, 50%)',
        'light-red':'hsl(0, 100%, 63%)',
      }
    },
  },
  plugins: [],
}

