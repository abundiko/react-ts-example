import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUs = () => {
  return (
    <section className="py-5 dposr t3">
      <img
        alt="..."
        src="./images/bg2.png"
        className="h-100 w-100 dposa dl0 dt0 dz-1"
      />
      <div className="h-100 w-100 dposa dl0 dt0 dz1" />
      <div className="py-5 dz2 w-100 dhfit dl0 dt0">
        <div className="container">
          <div className="row">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <div className="col-12">
              <div className="row djcsa">
                <WhyChooseUsCard
                  title="Brabus 2020"
                  subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae animi dolorum omnis autem, illo est facilis voluptate suscipit ab hic consectetur quod tenetur vero ipsa modi maiores earum odio!"
                  img="one.jfif"
                  reversed={false}
                />
                <WhyChooseUsCard
                  title="Brabus 2021 transformed"
                  subTitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae animi dolorum omnis autem, illo est facilis voluptate suscipit ab hic consectetur quod tenetur vero ipsa modi maiores earum odio!"
                  img="hero-img.png"
                  reversed={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
