"use client";

import { BsFillMoonStarsFill } from "react-icons/bs";
import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import src from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <main className={darkMode ? "dark bg-white  " : "bg-white  "}>
            <section className="w-full min-h-screen px-10 md:px-20 lg:px-40 dark:bg-gray-950">
                <nav className="py-10 flex justify-between ">
                    <a
                        href="https://adnaneqassiri.com"
                        className="text-xl dark:text-white"
                    >
                        FIEXX56
                    </a>
                    <ul className="flex items-center">
                        <li>
                            <BsFillMoonStarsFill
                                onClick={() => setDarkMode(!darkMode)}
                                className="cursor-pointer text-2xl dark:text-white"
                            />
                        </li>
                        <li>
                            <a
                                className="bg-gradient-to-r from-cyan-500 to-teal-500  text-white px-4 py-2 ml-8 rounded-md"
                                href="#"
                            >
                                Resume
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="text-center p-10">
                    <h2 className="text-4xl text-teal-600 font-semibold py-2 md:text-6xl">
                        Adnane Q.
                    </h2>
                    <h3 className="py-2 text-2xl md:text-3xl dark:text-white">
                        Developer and designer.{" "}
                    </h3>
                    <p className="text-sm text-gray-600 md:text-md max-w-xl mx-auto dark:text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Eos facilis optio necessitatibus? Modi pariatur,
                        amet numquam quisquam ut voluptas. Ea, deleniti esse
                        quos nihil quaerat sunt sint quia ut commodi?
                    </p>
                </div>
                <div className="text-3xl flex justify-center gap-6 text-gray-900 dark:text-gray-400">
                    <AiFillLinkedin />
                    <AiFillTwitterCircle />
                    <AiFillYoutube />
                </div>
                <div className="mx-auto my-10 flex justify-center relative bg-gradient-to-b overflow-hidden from-teal-600 to-white rounded-full w-64 h-64 items-center md:w-80 md:h-80">
                    <Image
                        alt="any"
                        src={src}
                        layout="fill"
                        objectFit="cover"
                    ></Image>
                </div>
            </section>
            <section className="py-10 px-10 md:px-20 lg:px-40 dark:bg-gray-950">
                <div>
                    <h3 className="text-2xl py-2 font-medium dark:text-white">
                        Services i offer
                    </h3>
                    <p className="text-md leading-6 text-gray-800 dark:text-gray-400">
                        since the beginning of my journey as a freelancer and
                        developer, i have done remote work for
                        <span className="text-teal-500"> agencies </span>
                        consulted for{" "}
                        <span className="text-teal-500">startups </span>
                        and collaborated with talanted people to create digital
                        products for both business and consumer use.
                    </p>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
                        I offer from a wide range of services, including brand
                        design, programming and teaching.
                    </p>
                </div>
                <div className="md:flex gap-10">
                    <div className="text-center shadow-lg rounded-md mt-5 p-10 flex-1 dark:bg-white">
                        <Image
                            alt=""
                            className="m-auto"
                            src={design}
                            width={100}
                            height={100}
                        />
                        <h3 className="text-lg font-medium pt-8 pb-2">
                            Beautiful designs.
                        </h3>
                        <p className="py-3">
                            Creating elegant designs suited for your needs
                        </p>
                        <h4 className="py-3 text-teal-600">
                            Design tools i use{" "}
                        </h4>
                        <p className="text-sm text-gray-800 py-1">Photoshop</p>
                        <p className="text-sm text-gray-800 py-1">
                            Illustrator
                        </p>
                        <p className="text-sm text-gray-800 py-1">Figma</p>
                    </div>
                    <div className="text-center shadow-lg rounded-md mt-5 p-10 flex-1 dark:bg-white">
                        <Image
                            alt="any"
                            className="m-auto"
                            src={code}
                            width={100}
                            height={100}
                        />
                        <h3 className="text-lg font-medium pt-8 pb-2">
                            Code your dream project.
                        </h3>
                        <p className="py-3">
                            Do you have an idea for your next great website? Let
                            s make it a reality.
                        </p>
                        <h4 className="py-3 text-teal-600">
                            Design tools i use{" "}
                        </h4>
                        <p className="text-sm text-gray-800 py-1">Photoshop</p>
                        <p className="text-sm text-gray-800 py-1">
                            Illustrator
                        </p>
                        <p className="text-sm text-gray-800 py-1">Figma</p>
                    </div>
                    <div className="text-center shadow-lg rounded-md mt-5 p-10 flex-1 dark:bg-white">
                        <Image
                            alt=""
                            className="m-auto"
                            src={consulting}
                            width={100}
                            height={100}
                        />
                        <h3 className="text-lg font-medium pt-8 pb-2">
                            Consulting.
                        </h3>
                        <p className="py-3">
                            Are you interested in feedback for your current
                            project? I can give you tips and tricks to level it
                            up.
                        </p>
                        <h4 className="py-3 text-teal-600">
                            Design tools i use{" "}
                        </h4>
                        <p className="text-sm text-gray-800 py-1">Photoshop</p>
                        <p className="text-sm text-gray-800 py-1">
                            Illustrator
                        </p>
                        <p className="text-sm text-gray-800 py-1">Figma</p>
                    </div>
                </div>
            </section>
            <section className="px-10 md:px-20 lg:px-40 dark:bg-gray-950">
                <div>
                    <h3 className="text-2xl py-2 font-medium dark:text-white">
                        Portfolio
                    </h3>
                    <p className="text-md leading-6 text-gray-800 dark:text-gray-400">
                        since the beginning of my journey as a freelancer and
                        developer, i have done remote work for
                        <span className="text-teal-500"> agencies </span>
                        consulted for{" "}
                        <span className="text-teal-500">startups </span>
                        and collaborated with talanted people to create digital
                        products for both business and consumer use.
                    </p>
                    <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
                        I offer from a wide range of services, including brand
                        design, programming and teaching.
                    </p>
                </div>
                <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap mt-10">
                    <div className="basis-1/3 flex-1">
                        <Image
                            alt="any"
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web1}
                        />
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            alt="any"
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web2}
                        />
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            alt="any"
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web3}
                        />
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            alt="any"
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web4}
                        />
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            alt="any"
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web5}
                        />
                    </div>
                    <div className="basis-1/3 flex-1">
                        <Image
                            alt="any"
                            className="rounded-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            src={web6}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
