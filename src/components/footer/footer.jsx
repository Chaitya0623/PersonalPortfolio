import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <section className="footer" id="footer">
            <div className="footer-box">
                <div className="footer-icon">
                    <a href="https://www.linkedin.com/in/chaitya-shah-381b5421b" data-aos="fade-up-right" data-aos-duration="1000"><FaLinkedin/></a>
                     <a href="https://github.com/Chaitya0623" data-aos="fade-up" data-aos-duration="1000"><FaGithub/></a>
                     <a href="https://www.instagram.com/chaitya0623" data-aos="fade-up-left" data-aos-duration="1000"><FaInstagram/></a>
                </div>
                <p>I would love to Connect ;)</p>
            </div>
        </section>
    )
}