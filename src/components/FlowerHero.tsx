import { useEffect, useRef, useState, useContext } from "react";
import NavContext from "../context/NavContext";

const FlowerHero = () => {
  const navContext = useContext(NavContext);
  const red = useRef<HTMLImageElement>(null);
  const white = useRef<HTMLImageElement>(null);
  const purple = useRef<HTMLImageElement>(null);
  const yellow = useRef<HTMLImageElement>(null);
  const index = useRef<number>(-1);
  const refs = [red, white, purple, yellow];
  const smallFlowers: React.RefObject<HTMLImageElement>[] = [useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null)];
  const midFlowers: React.RefObject<HTMLImageElement>[] = [useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null)];
  const colors: string[] = ['#b60218', '#aaa8a8', '#6d50bf', '#cea805'];
  //                          red       white      purple     yellow
  const [currentColor, setCurrentColor] = useState('#b60218'); //red

  useEffect(() => {
    let int: any;
    int = setInterval(() => {
      if (index.current < 3) index.current += 1;
      else index.current = 0;
      refs.forEach((ref, refIndex) => {
        if (refIndex === (index.current === 0 ? 3 : (index.current) - 1)) {
          ref.current?.classList.add('out');
          smallFlowers[refIndex].current?.classList.add('out');
          midFlowers[refIndex].current?.classList.add('out');
        } else {
          smallFlowers[refIndex].current?.classList.add('wait');
          midFlowers[refIndex].current?.classList.add('wait');
          ref.current?.classList.add('wait');
        }
      });
      refs[index.current].current?.classList.remove('out');
      refs[index.current].current?.classList.remove('wait');
      midFlowers[index.current].current?.classList.remove('out');
      midFlowers[index.current].current?.classList.remove('wait');
      smallFlowers[index.current].current?.classList.remove('out');
      smallFlowers[index.current].current?.classList.remove('wait');
      setTimeout(() => {
        if (index.current === 0) {

          refs[3].current?.classList.add('wait');
          refs[3].current?.classList.remove('out');
          smallFlowers[3].current?.classList.add('wait');
          smallFlowers[3].current?.classList.remove('out');
          midFlowers[3].current?.classList.add('wait');
          midFlowers[3].current?.classList.remove('out');
        }
        else {
          refs[(index.current) - 1].current?.classList.add('wait');
          refs[(index.current) - 1].current?.classList.remove('out');
          smallFlowers[(index.current) - 1].current?.classList.add('wait');
          smallFlowers[(index.current) - 1].current?.classList.remove('out');
          midFlowers[(index.current) - 1].current?.classList.add('wait');
          midFlowers[(index.current) - 1].current?.classList.remove('out');

        }
      }, 1300);
      setCurrentColor(colors[index.current]);

    }, 6000);
    return () => clearInterval(int);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="FlowerHero dposr doverh w-100 dposr doverh">
      <img src="./images/bg.jpg" alt="..." className="dposa dt0 dl0 h-100 w-100 dz-1" />
      <div className="container h-100">
        <div className="row h-100 dalc t3 dposr">
          <div className="col-11 col-md-6">
            <h1 className="fw-bold">
              Sun Flower
            </h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde ullam temporibus placeat voluptas maiores reprehenderit libero explicabo laudantium ex repellat esse, est distinctio recusandae dolorem?
            </h5>
            <div className="py-2"></div>
            <button
              onClick={navContext.show}
              className="dbtn1 px-5 tf btn bg1"
              style={{ backgroundColor: currentColor, color: "#fff" }}
            >Let's Go</button>
          </div>
          <div className="d-none d-md-block col-11 col-md-6 dflex p-3 djcc dalc dposr h-100">
            <div className="mid-flower-container h-100 w-100 dposa dl0 dt0">
              <img src="./images/red.png" ref={midFlowers[0]} alt="" className="dposa dtransform-center" />
              <img src="./images/white.png" ref={midFlowers[1]} alt="" className="dposa wait dtransform-center" />
              <img src="./images/purple.png" ref={midFlowers[2]} alt="" className="dposa wait dtransform-center" />
              <img src="./images/yellow.png" ref={midFlowers[3]} alt="" className="dposa wait dtransform-center" />
            </div>
            <div className="flower-container h-100 w-100 dposa dz1 dl0 dt0">
              <img src="./images/red.png" ref={red} alt="" className="dposa dtransform-center" />
              <img src="./images/white.png" ref={white} alt="" className="dposa wait dtransform-center" />
              <img src="./images/purple.png" ref={purple} alt="" className="dposa wait dtransform-center" />
              <img src="./images/yellow.png" ref={yellow} alt="" className="dposa wait dtransform-center" />
            </div>
            <div className="small-flower-container dz2 h-100 w-100 dposa dl0 dt0">
              <img src="./images/red.png" ref={smallFlowers[0]} alt="" className="dposa dtransform-center" />
              <img src="./images/white.png" ref={smallFlowers[1]} alt="" className="dposa wait dtransform-center" />
              <img src="./images/purple.png" ref={smallFlowers[2]} alt="" className="dposa wait dtransform-center" />
              <img src="./images/yellow.png" ref={smallFlowers[3]} alt="" className="dposa wait dtransform-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowerHero;