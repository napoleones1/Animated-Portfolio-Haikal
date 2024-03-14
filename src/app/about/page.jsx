"use client"
import Brain from "@/components/brain";
import {motion, useInView, useScroll} from "framer-motion"
import { useRef } from "react";

const AboutPage = () => {

    const containerRef = useRef()

    const {scrollYProgress} =useScroll({container:containerRef})

    const skillRef = useRef()
    const isSkillRefInView = useInView(skillRef, {margin:"-100px"})

    const experienceRef = useRef()
    const isExperienceRefInView = useInView(experienceRef, {margin:"-100px"})
    
    return (
            <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
            >
            {/* container */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* text container */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 lg:1/2">
                    {/* biography container */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* Biography text */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        {/* biography desc */}
                        <p className="text-lg">
                        Hai, Saya Muhamad Haikal!, Seorang mahasiswa bersemangat yang sedang mengejar S1 untuk program studi Tekink Informatika di Universitas Pamulang. Meskipun masih dalam tahap pendidikan, saya memiliki gairah besar dalam Web Programing serta Game Developer.
                        Saya memanfaatkan waktu di kampus untuk terus mengembangkan keterampilan saya dalam Java Script serta HTML CSS. Meskipun belum berada di dunia profesional sepenuhnya, saya telah berhasil bekerja pada beberapa proyek yang memungkinkan saya menerapkan pengetahuan teoritis saya dalam praktik. Saya percaya bahwa kombinasi antara pendidikan formal dan pengalaman praktis adalah kunci kesuksesan di masa depan.
                        Di samping kehidupan akademis, saya juga mengejar minat pribadi saya, seperti bermain Game. Saya sangat antusias untuk terus belajar dan bersiap-siap untuk memasuki dunia profesional setelah menyelesaikan studi.
                        Terima kasih telah mengunjungi profil saya, dan saya berharap dapat berkolaborasi dan belajar bersama di masa depan!
                        </p>
                        {/* biography quote */}
                        <span className="italic">
                        Programming isnt merely a skill; its a gateway to boundless creativity.
                        </span>
                        {/* biography sign */}
                        <div className="self-end">
                            <svg 
                                version="1.0" 
                                xmlns="http://www.w3.org/2000/svg"
                                width="185" 
                                height="77" 
                                viewBox="0 0 300.000000 240.000000">
                                <g 
                                transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)"
                                fill="#000000" 
                                strokeWidth="2"
                                stroke="black">
                                <path d="M2535 1924 c-234 -321 -348 -468 -420 -540 -78 -78 -86 -83 -305 -191 -230 -114 -380 -184 -380 -179 0 9 341 227 400 256 140 70 266 150 236 150 -13 0 -112 -53 -209 -112 -122 -75 -222 -121 -412 -190 -189 -70 -405 -141 -410 -136 -2 2 82 93 187 201 105 109 188 201 184 204 -3 3 -25 -1 -48 -10 -23 -9 -42 -16 -44 -14 -1 1 86 103 192 227 107 124 211 244 230 267 70 83 15 94 -121 26 -87 -44 -167 -100 -315 -223 -219 -183 -644 -600 -627 -616 2 -3 40 34 83 82 163 179 512 497 713 649 82 63 223 135 262 135 l30 0 -23 -28 c-13 -16 -121 -143 -241 -283 -164 -192 -235 -267 -289 -306 -113 -82 -292 -238 -418 -363 -112 -111 -410 -455 -410 -473 0 -25 220 140 357 268 108 101 280 288 445 485 68 82 109 122 141 138 24 12 48 22 53 22 5 0 -78 -88 -183 -197 -106 -109 -193 -201 -193 -205 0 -5 7 -8 15 -8 25 0 391 124 523 178 67 27 121 48 120 47 -2 -2 -57 -39 -123 -84 -232 -156 -224 -164 41 -37 110 52 191 90 181 83 -11 -7 -67 -43 -125 -81 -121 -77 -117 -74 -110 -81 5 -5 226 68 260 86 10 5 18 8 18 5 0 -4 -439 -392 -484 -428 -11 -9 -19 -19 -16 -21 3 -3 86 44 185 104 99 59 181 106 184 104 5 -6 76 56 76 67 0 4 43 58 95 119 63 74 106 117 130 127 19 8 89 39 155 69 167 77 212 96 200 85 -23 -22 -203 -147 -375 -261 -187 -125 -221 -149 -187 -138 27 10 367 239 497 335 137 101 125 91 118 98 -7 6 -135 -47 -302 -125 -59 -28 -110 -51 -112 -51 -3 0 24 33 58 73 94 107 405 499 474 597 72 101 124 179 124 186 0 17 -24 -9 -85 -92z m-471 -627 c-16 -18 -51 -58 -79 -91 -43 -49 -89 -86 -109 -86 -6 0 206 209 213 210 1 0 -10 -15 -25 -33z m-845 -24 c-14 -16 -81 -93 -150 -173 -215 -252 -444 -471 -607 -581 -40 -28 -44 -29 -26 -8 11 13 61 71 109 129 160 189 248 281 388 406 132 118 296 254 306 254 3 0 -7 -12 -20 -27z m721 -69 c-36 -36 -77 -74 -92 -85 -25 -18 -288 -122 -288 -114 0 8 426 265 440 265 2 0 -25 -30 -60 -66z m-86 -147 c-27 -29 -71 -81 -99 -116 -42 -52 -73 -76 -185 -143 -74 -45 -145 -88 -157 -96 -45 -29 -21 -3 70 74 50 43 153 133 227 199 121 108 177 149 189 139 2 -2 -18 -27 -45 -57z"/><path d="M1544 689 c-164 -195 -183 -221 -184 -244 0 -29 11 -65 20 -65 5 0 3 16 -2 35 -12 39 -5 51 102 175 113 131 192 231 187 236 -2 3 -58 -59 -123 -137z"/>
                                </g>
                            </svg>
                        </div>
                        {/* biography scroll */}
                        <motion.svg 
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{repeat:Infinity, duration:3, ease:"easeInOut"}}
                            width={50}
                            height={50} 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                    </div>
                    {/* skills container */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* Skills text */}
                        <motion.h1 
                            initial={{x:"-360px"}} 
                            animate={isSkillRefInView ? {x:0} : {}} 
                            transition={{delay:0.2}}
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>
                        {/* skills list */}
                        <motion.div 
                            initial={{x:"-360px"}} 
                            animate={isSkillRefInView ? {x:0} : {}}
                            className=" flex gap-4 flex-wrap"
                        >
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                JavaScript
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                CSS
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                HTML
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Tailwind CSS
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Node.js
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Next.js
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                Lua
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                C++
                            </div>
                            <div className=" rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                                React.js
                            </div>
                        </motion.div>
                        {/* skills scrol svg */}
                        <motion.svg 
                        initial={{ opacity: 0.2, y: 0 }}
                        animate={{ opacity: 1, y: "10px" }}
                        transition={{repeat:Infinity, duration:3, ease:"easeInOut"}}
                            width={50}
                            height={50} 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                    </div>
                    {/* experience container */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        {/* experience text */}
                        <motion.h1 
                            initial={{x:"-300px"}}
                            animate={isExperienceRefInView ? {x: "0"} : {}}
                            transition={{delay: 0.2}}
                            className="font-bold text-2xl"
                        >
                            EXPERIENCE
                        </motion.h1>
                        {/* experience list */}
                        <motion.div 
                            initial={{x:"-300px"}}
                            animate={isExperienceRefInView ? {x: "0"} : {}}
                            className=""
                        >
                            {/* Experience list items */}
                            <div className=" flex justify-between h-40">
                                {/* left */}
                                <div className="w-1/3 ">
                                    {/* job title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Coming Soon....
                                    </div>
                                    {/* job desc */}
                                    <div className="p-3 text-sm italic">
                                        Hopefully my job. much better than the previous position!
                                    </div>
                                    {/* job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">Present</div>
                                    {/* job company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Google</div>
                                </div>
                                {/* center */}
                                <div className="w-1/6">
                                    {/* line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* line circle */}
                                        <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className="w-1/3 "></div>
                            </div>
                            {/* Experience list items */}
                            <div className=" flex justify-between h-40">
                                {/* left */}
                                <div className="w-1/3 ">

                                </div>
                                {/* center */}
                                <div className="w-1/6">
                                    {/* line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* line circle */}
                                        <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className="w-1/3 ">
                                    {/* job title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Coming Soon....
                                    </div>
                                    {/* job desc */}
                                    <div className="p-3 text-sm italic">
                                        Hopefully my job. much better than the previous position!
                                    </div>
                                    {/* job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">Present</div>
                                    {/* job company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Google</div>
                                </div>
                            </div>
                            {/* Experience list items */}
                            <div className=" flex justify-between h-40">
                                {/* left */}
                                <div className="w-1/3 ">
                                    {/* job title */}
                                    <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                                        Coming Soon....
                                    </div>
                                    {/* job desc */}
                                    <div className="p-3 text-sm italic">
                                        Hopefully my job. much better than the previous position!
                                    </div>
                                    {/* job date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">Present</div>
                                    {/* job company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Google</div>
                                </div>
                                {/* center */}
                                <div className="w-1/6">
                                    {/* line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* line circle */}
                                        <div className=" absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* right */}
                                <div className="w-1/3 "></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                {/* svg container */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30 lg:1/2">
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    );
};

export default AboutPage