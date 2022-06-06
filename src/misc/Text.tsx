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
        text: 'Our system uses advanced load balancing with state of the art equipment, alongside being designed from the ground up for speed',
      },
      security: {
        title: 'Security',
        text: 'Security was one of our top priorities whilst developing our system',
      },
      relyability: {
        title: 'Reliability',
        text: 'We use the reliability of the cloud, alongside flexible code for different methods of deployment to increase our reliability and have a near perfect uptime!',

      },
      flexibility: {
        title: 'Flexibility',
        text: 'We designed our MIS to be as flexible as possible, allowing for all the potential edge-cases we could think of! We use Role Based Access Control (RBAC) to optimise the ease of use and efficiency of managing the permissions',
      },
    },
    explanationBoxes: {
      attendance: {
        title: 'Attendance Tracking',
        description: '',
      },
      timetable: {
        title: 'Timetable Management',
        description: '',
      },
      importExport: {
        title: 'Easy Data Imports and Exports',
        description: '',
      },
      cloud: {
        title: 'Cloud Hosting',
        description: '',
      },
      courseAssignment: {
        title: 'Course assignment',
        description: '',
      },
      signup: {
        title: 'Institution Registration',
        description: '',
      },
      examManagement: {
        title: 'Exam Management',
        description: '',
      },
      behaviorManagement: {
        title: 'Behavior Management',
        description: '',
      },
      guardianPortal: {
        title: 'Guardian portal',
        description: '',
      },
      eventOrganiser: {
        title: 'Event Organiser',
        description: '',
      },
      resourceBooker: {
        title: 'Resource Booker',
        description: '',
      },
      assignmentManager: {
        title: 'Assignment Manager',
        description: '',
      },
      courseReviews: {
        title: 'End of Term Course Reviews',
        description: '',
      },
      expenseManager: {
        title: 'Expense Manager',
        description: '',
      },
    },
  },
};

// TODO: setup the different languages
const selected = messages.en;
// eslint-disable-next-line no-useless-concat
/*
let selected;
switch (language) {
  case 'en':
    selected = messages.en;
    break;
  default:
    selected = messages.en;
    break;
}
*/
const Text = selected;

export default Text;
