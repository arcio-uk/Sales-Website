import TitleBar from "./TitleBar";

export default {
  title: "This is the title bar",
  component: TitleBar,
};

const Template = (args: any) => <TitleBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Title bar",
};
