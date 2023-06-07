import '../assets/css/App.css';
import ServicesData from '../data/ServicesData';
import ServiceCard from './ServiceCard';
function Services() {
  return (
    <div className='bg1 py-5'>
      <div className="container">
        <div className="row t3">
          {
            ServicesData.map((service, index) => (
              <ServiceCard title={service.title} body={service.body} icon={service.icon} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services
