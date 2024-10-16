'use client'
import ring from "@/assets/ring.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

const Info = () => {
  return <>
    <div className="">
      <MidText />
      <div className="mt-8 flex justify-center">
        <Slideshow />
      </div>

      <div className="mt-8 flex justify-center">
        <FormComponent />
      </div>

      <div className="mt-8 justify-center p-4">
        <Footer />
      </div>
    </div>
    </>
};

// MidText Component
function MidText() {
  return (
    <div className="flex flex-col items-center">
      {/* Coming Soon Main Text */}
      <h1 className="text-6xl text-[#C41E56] font-semibold">Coming Soon</h1>
      <p className="text-[#C41E56] text-lg mt-2">
        Discover the beauty of timeless craftsmanship with Jenii
      </p>
    </div>
  );
};


function Slideshow() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Social Media Icons */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4">
        <SocialIcon href="#" Icon={FaFacebook} />
        <SocialIcon href="#" Icon={FaWhatsapp} />
        <SocialIcon href="#" Icon={FaInstagram} />
      </div>

      {/* Ring Image */}
      <div className="flex flex-col w-[70vw]  ">
      <Image
      width={300}
      height={300}
        src={ring}
        alt="Diamond Ring"
        className="w-30 h-30 mx-auto "
      />
      <div className="h-10 w-[50%] mx-auto bg-[radial-gradient(49.69%_46.99%_at_49.42%_42.82%,#AAAAAA_0%,#B6B6B6_8%,#D5D5D5_33%,#ECECEC_57%,#fddbc6_80%,transparent_100%)]"></div>
      </div>

      {/* Right Arrow Button */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <button className="flex items-center justify-center w-12 h-12 bg-white shadow-lg rounded-full text-[#C41E56] text-2xl">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full"
    >
      <Icon size={20} />
    </a>
  );
};

const FormComponent = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the API endpoint
    const res = await fetch('/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ email, phone }),
    });

    const result = await res.json();

    if (res.ok) {
      setMessage(result.message || 'Form submitted successfully!');
      setEmail('');
      setPhone('');
    } else {
      setMessage('Error submitting the form');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[500px] p-4">
      {/* Email Input */}
      <div className="flex items-center w-full bg-white rounded-md px-4 py-3 shadow-md">
        <FaEnvelope className="text-[#B3A8A8] mr-3" size={20} />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full outline-none text-[#B3A8A8] text-lg"
          required
        />
      </div>

      {/* Phone Input */}
      <div className="flex items-center w-full bg-white rounded-md px-4 py-3 shadow-md">
        <FaPhoneAlt className="text-[#B3A8A8] mr-3" size={20} />
        <input
          type="tel"
          placeholder="Phone No"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full outline-none text-[#B3A8A8] text-lg"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        className="text-[#C41E56] w-full bg-[#FFFFFF] text-lg font-semibold py-3 rounded-md shadow-md hover:bg-[#a71745] hover:text-white transition"
        onClick={handleSubmit}
      >
        Join the Waitlist
      </button>
      <p className="text-sm text-[#B3A8A8] mt-2">
        Join a waitlist at 1750+ members!
      </p>

      {/* Success/Error Message */}
      {message && <p className="mt-2 text-lg text-center">{message}</p>}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="rounded-lg bg-[#C41E56] text-white justify-center flex p-4">
      <FaLocationDot size={20} />
      <p className="font-semibold">
        Broadway Empire, Nilamber Circle, Vasna Bhayli Main Rd, near Akshar Pavilion, Saiyed Vasna, Vadodara, Gujarat 391410
      </p>
    </div>
  );
};



export default Info;
