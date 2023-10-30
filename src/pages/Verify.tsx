import React, { useEffect, useState } from "react";
import Write from "./write"; 
import EventCompose from "./EventForm"; 
import SignIn from "./signIn"; 
import useUserStore from '@/store/authStore';
import authorize from "@/apis/POST/authorize"; 
import ComposePodcast from "./ComposePodcast";
interface VerifyWriteProps {
  type: "write" | "EventCompose" | "podcast";
}

const VerifyWrite: React.FC<VerifyWriteProps> = ({ type }) => {
  const setUser = useUserStore((state) => state.setUser);

  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response: any = await authorize();
        console.log(response)

        if (response) {
          setAuthenticated(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
      }
    };

    checkAuthentication();
  }, [setUser]);

  if (loading) {
    return <div className="font-white flex w-screen h-screen text-center items-center bg-black justify-center">
      <p className="text-white text-2xl font-saira">Authentication in Progress...</p>
    </div>;
  }

  if (authenticated) {
    if (type === "write") {
      return <Write />;
    } else if (type === "EventCompose") {
      return <EventCompose />;
    } else if (type === "podcast") {
      return <ComposePodcast/>;
    }
  } else {
    return <SignIn />;
  }
};

export default VerifyWrite;
