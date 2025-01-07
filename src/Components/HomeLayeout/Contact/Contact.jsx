import { useContext } from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall, IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { SiMinutemailer, SiWhatsapp } from "react-icons/si";
import { AuthContext } from "../../../Provider/AuthProvider";

const Contact = () => {

    const {darkTheme} = useContext(AuthContext);

    return (
        <div id="contact" className=" py-20 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center"><span className="border-b-2 pb-3 px-6 border-blue-600">Contact Us</span></h1>
            <div className="max-w-5xl mx-auto flex flex-row-reverse max-md:flex-col gap-10 my-10">
            <div className=" border p-6 rounded-lg shadow-md ">
                <form className="space-y-4">
                    <div className="flex items-center gap-4">
                        <input type="text" name="name" className={darkTheme ? "dark-theme p-3 w-full outline-none border focus:border-sky-500 rounded-lg" : "p-3 w-full outline-none border focus:border-sky-500 rounded-lg"} placeholder="Full Name" id="name" />
                        <input type="email" name="name" className={darkTheme ? "dark-theme p-3 w-full outline-none border focus:border-sky-500 rounded-lg" : "p-3 w-full outline-none border focus:border-sky-500 rounded-lg"} placeholder="Email Address" id="name" />
                    </div>
                    <textarea name="message" placeholder="Your Message" className={darkTheme ? "dark-theme p-3 w-full outline-none border focus:border-sky-500 rounded-lg" : "p-3 w-full outline-none border focus:border-sky-500 rounded-lg"} id="message" rows="10"></textarea>
                    <button className="btn btn-outline btn-info text-xl w-full">Send Message</button>
                </form>
            </div>

            <div className="border  px-8 py-20 rounded-lg shadow-md space-y-10">
                <div className="space-y-4">
                    <p className="flex items-center gap-2 text-xl"><IoCall/> +880 1582 585 585</p>
                    <p className="flex items-center gap-2 text-xl"><SiMinutemailer/> sports.hub@gmail.com
                    </p>
                    <p className="flex items-center gap-2 text-xl"><IoLocation /> Chattogram, Bangladesh.</p>
                </div>
                <div className="text-2xl flex items-center gap-4">
                    <a className="hover:scale-110 transition duration-500 border hover:border-sky-500 hover:text-sky-500 rounded-full p-2 " target="_blank" href="https://github.com/shbhuiyan"> <FaGithub /> </a>
                    <a className="hover:scale-110 transition duration-500 border hover:border-sky-500 hover:text-sky-500 rounded-full p-2 " target="_blank" href="#"> <FaLinkedin /> </a>
                    <a className="hover:scale-110 transition duration-500 border hover:border-sky-500 hover:text-sky-500 rounded-full p-2 " target="_blank" href="#"> <FaSquareXTwitter /> </a>
                    <a className="hover:scale-110 transition duration-500 border hover:border-sky-500 hover:text-sky-500 rounded-full p-2 " target="_blank" href="https://www.facebook.com/its.bhuiyan997"> <FaFacebook /> </a>
                    <a className="hover:scale-110 transition duration-500 border hover:border-sky-500 hover:text-sky-500 rounded-full p-2 " target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=shbhuiyan997@gmail.com"> <MdEmail /> </a>
                    <a className="hover:scale-110 transition duration-500 border hover:border-sky-500 hover:text-sky-500 rounded-full p-2 " target="_blank" href="https://wa.me/8801869997997"> <SiWhatsapp /> </a>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Contact;