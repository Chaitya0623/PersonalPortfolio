import { FaDownload } from 'react-icons/fa';
import { useState, useEffect} from 'react';
import header from '../../assets/img/header.jpg';
import GlowingImage from "./glowingImg"

import resume from "../../assets/Chaitya_Resume.pdf"

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Programmer", "ML Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(150 - Math.random()*100)
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();    
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedtext = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1)

        setText(updatedtext);
        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if (!isDeleting && updatedtext === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedtext === ''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(150);
        }
    }

    return (
        <section className='banner' id='home'>
            <div className='about'>
                <div className="about-text">
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>Hi, I'm Chaitya Shah,</h1>
                    <h1 className='wrap'>~ {text}</h1>
                    <p>Being a fast-learner and a hardworking student, I’m passionate about Computer Engineering. I am an
                        avid reader and I also love playing sports. Travelling to new places and living in the nature is my forte!</p>
                    <a href={resume} target='_blank'><button>Resume <FaDownload/></button></a>
                </div>
                <div id="home-img" data-aos="zoom-in" data-aos-duration="1500">
                    {/* <img src={header} alt='Header Img' onClick={GlowingImage(header)}/> */}
                    <GlowingImage src={header} className='glowingImg'/>
                </div>
            </div>
        </section>
    )
}