"use client"

import Image from "next/image";
import Link from "next/link"
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Portfolio" },
    { url: "/contact", title: "Contact" },
];

const Navbar = () => {
    const [open,setOpen] = useState(false)

    const topVariants={
        closed:{
            rotate:0,
        },
        opened: {
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        }
    };
    const centerVariants={
        closed:{
            ropacity:1,
        },
        opened: {
            opacity:0,
        }
    };
    const bottomVariants={
        closed:{
            rotate:0,
        },
        opened: {
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        },
    };

    const listVariants={
        closed:{
            x:"100vw",
        },
        opened:{
            x:0,
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2,
            },
        },
    };

    const listItemVariants={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1,
        },
    };
    
    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>
            {/* links */}
            <div className="hidden md:flex gap-4 w-1/3">
                    {links.map((link) => (
                        <NavLink link={link} key={link.title}/>
                    ))}
                </div>
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link href="https://www.instagram.com/haikal.rar" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center just">
                    <span className="text-white mr-1">Muhamad</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.Haikal</span>
                </Link>
            </div>
            {/* social */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/napoleones1" className=" hover:opacity-60">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://discord.gg/QNtSaDeBgR" className=" hover:opacity-60">
                    <Image src="/discord.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/haikal.rar" className=" hover:opacity-60">
                    <Image src="/instagram.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://youtube.com/@napoleones1" className=" hover:opacity-60">
                    <Image src="/youtube.png" alt="" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/muhamadhaikal-me" className=" hover:opacity-60">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>
            </div>
            {/* responsive menu */}
            <div className="md:hidden">
                {/* menu button */}
                <button 
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                    <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>
                {/* menu list */}
                {open && (
                <motion.div 
                    variants={listVariants} 
                    initial="closed" 
                    animate="opened" 
                    className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                >
                    {links.map((link) => (
                        <motion.div variants={listItemVariants} className="" key={link.title}>
                            <Link href={link.url}>{link.title}</Link>
                        </motion.div>
                    ))}
                </motion.div>
                )}
            </div>
        </div>
    );
};

export default Navbar