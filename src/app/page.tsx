"use client"
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypingEffect from 'react-typing-effect'; // Importing typing effect
import SkillCard from '@/components/Skills';
import Footer from '@/components/Footer';
import ProfileImage from '@/components/ProfileImage';
import { motion } from 'framer-motion';

export default function Home() {

 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e:any ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Form submitted!');
    // Implement form submission logic
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  

  return (
    <>
      <Head>
        <title>Your Portfolio</title>
        <meta name="description" content="Professional Web Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Satoshi:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      {/* Navbar */}
      <nav className="bg-[#1c1b29] text-white fixed w-full z-10 top-0 left-0 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold">Your Portfolio</div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-[#f39c12]">About</a>
            <a href="#skills" className="hover:text-[#f39c12]">Skills</a>
            <a href="#experience" className="hover:text-[#f39c12]">Experience</a>
            <a href="#contact" className="hover:text-[#f39c12]">Contact</a>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#1c1b29] text-white absolute top-16 left-0 w-full px-6 py-4 transform transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-full"} ${menuOpen ? "block" : "hidden"}`}
        >
          <a href="#about" className="block py-2 text-lg hover:text-[#f39c12]">About</a>
          <a href="#skills" className="block py-2 text-lg hover:text-[#f39c12]">Skills</a>
          <a href="#experience" className="block py-2 text-lg hover:text-[#f39c12]">Experience</a>
          <a href="#contact" className="block py-2 text-lg hover:text-[#f39c12]">Contact</a>
        </div>
      </nav>

      {/* Header Section with Background */}
      <header className="bg-gradient-to-r from-[#1c1b29] to-[#34495e] text-white py-16 px-6 text-center md:flex md:items-center md:justify-center" data-aos="fade-up">
        <div className="md:w-2/3">
        <div className="flex justify-center mb-6">
        <div className="flex justify-center mb-6">
          
  <ProfileImage/>
</div>
</div>
          <h1 className="text-4xl font-bold md:text-5xl" data-aos="fade-up">
            Hi, I am <span className="text-[#f39c12]" style={{ display: "inline-block" }}><span className="typewriter-effect">Abdul Mannan Fazlani</span></span>
          </h1>
          {/* Typewriter effect */}
          <div className="text-xl mt-4" data-aos="fade-up">
  <TypingEffect
    text="A passionate web developer focused on creating beautiful and functional websites."
    speed={50} 
  />
</div>


        </div>
      </header>
{/* About Section */}
<section
  className="relative section bg-gradient-to-b from-[#1c1b29] to-[#252436] py-20 px-6 md:px-16 text-white overflow-hidden"
  id="about"
>
  <motion.h2
    className="text-4xl font-bold text-center mb-6 text-[#f3c72c]"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
  >
    About Me
  </motion.h2>

  <motion.p
    className="text-lg text-center md:text-xl max-w-3xl mx-auto leading-relaxed"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    whileHover={{ scale: 1.02 }}
  >
    I am a passionate <span className="text-[#f3c72c] font-semibold">Web Developer</span> with over <strong>5 years</strong> of experience building 
    dynamic and interactive applications. My expertise lies in <span className="text-[#f3c72c]">JavaScript, React, Next.js, Tailwind CSS</span>, 
    and other modern technologies. I focus on crafting seamless user experiences while ensuring clean and efficient code.
  </motion.p>

  {/* Floating Background Effects */}
  <motion.div
    className="absolute top-10 left-10 w-20 h-20 bg-[#f3c72c] rounded-full opacity-20 blur-3xl"
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-10 right-10 w-28 h-28 bg-[#f3c72c] rounded-full opacity-10 blur-3xl"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
</section>


      {/* Skills Section */}
      <section className="section bg-[#2c2b38] py-16 px-6 md:px-16 text-white" id="skills">
      <h2 className="text-3xl font-semibold text-center mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <SkillCard
          title="JavaScript"
          percentage={90}
          description="Experienced in modern JavaScript ES6+ and asynchronous programming."
        />
        <SkillCard
          title="React"
          percentage={85}
          description="Skilled in building dynamic web apps using React and hooks."
        />
        <SkillCard
          title="Next.js"
          percentage={80}
          description="Experienced in server-side rendering and static site generation with Next.js."
        />
        <SkillCard
          title="Tailwind CSS"
          percentage={95}
          description="Proficient in using Tailwind CSS for fast and responsive UI development."
        />
      </div>
    </section>
    

{/* Experience Section */}


{/* Experience Section */}
<section
  className="section py-20 px-6 md:px-16 bg-gradient-to-b from-[#2c2b38] to-[#1f1e2a] text-white overflow-hidden"
  id="experience"
>
  <motion.h2
    className="text-4xl font-bold text-center mb-12 text-[#f3c72c]"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}  // Trigger animation on scroll into view
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}  // Trigger only once when scrolled into view
    whileHover={{ scale: 1.05 }}
  >
    Experience
  </motion.h2>

  <div className="max-w-4xl mx-auto space-y-8">
    {[
      {
        title: "Front-End Developer",
        company: "Company XYZ",
        duration: "Jan 2020 - Present",
        description:
          "Developed interactive and responsive web applications using React, Next.js, and Tailwind CSS. Collaborated with design teams to create user-centric solutions.",
      },
      {
        title: "Web Developer",
        company: "Company ABC",
        duration: "Jun 2018 - Dec 2019",
        description:
          "Built websites and web applications from scratch, ensuring clean code and responsive designs. Worked with cross-functional teams to deliver high-quality products.",
      },
    ].map((exp, index) => (
      <motion.div
        key={index}
        className="relative p-6 bg-[#3a3a4e] bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg transition-all duration-500 hover:scale-105 border border-gray-600"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}  // Scroll-based trigger for animation
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
        viewport={{ once: true }}  // Trigger only once when scrolled into view
        whileHover={{
          boxShadow: "0px 0px 30px rgba(243, 199, 44, 0.6)",
        }}
      >
        <h3 className="text-2xl font-semibold text-[#f3c72c]">{exp.title}</h3>
        <p className="text-xl">{exp.company} | {exp.duration}</p>
        <p className="mt-2">{exp.description}</p>
      </motion.div>
    ))}
  </div>

  {/* Floating Background Effects */}
  <motion.div
    className="absolute top-10 left-10 w-20 h-20 bg-[#f3c72c] rounded-full opacity-20 blur-3xl"
    animate={{ y: [0, 20, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-10 right-10 w-28 h-28 bg-[#f3c72c] rounded-full opacity-10 blur-3xl"
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  />
</section>

      {/* Contact Section */}
      <section className="section bg-gradient-to-r from-[#2c3e50] to-[#34495e] text-white py-16 px-6 text-center" id="contact" data-aos="fade-up">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-xl mb-4">I’d love to hear from you! Whether you’re looking to collaborate or just want to say hi, feel free to reach out.</p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 mb-4 text-lg rounded-lg border-2 border-gray-300"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 mb-4 text-lg rounded-lg border-2 border-gray-300"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 mb-4 text-lg rounded-lg border-2 border-gray-300"
            rows={4}
          />
          <button type="submit" className="bg-[#f39c12] text-white py-3 px-8 rounded-full hover:bg-[#e67e22]">Send Message</button>
        </form>
      </section>
 



      <button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  className="fixed bottom-8 right-8 p-3 bg-[#f39c12] rounded-full shadow-lg hover:bg-[#e67e22]"
  aria-label="Back to top"
>
  ↑
</button>

     
<Footer/>
    </>
  );
}
