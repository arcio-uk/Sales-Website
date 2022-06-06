/* eslint-disable global-require */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  compilerOptions: {
    baseUrl: 'src/',
  },
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animatecss')({
      classes: ['animate__animated', 'animate__fadeIn', 'animate__bounceIn', 'animate__lightSpeedOut', 'animate__rollIn', 'animate__backInUp', 'animate__fast', 'animate__faster', 'animate__backOutDown'],
      settings: {
        animatedSpeed: 500,
        heartBeatSpeed: 1000,
        fadeIn: 300,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
        backOutDown: 500,
      },
      variants: ['responsive', 'hover', 'reduced-motion'],
    }),
  ],
  include: [
    'src',
    'types',
  ],
};
