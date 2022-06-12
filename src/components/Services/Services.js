import useFakeData from "../../hooks/useFakeData";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
    const [services] = useFakeData();
    return (
        <div className="p-5">
            <div className="row">
                <div className="col">
                    <div className="row g-4 d-flex justify-content-between align-items-center">
                        {
                            services.map(sv => <ServiceCard key={sv.name} service={sv}></ServiceCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;