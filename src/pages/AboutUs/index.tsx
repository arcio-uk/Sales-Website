import TitleBar from '@/ui/TitleBar';
import ProfileCard from './ProfileCard';
import Text from '@/misc/Text';

const staticText = Text.aboutUs;

const AboutUs = () => (
  <div className="text-5xl w-full flex-col justify-center content-center my-5 space-y-8">
    <div className="flex-col flex w-3/4 bg-white rounded-2xl shadow-2xl justify-center content-center m-auto">
      <TitleBar text={staticText.whoAreWe.title} className="bg-white rounded-full w-3/4 m-auto" />
      <div className="text-xl m-5 text-center space-y-5">
        {staticText.whoAreWe.paragraphs.map((para) => (<div>{para}</div>))}
      </div>
    </div>
    <div className="flex-col flex w-3/4 bg-white rounded-2xl shadow-2xl justify-center content-center m-auto">
      <TitleBar text={staticText.theTeam} className="bg-white rounded-full w-3/4 m-auto" />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 m-5">
        <ProfileCard person={staticText.people.james} />
        <ProfileCard person={staticText.people.john} />
        <ProfileCard person={staticText.people.danny} />
        <ProfileCard person={staticText.people.isaac} />
      </div>
    </div>

  </div>
);

export default AboutUs;
