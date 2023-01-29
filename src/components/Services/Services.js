import { TabTitle } from "../../hooks/GeneralFunction";
import useFakeData from "../../hooks/useFakeData";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    const [services] = useFakeData();
    TabTitle('service page')
    return (
        <div className="p-3">
            <div className="row">
                <div className="col">
                    <div className="row g-4 d-flex justify-content-between align-items-center">
                        {
                            services.map((sv, i) => <ServiceCard key={i} service={sv}></ServiceCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;