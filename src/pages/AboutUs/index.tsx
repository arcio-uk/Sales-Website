import TitleBar from '@/ui/TitleBar';
import ProfileCard from './ProfileCard';
import Text from '@/misc/Text';

const staticText = Text.aboutUs;

const AboutUs = () => (
  <div className="text-5xl w-full flex justify-center content-center my-5">
    <div className="flex-col flex w-3/4 bg-white rounded-2xl shadow-2xl justify-center content-center ">
      <TitleBar text="About Us" className="bg-white rounded-full w-3/4 m-auto" />
      <div className="grid grid-cols-4 gap-5 m-5">
        <ProfileCard firstName={staticText.people.james.name} description={staticText.people.james.description} />
        <ProfileCard firstName={staticText.people.john.name} description={staticText.people.john.description} />
        <ProfileCard firstName={staticText.people.danny.name} description={staticText.people.danny.description} />
        <ProfileCard firstName={staticText.people.isaac.name} description={staticText.people.isaac.description} />
      </div>
    </div>

  </div>
);

export default AboutUs;
