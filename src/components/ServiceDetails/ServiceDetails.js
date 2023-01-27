
import { NavLink, useParams } from "react-router-dom";
import { TabTitle } from "../../hooks/GeneralFunction";
import useFakeData from "../../hooks/useFakeData";


const ServiceDetails = () => {
  TabTitle('service details page')

  const { details } = useParams();
  const [services] = useFakeData();
  const selectedService = services.find((service) => service.name === details);

  return (
    <div className="p-5">
      <div className="card w-50 text-start mx-auto">
        <img src={selectedService?.img} className="card-img-top " alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{selectedService?.name}</h5>
            <p className="card-text">{selectedService?.description}</p>
            <NavLink to='/home'> <button className="btn btn-primary">Go Home</button> </NavLink>
          </div>
      </div>
    </div>
  );
};

export default ServiceDetails;