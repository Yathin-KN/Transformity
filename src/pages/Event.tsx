import getEventById from "@/apis/POST/getEventById";
import { MainNav } from "@/components/custom/main_nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Event } from "@/lib/types";
import { Calendar, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Footer from "@/components/custom/footer";
import clsx from "clsx";
import useModeStore from "@/store/mode";
const EventComponent = () => {
  const event_info = useParams();
  const [event, setEvent] = useState<Event>();
  const { event_id } = event_info;
  const fetch = async () => {
    try {
      const response = await getEventById(event_id || "");
      console.log(response);
      if (response) setEvent(response);
    } catch (error) {
      toast.error("Event couldn't be found", {
        delay: 1500,
      });
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  const {mode}=useModeStore();
  return (
    <>
     <div className={clsx({
       "bg-black":(mode=="dark"),
       "bg-white":(mode=="light")
     })}>
     <MainNav />
     </div>
      <div className={clsx("w-full flex flex-col justify-center p-4 items-center h-auto pb-10 ",{
       "bg-black":(mode=="dark"),
       "bg-white":(mode=="light")
     })}>
        <div className="w-full md:w-[80%]">
          <h1 className={clsx(" text-3xl md:text-4xl font-bold py-3 font-saira tracking-wider",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}>{event?.title}</h1>
          <Separator className="border border-b-white my-4" orientation="horizontal"/>
          <div className="w-full">
            <img
              src={event?.photo}
              className="mx-auto object-fit landscape:h-[50vh] potrait:w-full"
            ></img>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          <p className="col-span-1 justify-center flex flex-col py-6">
                  <div className="flex items-center gap-2">
                    <Calendar className={clsx("w-6 h-6",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })} />
                    <div className="my-4 flex flex-col justify-normal text-white font-saira">
                      <p className={clsx(" font-saira text-xl",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}>Event dates :</p>
                      <p className={clsx("text-md inline-flex justify-center items-center  font-saira",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}>Start Date : <span className={clsx("text-sm  font-saira mx-3",{
          "text-white":(mode==="dark"),
           "text-black":(mode==="light"),
      })}>{event?.startDate.toString().substring(0,10)}</span> to</p>
                      <p className={clsx("text-md inline-flex justify-normal items-center  font-saira",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}>End Date : <span className={clsx("text-sm  font-saira mx-3",{
          "text-white":(mode==="dark"),
           "text-black":(mode==="light"),
      })}>{event?.endDate.toString().substring(0,10)}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className={clsx("w-6 h-6 ",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })} />
                    <div>
                      <p className={clsx("  font-saira text-xl",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}>Location :</p>
                      <p className={clsx("font-saira uppercase tracking-wider text-xl",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}>{event?.eventLocation}</p>
                    </div>
                  </div>
              </p>
              <p className={clsx("col-span-3 py-6 font-saira tracking-wide text-xl",{
            "text-white":(mode==="dark"),
             "text-black":(mode==="light"),
        })}>
                {event?.eventDescription}</p>
              
            </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default EventComponent;
