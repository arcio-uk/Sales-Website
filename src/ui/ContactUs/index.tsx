import { SetStateAction, useState } from 'react';
import Textarea from '@/ui/misc/Textarea';
import Textfield from '@/ui/misc/Textfield';
import TitleBar from '@/ui/TitleBar';

// TODO: make this submit to a server
// TODO: make the message box a textArea
const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="flex w-full justify-center">
      <div className="flex-col md:w-3/5 w-full bg-white m-5 rounded-2xl p-5">
        <TitleBar text="Contact Us" />
        <Textfield
          name="email"
          type="email"
          label="Email"
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
        />
        <Textarea
          name="message"
          label="Message"
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setMessage(e.target.value)}
        />
        <div className="flex w-full justify-center m-5">
          <button
            type="submit"
            className="w-3/4
                      rounded
                      bg-purple-500
                      text-center py-2
                      mx-auto
                      text-zinc-100
                      font-light
                      text-2xl
                      hover:animate-submitButtonHoverAnimation
                      hover:bg-purple-600"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
