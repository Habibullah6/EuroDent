import { MdDoubleArrow } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const ServiceCard = (props) => {


    
    const { service } = props;
    
    const navigate = useNavigate()
    const handleDetails = (details) => {
        navigate(`/service/${details}`);
    }
  


    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="card shadow-lg border-5" >
                <img className="card-img-top w-100 img-fluid" src={service.img} alt=""/>
                    <div className="card-body border text-start text-primary">
                        <h4> <TbDental/> {service.name}</h4>
                        <p className="card-text">{service.description}</p>
                        
                        
                        <button onClick={ ()=> handleDetails(service.name)} className="btn btn-primary">Details <MdDoubleArrow/> </button>
                        
                    </div>
            </div>
        </div>
    );
};

export default ServiceCard;