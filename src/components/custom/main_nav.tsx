import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Img from "./../../assets/favicon.png";
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      style={{
        background: `linear-gradient(180deg, rgba(5,5,4,1) 0%, rgba(10,10,10,1) 1%, rgba(0,212,255,0) 100%)`
      }}
      className={cn(
        "flex items-center z-50 justify-between space-x-4 lg:space-x-6 py-3 md:py-3  md:px-10 sticky top-0 shadow-inner font-saira h-full w-full bg-black bg-opacity-0 ",
        className
      )
      
    }
      {...props}
    >
      <h1 className="font-saira uppercase text-2xl md:text-4xl  tracking-widest text-white flex items-center gap-1">
      <img src={Img} className="w-20 h-20 brightness-125 ml-4 md:ml-0"></img>
        Transformity
      </h1>
      <div className="hidden font-saira uppercase sm:flex  w-full md:space-x-10  text-white justify-end">
        <Link
          to="/"
          className="text-xl font-saira uppercase font-medium transition-colors hover:text-primary "
        >
          Home
        </Link>
        {/* <a
          href="/about"
          className="text-xl font-saira uppercase font-medium text-muted-foreground transition-colors hover:text-primary "
        >
          About
        </a> */}
        <div className="group relative">
          <Link
            to="/blog"
            className="text-xl font-saira uppercase font-medium text-muted-foreground transition-colors hover:text-primary relative"
          >
            Blog
            <div className="absolute hidden group-hover:block h-auto  bg-black px-2 border rounded-md z-50">
              <Link to="/blog/write" className="hover:underline text-md font-saira z-50">
                compose blog
              </Link>
            </div>
          </Link>
        </div>
        <Link
          to="/team"
          className="text-xl font-saira uppercase font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Team
        </Link>
        <div className="group relative">
          <Link
            to="/events"
            className="text-xl font-saira uppercase font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Events
            <div className="absolute hidden group-hover:block h-auto bg-black px-2 border rounded-md">
              <Link to="/eventCompose" className="hover:underline text-md font-saira z-50">
                compose event
              </Link>
            </div>
          </Link>
        </div>
        <div className="group relative">
        <Link
          to="/podcast"
          className="text-xl font-saira uppercase font-medium transition-colors hover:text-primary"
        >
          Podcast
          <div className="absolute hidden group-hover:block h-auto bg-black px-2 border rounded-md">
              <Link to="/podcastCompose" className="hover:underline text-md font-saira z-50">
                compose podcast
              </Link>
            </div>
        </Link>
        </div>
        
      </div>

      <div className="flex items-center space-x-2 sm:space-x-6  sm:pl-10  ">
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none focus:outline-none ">
              <Menu className="text-white m-4 " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-6 bg-black text-white">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>
                <Link
                  to="/"
                  className="text-lg  font-saira  font-light text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem>
                <Link
                  to="/about"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </DropdownMenuItem> */}

              <DropdownMenuItem>
                <Link
                  to="/team"
                  className="text-lg  font-saira  font-light transition-colors hover:text-primary"
                >
                  Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuLabel className="bg-gray-600 font-saira text-xl">Blog</DropdownMenuLabel>
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>
                <Link
                  to="/blog/write"
                  className="text-lg font-saira  font-light transition-colors hover:text-primary"
                >
                  Write
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Link
                  to="/blog"
                  className="text-lg font-saira text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </DropdownMenuItem>
              <DropdownMenuLabel className="bg-gray-600 font-saira text-xl">Events</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  to="/events"
                  className="text-lg font-saira text-muted-foreground transition-colors hover:text-primary"
                >
                  Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/eventCompose"
                  className="text-lg font-saira text-muted-foreground transition-colors hover:text-primary"
                >
                  Event Compose
                </Link>
              </DropdownMenuItem>
              <DropdownMenuLabel className="bg-gray-600 font-saira text-xl">Podcast</DropdownMenuLabel>
              <DropdownMenuSeparator />
              
              <DropdownMenuItem>
                <Link
                  to="/podcast"
                  className="text-lg font-saira text-muted-foreground transition-colors hover:text-primary"
                >
                  Podcast
                </Link>
               
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/podcast"
                  className="text-lg font-saira text-muted-foreground transition-colors hover:text-primary"
                >
                  Podcast Compose
                </Link>
               
              </DropdownMenuItem>
              
            </DropdownMenuContent>
            
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
