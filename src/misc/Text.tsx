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
      whoAreWe: {
        title: 'Who Are We',
        // * We need to update this at some point!
        paragraphs: [
          `Arcio is a startup from 4 students at Royal Holloway, to develop better management systems for schools and universities. 
               From our personal experience, larger singular systems do not have the flexibility and specific requirements 
               needed to have just one supplier for their “Management Information System” (MIS).`,
          `We aim to use our personal experience after going through the educational system to help other students and staff
               with problems we saw that could be easily be fixed after a little thought had been put into it.`,
          `Aside from us addressing problems which we can easily fix, we also have a range of ideas to improve stastic readouts
               for these systems, so teachers and students are recognised and rewarded for doing good work, alongside
               potential negative trends being identified as soon as possible so they can be rectified ASAP.`],
      },
      theTeam: 'The Team',
      people: {
        james: {
          name: 'James',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium sollicitudin ornare. In purus velit, venenatis sit amet eleifend quis, viverra vitae magna. Etiam egestas, nisl sit amet mollis commodo, enim ipsum faucibus odio, vitae pharetra odio nunc ut tellus. Nunc laoreet tellus id arcu fermentum ullamcorper. Nunc lobortis justo quis metus rhoncus viverra. Quisque luctus lacus quis nisl sagittis malesuada. Curabitur porta, tellus nec pulvinar volutpat, massa turpis posuere diam, ac aliquam dolor enim facilisis augue. Etiam gravida mauris et nibh vehicula, in consectetur metus efficitur. Curabitur varius eu justo at sagittis. Aliquam eleifend viverra neque eget dictum. Quisque scelerisque, quam vitae varius tempus, mauris massa convallis ante, vel elementum massa dui luctus magna. Cras malesuada libero eu nunc pretium porttitor at accumsan neque. Aenean lobortis lacinia massa, ut ornare dui aliquam sit amet.',
          socials: {
            twitter: 'https://twitter.com/JamesArnott21',
          },
        },
        john: {
          name: 'John',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium sollicitudin ornare. In purus velit, venenatis sit amet eleifend quis, viverra vitae magna. Etiam egestas, nisl sit amet mollis commodo, enim ipsum faucibus odio, vitae pharetra odio nunc ut tellus. Nunc laoreet tellus id arcu fermentum ullamcorper. Nunc lobortis justo quis metus rhoncus viverra. Quisque luctus lacus quis nisl sagittis malesuada. Curabitur porta, tellus nec pulvinar volutpat, massa turpis posuere diam, ac aliquam dolor enim facilisis augue. Etiam gravida mauris et nibh vehicula, in consectetur metus efficitur. Curabitur varius eu justo at sagittis. Aliquam eleifend viverra neque eget dictum. Quisque scelerisque, quam vitae varius tempus, mauris massa convallis ante, vel elementum massa dui luctus magna. Cras malesuada libero eu nunc pretium porttitor at accumsan neque. Aenean lobortis lacinia massa, ut ornare dui aliquam sit amet.',
        },
        danny: {
          name: 'Danny',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium sollicitudin ornare. In purus velit, venenatis sit amet eleifend quis, viverra vitae magna. Etiam egestas, nisl sit amet mollis commodo, enim ipsum faucibus odio, vitae pharetra odio nunc ut tellus. Nunc laoreet tellus id arcu fermentum ullamcorper. Nunc lobortis justo quis metus rhoncus viverra. Quisque luctus lacus quis nisl sagittis malesuada. Curabitur porta, tellus nec pulvinar volutpat, massa turpis posuere diam, ac aliquam dolor enim facilisis augue. Etiam gravida mauris et nibh vehicula, in consectetur metus efficitur. Curabitur varius eu justo at sagittis. Aliquam eleifend viverra neque eget dictum. Quisque scelerisque, quam vitae varius tempus, mauris massa convallis ante, vel elementum massa dui luctus magna. Cras malesuada libero eu nunc pretium porttitor at accumsan neque. Aenean lobortis lacinia massa, ut ornare dui aliquam sit amet.',
        },
        isaac: {
          name: 'Isaac',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pretium sollicitudin ornare. In purus velit, venenatis sit amet eleifend quis, viverra vitae magna. Etiam egestas, nisl sit amet mollis commodo, enim ipsum faucibus odio, vitae pharetra odio nunc ut tellus. Nunc laoreet tellus id arcu fermentum ullamcorper. Nunc lobortis justo quis metus rhoncus viverra. Quisque luctus lacus quis nisl sagittis malesuada. Curabitur porta, tellus nec pulvinar volutpat, massa turpis posuere diam, ac aliquam dolor enim facilisis augue. Etiam gravida mauris et nibh vehicula, in consectetur metus efficitur. Curabitur varius eu justo at sagittis. Aliquam eleifend viverra neque eget dictum. Quisque scelerisque, quam vitae varius tempus, mauris massa convallis ante, vel elementum massa dui luctus magna. Cras malesuada libero eu nunc pretium porttitor at accumsan neque. Aenean lobortis lacinia massa, ut ornare dui aliquam sit amet.',
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
