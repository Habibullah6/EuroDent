import { MdDoubleArrow } from "react-icons/md";
import { TbDental } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import './HomeService.css';
const HomeService = (props) => {
    const { sv } = props;
    const navigate = useNavigate()
    const handleDetails = (details) => {
        navigate(`/service/${details}`);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 text-primary ">
            <div className="card rounded shadow-lg service-card">
                <img src={sv.img} className='card-img-top img-fluid w-100' alt="..."/>
                    <div className="card-body text-start">
                        <h5 className="card-title"> <TbDental/> {sv.name}</h5>
                        <p className="card-text">{sv.description}</p>
                        <button onClick={()=> handleDetails(sv.name)} className="btn btn-primary">Details <MdDoubleArrow/> </button>
                    </div>
            </div>
        </div>
    );
};

export default HomeService;