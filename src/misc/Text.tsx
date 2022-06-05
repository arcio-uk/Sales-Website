/**
 * Use this for language codes:
 * http://www.lingoes.net/en/translator/langcode.htm
 */
const messages = {
  en: {
    welcome: 'Arcio Systems',
    caroselSlides: {
      speed: {
        title: 'Speed',
        text: 'Gas gas gas, gotta step on the gas',
      },
      security: {
        title: 'Security',
        text: 'Security was one of our top priorities whilst developing our system',
      },
      relyability: {
        title: 'Reliability',
        text: 'We use the reliability of the cloud, alongside flexible code for different methods of deployment to increase our relyability and have a near perfect uptime!',

      },
    },
    explanationBoxes: [],
  },
};

// TODO: setup the different languages
let selected;
// eslint-disable-next-line no-useless-concat
const language = 'e' + 'n';
switch (language) {
  case 'en':
    selected = messages.en;
    break;
  default:
    selected = messages.en;
    break;
}

const Text = selected;

export default Text;
