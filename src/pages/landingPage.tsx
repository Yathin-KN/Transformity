import favicon from "./favicon.png";
// import { Parallax , ParallaxLayer} from "@react-spring/parallax"

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex w-full justify-between">
          <div className="text-7xl text-gray-800 font-chivo font-bold">
            Transformity
          </div>
          <div>
            <img src={favicon}></img>
          </div>
        </div>
        <div className="w-full h-screen bg-white"></div>
      </div>
    </>
  );
};

export default LandingPage;
