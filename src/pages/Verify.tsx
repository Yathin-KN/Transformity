import React, { useEffect, useState } from "react";
import Write from "./write"; // Assuming this is the Write component
import EventCompose from "./EventForm"; // Assuming this is the EventCompose component
import SignIn from "./signIn"; // Assuming this is the SignIn component
import useUserStore from '@/store/authStore';
import authorize from "@/apis/POST/authorize"; // Assuming authorizeResponse type

interface VerifyWriteProps {
  type: "write" | "EventCompose";
}

const VerifyWrite: React.FC<VerifyWriteProps> = ({ type }) => {
  const setUser = useUserStore((state) => state.setUser);

  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

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
        setLoading(false); // Set loading to false after authentication check
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
    return type === "write" ? <Write /> : <EventCompose />;
  } else {
    return <SignIn />;
  }
};

export default VerifyWrite;
