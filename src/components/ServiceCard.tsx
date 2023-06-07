import { ServiceDataType } from "../types"

const ServiceCard = ({ title, body, icon }: ServiceDataType) => {
  return (
    <div className="col-11 col-md-4 p-3">
      <h1 className={`fab ${icon}`}> </h1>
      <h4 className="fw-bold">{title}</h4>
      <p className="dopa8">{body}</p>
    </div>
  )
}

export default ServiceCard
