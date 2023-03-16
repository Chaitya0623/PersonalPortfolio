import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id="skills">
            <div>
                <div className="skill-box" data-aos="fade-up" data-aos-duration="1500">
                    <h1>Skills</h1>
                    <p>Check My Skills Below!</p>
                    <Carousel responsive={responsive} infinite={true} autoPlay={true} autoplaySpeed={6000} className='skill-slider'>
                        <div className="item">
                            <div className="skill-card">
                                <h1>90%</h1>
                            </div>
                            <h5>HTML</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>90%</h1>
                            </div>
                            <h5>CSS</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>85%</h1>
                            </div>
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>80%</h1>
                            </div>
                            <h5>React</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>80%</h1>
                            </div>
                            <h5>Django</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>70%</h1>
                            </div>
                            <h5>Robot Operating System</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>90%</h1>
                            </div>
                            <h5>C</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>85%</h1>
                            </div>
                            <h5>C++</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>70%</h1>
                            </div>
                            <h5>Java</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>90%</h1>
                            </div>
                            <h5>Python</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>80%</h1>
                            </div>
                            <h5>Machine Learning</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>70%</h1>
                            </div>
                            <h5>CV</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>70%</h1>
                            </div>
                            <h5>NLP</h5>
                        </div>
                        <div className="item">
                            <div className="skill-card">
                                <h1>70%</h1>
                            </div>
                            <h5>MySQL</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}