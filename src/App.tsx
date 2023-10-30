import LandingPage from "./pages/landingPage";
import Layout from "./Layout";
import useModeStore from "./store/mode";
import clsx from "clsx";
// const Line = () => {
//   return (
//     <div className="h-screen  border-l-4   ml-4 border-blue-400 border-double border-spacing-10 fixed top-0 bottom-0 z-10"></div>
//   );
// };
const App = () => {
  const {mode}=useModeStore();
  return (
    <>
      {/* <Line /> */}
      <div className="w-full h-auto">
        <div className={clsx("w-full h-full  rounded-md bg-cover filter backdrop-opacity-60",{
        "bg-white":(mode==='dark'),
        "bg-black":(mode==='light'),
       })}>
          <Layout>
            <LandingPage />
          </Layout>
        </div>
      </div>
    </>
  );
};

export default App;
