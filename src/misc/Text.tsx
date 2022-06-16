/**
 * Use this for language codes:
 * http://www.lingoes.net/en/translator/langcode.htm
 */
const messages = {
  en: {
    welcome: 'Arcio EDU Systems',
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
        description: 'We like attendance! We like attendance! We like attendance! We like attendance! We like attendance! We like attendance! We like attendance! We like attendance! We like attendance! We like attendance! We like attendance! ',
      },
      timetable: {
        title: 'Timetable Management',
        description: 'Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! Timetable Management! ',
      },
      importExport: {
        title: 'Easy Data Imports and Exports',
        description: 'Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! Easy Data Imports and Exports! ',
      },
      cloud: {
        title: 'Cloud Hosting',
        description: 'Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! Cloud Hosting! ',
      },
      courseAssignment: {
        title: 'Course assignment',
        description: 'Course assignment! Course assignment! Course assignment! Course assignment! Course assignment! Course assignment! Course assignment! Course assignment! Course assignment! Course assignment! ',
      },
      signup: {
        title: 'Institution Registration',
        description: 'Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! Institution Registration! ',
      },
      examManagement: {
        title: 'Exam Management',
        description: 'Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! Exam Management! ',
      },
      behaviorManagement: {
        title: 'Behavior Management',
        description: 'Behavior Management! Behavior Management! Behavior Management! Behavior Management! Behavior Management! Behavior Management! Behavior Management! Behavior Management! Behavior Management! Behavior Management! ',
      },
      guardianPortal: {
        title: 'Guardian portal',
        description: 'Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! Guardian portal! ',
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
      accessControl: {
        title: 'Role Based Access Control',
        description: '',
      },
    },
    contactUs: {
      title: 'Contact Us',
      email: 'Email',
      message: 'Message',
      submit: 'Submit',
    },
    standardLayout: {
      navbar: {

      },
      copyright: {
        first: 'Copyright © 2022 Arcio LLC - Made with ',
        second: ' By the Arcio Team',
      },
    },
    aboutUs: {
      people: {
        james: {
          name: 'James',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        john: {
          name: 'John',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        danny: {
          name: 'Danny',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        isaac: {
          name: 'Isaac',
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
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
