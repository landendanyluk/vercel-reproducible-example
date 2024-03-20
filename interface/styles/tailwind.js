module.exports = function () {
  let config = {
    content: [
      './app/**/*.{js,jsx,ts,tsx}',
      '../../interface/**/*.{js,jsx,ts,tsx}',
      './node_modules/@xaeon/interface/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
      fontFamily: {
        'space-mono': 'var(--font-work-sans)',
        'work-sans': 'var(--font-work-sans)',
        oswald: 'var(--font-oswald)'
      },
      extend: {
        colors: {
          'xaeon-pink': 'rgb(var(--xaeon-pink) / <alpha-value>)',
          'xaeon-purple': 'rgb(var(--xaeon-purple) / <alpha-value>)',
          foreground: 'rgb(var(--foreground) / <alpha-value>)',
          'foreground-muted': 'rgb(var(--foreground-muted) / <alpha-value>)',
          background: 'rgb(var(--background) / <alpha-value>)',
          'background-darker': 'rgb(var(--background-darker) / <alpha-value>)',
          'sky-blue': 'rgb(var(--sky-blue) / <alpha-value>)',
          transparent: 'transparent'
        },
        backgroundImage: {
          'xaeon-gradient': 'linear-gradient(95deg, #5B24DE 0%, #E370FA 100%)'
        },
        spacing: {
          navigation: 'var(--navigation-height)'
        },
        borderWidth: {
          1: '1px',
          3: '3px'
        },

        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: 'calc(var(--radius) - 4px)'
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' }
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' }
          },
          slideDownAndFade: {
            from: { opacity: 0, transform: 'translateY(-2px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          },
          slideLeftAndFade: {
            from: { opacity: 0, transform: 'translateX(2px)' },
            to: { opacity: 1, transform: 'translateX(0)' }
          },
          slideUpAndFade: {
            from: { opacity: 0, transform: 'translateY(2px)' },
            to: { opacity: 1, transform: 'translateY(0)' }
          },
          slideRightAndFade: {
            from: { opacity: 0, transform: 'translateX(-2px)' },
            to: { opacity: 1, transform: 'translateX(0)' }
          }
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          'indeterminate-bar':
            'indeterminate-bar 1.5s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite normal none running'
        }
      }
    },
    plugins: [require('tailwindcss-animate')]
  }
  return config
}
