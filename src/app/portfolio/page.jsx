"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "My First Portfolio",
        desc: "Portfolio ini adalah karya pertama saya dalam pengembangan perangkat lunak, desain grafis, dan manajemen proyek. Saya telah menciptakan solusi inovatif yang kedepannya tidak hanya memenuhi kebutuhan klien, tetapi juga melebihi harapan mereka.",
        img: "https://media.discordapp.net/attachments/1133963111993450548/1216222823576502323/image.png?ex=65ff9ac5&is=65ed25c5&hm=9d21bd481511d906caacc35b02fe67ddb6114cf8bcf6d68c7995d035b2c0d2f5&=&format=webp&quality=lossless&width=481&height=350",
        link: "http://portfolio.haikal.freewebhostmost.com/",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "Next.js Chatan App",
        desc: "Chatan adalah aplikasi pesan instan yang mirip dengan Messenger. Fitur-fiturnya meliputi pesan teks, panggilan suara/video, grup chat, berbagi media, stiker/emoji, keamanan, profil pengguna, dan notifikasi real-time. Dikembangkan untuk pengalaman pengguna yang intuitif, aman, dan terus diperbarui berdasarkan umpan balik pengguna. Tujuannya adalah menjadi aplikasi pesan instan pilihan bagi pengguna yang mencari keandalan dan inovasi.",
        img: "https://cdn.discordapp.com/attachments/1133963111993450548/1218430772130746439/project_chatan.png?ex=6607a315&is=65f52e15&hm=30685e8add6a861416b55bb4f7b2d45bd5e030ba4e63c9be84b49414e9e91d08&",
        link: "https://chatan.vercel.app/",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "Vanilla Book App",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://media.discordapp.net/attachments/1133963111993450548/1216193681141534730/3.png?ex=65ff7fa1&is=65ed0aa1&hm=5ec036e78cda6603d4b0e67c5b4e85b074dcf30e597ddea7daf326f32b7fe765&=&format=webp&quality=lossless",
        link: "http://portfolio.haikal.freewebhostmost.com/",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Spotify Music App",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
        img: "https://media.discordapp.net/attachments/1133963111993450548/1216193681376280639/4.png?ex=65ff7fa1&is=65ed0aa1&hm=5a8b04012f775619dfd93d3ad73eddc8757f311ac27ca0f3300083bf18b474dd&=&format=webp&quality=lossless",
        link: "http://portfolio.haikal.freewebhostmost.com/",
    },
];

const PortfolioPage = () => {
    const ref = useRef();

    const{scrollYProgress} = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0%","-80%"]);
    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">My Works</div>
                <div className=" sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
                        {items.map((item) => (
                            <div 
                            className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} 
                            key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white ">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                    <Link href={item.link} className="flex justify-end">
                                        <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg cursor-pointer bg-white text-gray-600 font-semibold m-4 rounded hover:bg-black hover:text-white">See Demo</button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>    
            </div> 
                <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                    <h1 className="text-8xl">Do you have a project? </h1>
                    <div className="relative">
                        <motion.svg 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300" 
                        className="w-64 h-64 md:w-[500px] md:h-[500px]"
                        >
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                />
                            </defs>
                            <text fill="#000">
                                <textPath xlinkHref="#circlePath" className="text-xl">Front-end Developer and UI Designer</textPath>
                            </text>
                        </motion.svg>
                        <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 cursor-pointer absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center hover:opacity-80">
                            Hire Me
                        </Link>
                    </div>
                </div>
        </motion.div>
    )
}

export default PortfolioPage