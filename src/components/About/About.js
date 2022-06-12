import aboutImg from '../../images/banner2.png';
const About = () => {
    return (
        <div className='container p-5'>
            <div className="row">
                <div className="col">
                    <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-lg-4">
                           <img src={aboutImg} alt="" className='img-fluid w-100 ' />
                        </div>
                        <div className="col-lg-8 text-white bg-secondary rounded p-3">
                            <p style={{textAlign: 'justify'}}>
                                Euro Dental Care is the best & leading dental treatment provider in Gulshan, Dhaka, Bangladesh, with a specialized, Dental implant, Endodontic, Pediatric operative, oral surgery, and Orthodontic Center. The Living Legend in Bangladesh dental practice Prof. Dr. xavier establish Euro Dental Care in 1977. From that time to till now, Euro Dental Care is a center of excellence and house of trust in the section of dental practice in Bangladesh. Our philosophy is simple. We provide excellence in dental care, with a focus on patient comfort, satisfaction, and dental health, in line with our company’s core value, ‘Creating Happy Smiles’. Here at Dental Aspects, YOU are the number one priority.

                                We have encompassed the latest tools and technology to give you the best possible treatment in a modern, friendly environment. Most of our new patients join our practice through the recommendation of our existing happy and extremely satisfied patients. This speaks volumes for the service we provide. We pride ourselves on having a friendly, helpful, and dedicated team We are all trained to the highest standards and are familiar with all the latest dental techniques and procedures. We will provide the best care possible and look after you through every stage of your Euro Dental Care journey. Nervous patients handled with care. Our team of Dental Professionals selected from among the best after a stringent quality check for their clinical skills and expertise. Our mission is to provide all our patients excellence in Dental Care with the highest ethical standards in a friendly and professional environment.

                                Euro Dental Care is proud to announce our new state-of-the-art facility!  Our new clinic is designed and constructed to the highest industry standards with the latest technology and progressive design; all to make your visit safe, comfortable, and affordable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;