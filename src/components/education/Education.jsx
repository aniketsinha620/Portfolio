import React from 'react'
import "./Education.css"
import ScrollAnimation from "react-animate-on-scroll";
import { ContactWrapper } from '../About/AboutElements';

const Education = () => {
    return (
        <div class="container">
            <ContactWrapper id="education">
                <main class="row">

                    <section class="col">

                        <header class="SectionTitle">
                            <h2>EXPERIENCE</h2>
                        </header>

                        <div class="contents">

                            <ScrollAnimation animateIn="fadeInLeft" >
                                <div class="box">
                                    <h4>March 04, 2024 - July 20, 2024</h4>
                                    <h3>Full-Stack Developer (BIPOLAR FACTORY)</h3>
                                    <p>Developed and maintained web applications using React, Node.js, and Docker. Implemented features such as virtual browser integration and file transfer solutions, enhancing functionality and user experience.</p>
                                </div>

                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInLeft" >
                                <div class="box">
                                    <h4>June 01, 2023 - July 02, 2023</h4>
                                    <h3>Frontend Developer (OASIS INFOBYTE)</h3>
                                    <p>Contributed to the development of user interfaces for web applications, utilizing HTML, CSS, and JavaScript. Collaborated with teams to implement responsive designs and enhance user experience.</p>
                                </div>

                            </ScrollAnimation>

                        </div>
                    </section>



                    <section class="col">

                        <header class="SectionTitle">
                            <h2>EDUCATION</h2>
                        </header>

                        <div class="contents">
                            <ScrollAnimation animateIn="fadeInLeft" >
                                <div class="box">
                                    <h4>2021-2025</h4>
                                    <h3>BTech  (BIT SINDRI, Dhanbad)</h3>
                                    <p>Gained comprehensive engineering knowledge through rigorous coursework and projects. Engaged in coding competitions, technical seminars, and internships to apply theoretical concepts to real-world challenges.</p>


                                </div>
                            </ScrollAnimation> <ScrollAnimation animateIn="fadeInLeft" >
                                <div class="box">
                                    <h4>2018 - 2020</h4>
                                    <h3>Intermediate (DAV PUBLIC SCHOOL)</h3>
                                    <p>Completed Intermediate studies with a strong foundation in science and mathematics. Excelled in academics and actively participated in science fairs and extracurricular activities, fostering a well-rounded education.</p>

                                </div>
                            </ScrollAnimation> <ScrollAnimation animateIn="fadeInLeft" >
                                <div class="box">
                                    <h4>2018 - 2022</h4>
                                    <h3>High School Degree</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </ScrollAnimation>

                        </div>
                    </section>






                </main>
            </ContactWrapper>
        </div>
    )
}

export default Education
