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
  plugins: [],
  include: [
    'src',
    'types',
  ],
};
