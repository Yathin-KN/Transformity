import getEventById from "@/apis/POST/getEventById";
import { MainNav } from "@/components/custom/main_nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Event } from "@/lib/types";
import { Calendar, Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
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
  return (
    <>
      <MainNav />
     
      <div className="w-full flex flex-col justify-center p-4 items-center h-auto pb-10">
        <div className="w-full md:w-[80%]">
          <h1 className=" text-3xl md:text-4xl font-bold py-3">{event?.title}</h1>
          <Separator className=" bg-gray-200 h-[1px] py-[1px] my-4" orientation="horizontal"/>
          <div className="w-full">
            <img
              src={event?.photo}
              className="mx-auto object-fit landscape:h-[50vh] potrait:w-full"
            ></img>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 w-full">
          <p className="col-span-1 justify-center flex flex-col py-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <div className="my-4 flex flex-col justify-normal">
                      <p>Event dates :</p>
                      <p className="font-bold text-gray-500 inline-flex justify-center items-center">Start Date : <span className="text-sm text-gray-900 mx-3">{event?.startDate.toString().substring(0,10)}</span> to</p>
                      <p className="font-bold text-gray-500 inline-flex justify-normal items-center">End Date : <span className="text-sm text-gray-900 mx-3">{event?.endDate.toString().substring(0,10)}</span></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-bold">Location</p>
                      <p>Online event</p>
                    </div>
                  </div>
              </p>
              <p className="col-span-3 py-6">
                {event?.eventDescription}</p>
              
            </div>
        </div>
      </div>
    </>
  );
};

export default EventComponent;
