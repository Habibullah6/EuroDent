import { TabTitle } from "../../hooks/GeneralFunction";
import aboutImg from "../../images/banner2.png";
const About = () => {
  TabTitle("about page");
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-lg-4">
              <img src={aboutImg} alt="" className="img-fluid w-100 " />
            </div>
            <div className="col-lg-8 shadow-lg rounded p-3">
              <p style={{ textAlign: "justify" }}>
                Euro Dental Care is the best & leading dental treatment provider
                in Gulshan, Dhaka, Bangladesh, with a specialized, Dental
                implant, Endodontic, Pediatric operative, oral surgery, and
                Orthodontic Center. The Living Legend in Bangladesh dental
                practice Prof. Dr. xavier establish Euro Dental Care in 1977.
                From that time to till now, Euro Dental Care is a center of
                excellence and house of trust in the section of dental practice
                in Bangladesh. Our philosophy is simple. We provide excellence
                in dental care, with a focus on patient comfort, satisfaction,
                and dental health, in line with our company’s core value,
                ‘Creating Happy Smiles’. Here at Dental Aspects, YOU are the
                number one priority. We have encompassed the latest tools and
                technology to give you the best possible treatment in a modern,
                friendly environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
