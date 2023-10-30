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
import { Menu, Moon, Sun } from "lucide-react";
import Img from "./../../assets/favicon.png";
import useModeStore from "@/store/mode";
import clsx from "clsx";
export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const {mode , toggleMode} = useModeStore();
  return (
    <nav
      style={{
        background: (mode=="dark")?`linear-gradient(180deg, rgba(5,5,4,1) 0%, rgba(10,10,10,1) 1%, rgba(0,212,255,0) 100%)`:`linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 1%, rgba(255,255,255,0) 100%)
        `
      }}
      className={cn(
        "flex items-center z-50 justify-between space-x-4 lg:space-x-6 py-3 md:py-3  md:px-10 sticky top-0 shadow-inner font-saira h-full w-full bg- bg-opacity-0 ",
        className
      )
      
    }
      {...props}
    >
      <button className={clsx("py-1 px-2",{
        "text-white":(mode=="dark"),
        "text-black":(mode=="light")
      })} onClick={()=>toggleMode()}>
           {<div className="fixed top-7  md:top-8 md:right-8">{(mode=="light"?<div className="h-fit w-fit bg-white p-2 rounded-full bg-opacity-70 border border-gray-200 "><Sun/></div>:<div className="h-fit w-fit bg-gray-100 bg-opacity-20 p-2 rounded-full border border-gray-200 "><Moon/></div>)}</div>}
      </button>
      <Link to="/">
      <h1 className={clsx("font-saira uppercase text-2xl md:text-4xl  tracking-widest flex items-center gap-1",{
        "text-white":!(mode=="light"),
        "text-black":!(mode=="dark"),
      })}>
      <img src={Img} className={clsx("w-20 h-20 brightness-125 ml-4 md:ml-0",{
        
      })}></img>
        Transformity
      </h1>
      </Link>
      <div className="hidden font-saira uppercase sm:flex  w-full md:space-x-10  text-white justify-end">
        <Link
          to="/"
          className={clsx("text-xl font-saira uppercase font-medium transition-colors hover:text-primary ",{
            "text-black":(mode=="light"),
            "text-white":(mode=="dark"),
          })}
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
            className={clsx("text-xl font-saira uppercase font-medium text-muted-foreground transition-colors hover:text-primary relative",{
              "text-black":(mode=="light"),
              "text-white":(mode=="dark"),
            })}
          >
            Blog
            <div className={clsx("absolute hidden group-hover:block h-auto px-2 border rounded-md z-50",{
            "bg-white":(mode=="light"),
            "bg-black":(mode=="dark"),
          })}>
              <Link to="/blog/write" className="hover:underline text-md font-saira z-50">
                compose blog
              </Link>
            </div>
          </Link>
        </div>
        <Link
          to="/team"
          className={clsx("text-xl font-saira uppercase font-medium text-muted-foreground transition-colors hover:text-primary",{
            "text-black":(mode=="light"),
            "text-white":(mode=="dark"),
          
          })}
        >
          Team
        </Link>
        <div className="group relative">
          <Link
            to="/events"
            className={clsx("text-xl font-saira uppercase font-medium transition-colors hover:text-primary",{
              "text-black":(mode=="light"),
              "text-white":(mode=="dark"),
            })}
          >
            Events
            <div className={clsx("absolute hidden group-hover:block h-auto  px-2 border rounded-md",{
            "bg-white":(mode=="light"),
            "bg-black":(mode=="dark"),
          })}>
              <Link to="/eventCompose" className="hover:underline text-md font-saira z-50">
                compose event
              </Link>
            </div>
          </Link>
        </div>
        <div className="group relative">
        <Link
          to="/podcast"
          className={clsx("text-xl font-saira uppercase font-medium transition-colors hover:text-primary",{
            "text-black":(mode=="light"),
            "text-white":(mode=="dark"),
          })}
        >
          Podcast
          <div className={clsx("absolute hidden group-hover:block h-auto bg-black px-2 border rounded-md",{ "bg-white":(mode=="light"),
              "bg-black":(mode=="dark"),})}>
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
              <Menu className={clsx("m-4 ",{
                "text-black":(mode=="light"),
                "text-white":(mode=="dark")
              })} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={clsx("mt-6  ",{
                "text-black":(mode=="light"),
                "text-white":(mode=="dark"),
                "bg-black":(mode=="dark"),
                "bg-white":(mode=="light")
              })}>
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
              <DropdownMenuLabel className={clsx("font-saira text-xl",{
                "bg-gray-200":(mode=="light"),
                "bg-gray-400":(mode=="dark"),
              })}>Blog</DropdownMenuLabel>
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
              <DropdownMenuLabel  className={clsx("font-saira text-xl",{
                "bg-gray-200":(mode=="light"),
                "bg-gray-400":(mode=="dark"),
              })}>Events</DropdownMenuLabel>
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
              <DropdownMenuLabel  className={clsx("font-saira text-xl",{
                "bg-gray-200":(mode=="light"),
                "bg-gray-400":(mode=="dark"),
              })}>Podcast</DropdownMenuLabel>
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
                  to="/podcastCompose"
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
