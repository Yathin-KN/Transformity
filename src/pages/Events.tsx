import { useEffect, useState } from "react";
import { MainNav } from "../components/custom/main_nav";
import { EventData } from "@/lib/types";
// import generateRandomEvents from "@/lib/eventsData";
// import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DatePickerWithPresets } from "@/components/custom/datePicker";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ListX, MapPin, Trash } from "lucide-react";
import getAllEvents from "@/apis/POST/getAllEvents";
import useUserStore from "@/store/authStore";
import { ToastContainer, toast } from "react-toastify";
import deleteEventById from "@/apis/POST/deletEvent";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/custom/footer";
import clsx from "clsx";
import useModeStore from "@/store/mode";

const limitWords = (text: string, limit: number) => {
  const words = text.split(" ");

  const screenSize = window.innerWidth;

  const newLimit = screenSize < 968 ? 20 : limit;

  if (words.length > newLimit) {
    return words.slice(0, newLimit).join(" ") + "  . . .";
  }

  return text;
};

// const EventCard=({imgUrl,title,eventId,user_id,eventLocation,description,startDate,endDate}:{
//   imgUrl:string,title:string,eventId:string,user_id:string,eventLocation:string,description:string,startDate:string,endDate:string
// })=>{
  
// }
const Events = () => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [keywords, setKeywords] = useState("");
  const [location, setLocation] = useState("");
  const info = useUserStore((state) => state.getUserInfo);
  const [dateEvent, setDateEvent] = React.useState<string>();
  const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);

  useEffect(() => {
    console.log("000000000 ", dateEvent);
    if (dateEvent) {
      console.log(dateEvent);
    }
  }, [dateEvent]);
  const { user_id } = info();
  // useEffect(() => {
  //   const events = generateRandomEvents(10);
  //   setEvents(events);
  // }, []);

  const fetch = async () => {
    try {
      const resp = await getAllEvents();
      setEvents(resp);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  var filteredEvents: any[] = [];
  if (events.length > 0) {
    filteredEvents = events.filter((event) => {
      const titleMatch = event.title
        .toLowerCase()
        .includes(keywords.toLowerCase());
      const locationMatch = event.eventLocation
        .toLowerCase()
        .includes(location.toLowerCase());
      const dateMatch =
        !dateEvent || event.startDate.toString().substring(0, 10) === dateEvent; // Check if event is on the selected date

      return titleMatch && locationMatch && dateMatch;
    });
  }

  const deleteEvent = async (event_id: string, user_id: string) => {
    try {
      setIsDeleteLoading(true);
      const resp = await deleteEventById(event_id, user_id);
      toast.success("Sucessfully deleted !", {
        delay: 1500,
      });
      console.log(resp);
      fetch();
    } catch (err: any) {
      console.log(err);
      toast.error(err, {
        delay: 1500,
      });
    } finally {
      setIsDeleteLoading(false);
    }
  };
  const handleClick = (event_id: string) => {
    console.log(event_id);
    deleteEvent(event_id, user_id);
  };
  const {mode}=useModeStore();
  const navigate = useNavigate();
  return (
    <>
      <div className={clsx({
         "bg-white":(mode=="light"),
         "bg-black":(mode=="dark"),
      })}>
        <MainNav />
      </div>
      <ToastContainer
        toastClassName={() =>
          " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer bg-white text-gray-800 text-sm p-4 m-4"
        }
      />
      <div className={clsx("w-full min-h-screen h-auto p-4 ",{
         "bg-white":(mode=="light"),
         "bg-black":(mode=="dark"),
      })}>
      <div className={clsx("w-full flex justify-center py-10   md:py-10 overflow-hidden  ",{
         "text-black":(mode=="light"),
         "text-white":(mode=="dark"),
      })}>
          <motion.p
            className="text-xl md:text-[9rem] flex justify-center relative items-center w-full h-auto md:py-10 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="opacity-20 md:opacity-10 tracking-tighter md:tracking-[1.3rem] text-center py-3 mx-4 font-island normal-case text-[8rem] md:text-[17rem]">
              Transformity
            </p>
            <motion.p
              className="text-3xl md:text-7xl absolute uppercase tracking-[0.5rem]  md:tracking-[1.5rem] font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, spacing: 2 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
             
              BLOGS
            </motion.p>
          </motion.p>
        </div>
        <div className="flex  flex-col md:flex-row">
          <div className=" w-full flex flex-col md:flex-row">
            <div className="w-fit h-full flex flex-col gap-10 ">
              <p className={clsx({
         "text-white":(mode=="dark"),
         "text-black":(mode=="light"),
      })}>{dateEvent}</p>
              <div>
                <Label
                  htmlFor="keywords"
                  className={clsx("font-saira text-lg tracking-wide",{
                    "text-white":(mode=="dark"),
                    "text-black":(mode=="light"),
                 })}
                >
                  Keywords
                </Label>
                <Input
                  className={clsx("w-full md:w-72 text-lg  font-saira tracking-wider border-b-1 rounded-none border-white border-t-0 border-x-transparent",{
                    "text-white":(mode=="dark"),
                    "text-black":(mode=="light")
                  })}
                  id="keywords"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  placeholder="Keyword"
                />
              </div>
              <div>
                <Label
                  htmlFor="location"
                  className={clsx("font-saira text-lg tracking-wide",{
                    "text-white":(mode=="dark"),
                    "text-black":(mode=="light"),
                 })}
                >
                  Location
                </Label>
                <Input
                  className={clsx("w-full md:w-72 text-lg  font-saira tracking-wider border-b-1 rounded-none border-white border-t-0 border-x-transparent",{
                    "text-white":(mode=="dark"),
                    "text-black":(mode=="light")
                  })}
                  id="location"
                  placeholder="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="w-full md:w-auto hidden justify-between gap-3 font-saira text-white">
                <DatePickerWithPresets setEventDate={setDateEvent} />
                <Button
                  variant="outline"
                  onClick={() => setDateEvent(undefined)}
                >
                  <ListX strokeWidth={1} />
                </Button>
              </div>
            </div>

            <div className="w-full text-center items-center p-4">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => {
                  return (
                    <div
                      onClick={() => navigate(`/events/${event.eventId}`)}
                      key={index.toString()}
                      className=" relative flex cursor-pointer shadow-sm flex-col w-full md:flex-row text-white border rounded-none bg-red-500 md:bg-red-600"
                    >
                      {user_id == event.user_id && (
                        <div className="absolute  bottom-4 right-4 ">
                          <Trash
                            strokeWidth={1}
                            onClick={() =>
                              !isDeleteLoading && handleClick(event.eventId)
                            }
                          />
                        </div>
                      )}
                      <div className="relative">
                        <img
                          className="brightness-100 hover:brightness-50  md:max-w-[450px] md:max-h-[400px] mr-6"
                          src={
                            event.photo ||
                            "https://2.bp.blogspot.com/-Nc9YO_-F8yI/TcSIAB-nR-I/AAAAAAAAAGI/hPkuxqkqVcU/s1600/music-clipartMUSIC1.jpg"
                          }
                          alt={`Event ${index}`}
                        />
                        <Button
                          className="absolute top-4 right-4  text-gray-950 text-sm bg-gray-300 opacity-90 px-2 py-1 rounded-md border-gray-800 md:top-4 md:right-10"
                          variant="outline"
                        >
                          {event.startDate.toString().substring(0, 10)} to{" "}
                          {event.endDate?.toString().substring(0, 10)}
                        </Button>
                      </div>

                      <div className="p-3">
                        <div className="flex flex-nowrap pt-2 font-saira uppercase tracking-wide">
                          <MapPin className="text-white mr-2" />{" "}
                          {event.eventLocation}
                        </div>
                        <p className="font-bold text-2xl capitalize py-2 font-saira text-white w-full text-left">
                          {event.title}
                        </p>
                        <div className="flex flex-col justify-between h-full">
                          <p className="h-[6rem] text-md text-white font-saira text-left">
                 
                            {limitWords(event.desc+"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa dolores ea at necessitatibus aliquam, qui pariatur nisi corporis magnam vel sint consectetur vero tempora temporibus dolore ratione repellendus deserunt enim.", 100)}
                          </p>
                          {/* <p className="space-x-2">
                      {event.categories &&
                        event.categories.map((category, index) => {
                          return (
                            <Badge
                              key={index.toString()}
                              variant="outline"
                              className="rounded-full font-chivo my-3 text-black capitalize bg-gray-200 shadow-inner font-light"
                            >
                              {category}
                            </Badge>
                          );
                        })}
                    </p> */}
                          {/* <animated.div className="md:flex gap-2 items-center hidden">
                    <Link to={`/blog/${index}`}>
                      <ArrowTopRightIcon className="text-3xl font-semibold w-6 h-6 cursor-pointer hover:bg-gray-100 m-2 rounded-md" />
                    </Link>
                    <p className="text-muted-foreground text-sm text-black ">
                      Read more ...
                    </p>
                  </animated.div> */}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="text-center text-white text-lg font-saira ">
                  No events found.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Events;
