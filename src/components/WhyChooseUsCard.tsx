import { WhyChooseUsCardPropType } from "../types";

const WhyChooseUsCard = ({
  reversed,
  title,
  subTitle,
  img
}: WhyChooseUsCardPropType) => {
  return (
    <div
      className={`my-2 col-11 col-sm-6 col-md-12 dalc dflex flex-wrap djcsa p-3 border dbor10 ${reversed
        ? " flex-md-row-reverse"
        : ""}`}
    >
      <img
        src={`./images/${img}`}
        alt="..."
        className="col-12 col-md-5 dbor10 doverh p-0 mb-2 mb-md-0"
      />
      <div className="col-12 col-md-6">
        <h4>
          {title}
        </h4>
        <p className="dopa8">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
