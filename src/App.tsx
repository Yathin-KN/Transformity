import LandingPage from "./pages/landingPage";
import Layout from "./Layout";
const App = () => {
  return (
    <>
    
    <div className="w-full h-auto">
      <div className="w-full h-full bg-black rounded-md bg-cover filter backdrop-opacity-60">
      <Layout>
       <LandingPage/>
    </Layout>
      </div>
      
    </div>
    </>
  )
}

export default App;

