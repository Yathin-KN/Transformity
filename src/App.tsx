import LandingPage from "./pages/landingPage";
import Layout from "./Layout";
// const Line = () => {
//   return (
//     <div className="h-screen  border-l-4   ml-4 border-blue-400 border-double border-spacing-10 fixed top-0 bottom-0 z-10"></div>
//   );
// };
const App = () => {
  return (
    <>
      {/* <Line /> */}
      <div className="w-full h-auto">
        <div className="w-full h-full bg-black rounded-md bg-cover filter backdrop-opacity-60">
          <Layout>
            <LandingPage />
          </Layout>
        </div>
      </div>
    </>
  );
};

export default App;
