import useFakeData from '../../hooks/useFakeData';
import Banner from '../Banner/Banner';
import DentalShop from '../DentalShop/DentalShop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeService from '../HomeService/HomeService';


const Home = () => {
    const {services} = useFakeData();
    

    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='my-4 container'>
                <h1 className='mb-4 text-primary fw-bold'>Services</h1>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;