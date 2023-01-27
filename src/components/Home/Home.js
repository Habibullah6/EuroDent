import { TabTitle } from '../../hooks/GeneralFunction';
import useFakeData from '../../hooks/useFakeData';
import Banner from '../Banner/Banner';
import DentalShop from '../DentalShop/DentalShop';
import HomeService from '../HomeService/HomeService';


const Home = () => {
    const [services] = useFakeData();
    TabTitle('home page')

    return (
        <div>
          
            <Banner></Banner>
            <div className='p-3'>
                <h1 className='mb-5 text-primary fw-bold'>Services</h1>
                <div className='row'>
                    <div className="col">
                       <div className="row g-5 d-flex justify-content-between align-items-center">
                          {
                            services.map(sv => <HomeService key={sv.name} sv={sv}></HomeService>)
                          }
                       </div>
                    </div>
                </div>
            </div>
            <DentalShop></DentalShop>
            
        </div>
    );
};

export default Home;