import { useEffect, useState } from "react";
import { MainNav } from "../components/custom/main_nav";
import { Event } from "@/lib/types";
import generateRandomEvents from "@/lib/eventsData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { DatePickerWithPresets } from "@/components/custom/datePicker";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
const limitWords = (text: string, limit: number) => {
  const words = text.split(' ');

  const screenSize = window.innerWidth;

  const newLimit = screenSize < 968 ? 20 : limit;

  if (words.length > newLimit) {
    return words.slice(0, newLimit).join(' ') + '  . . .';
  }

  return text;
};

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const events = generateRandomEvents(10);
    setEvents(events);
  }, []);

  return (
    <>
      <MainNav />

      <div className="flex flex-col gap-4 justify-center items-center py-4 px-4">

        <div className="w-full px-0 py-6 flex gap-4 flex-col justify-center md:gap-6 sticky md:items-end md:flex-row md:px-10 md:justify-evenly">
      <h1 className="w-72 text-3xl font-bold  md:text-5xl">Events</h1>
          <div>
            <Label htmlFor="keywords">Keywords</Label>
            <Input className="w-full md:w-72" id="keywords" />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input className="w-full md:w-72" id="location" />
          </div>
          <div className="w-full md:w-auto">
          <DatePickerWithPresets/>
          </div>
        </div>
        {events.map((event, index) => {
          return (
            
            <Card
              key={index.toString()}
              className="overflow-hidden flex cursor-pointer shadow-sm rounded-md flex-col w-[90vw] md:flex-row"
            >
              <div className="relative">
                <img
                  className="brightness-100 hover:brightness-50  md:max-w-[450px] md:max-h-[400px] mr-6"
                  src={
                    event.photo ||
                    "https://2.bp.blogspot.com/-Nc9YO_-F8yI/TcSIAB-nR-I/AAAAAAAAAGI/hPkuxqkqVcU/s1600/music-clipartMUSIC1.jpg"
                  }
                  alt={`Event ${index}`}
                />
                <Button className="absolute top-4 right-4  text-gray-950 text-sm bg-gray-300 opacity-90 px-2 py-1 rounded-md border-gray-800 md:top-4 md:right-10" variant='outline'>
                  {event.eventDate.toDateString()} at {event.eventTime}
                </Button>
              </div>

              <div className="p-3">
                <div className="flex flex-nowrap pt-2">
                  <MapPin className="text-gray-400 mr-2" />  {event.eventLocation}
                </div>
                <p className="font-bold text-2xl capitalize py-2 font-chivo">
                  {event.title}
                </p>
                <div className="flex flex-col justify-between h-full">
                  <p className="h-[6rem] text-sm  font-sans text-muted-foreground">
                  {limitWords(event.desc, 100)}
                  </p>
                  <p className="space-x-2">
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
                  </p>
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
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Events;
