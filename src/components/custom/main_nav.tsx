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
      className={cn(
        "flex items-center z-50 justify-between space-x-4 lg:space-x-6 py-3 md:py-3 px-6 md:px-10 sticky top-0 shadow-inner font-chivo h-full w-full bg-black  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-90 overflow-hidden",
        className
      )}
      {...props}
    >
       <h1 className="font-chivo text-2xl md:text-4xl font-extrabold tracking-widest text-white">
          Transformity
        </h1>
      <div className="hidden sm:flex items-center  w-full md:space-x-6 justify-center text-white">
      
        <Link
          to="/"
          className="text-md font-medium transition-colors hover:text-primary "
        >
          Home
        </Link>
        <a
          href="/about"
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary "
        >
          About
        </a>
        <div className="group relative">
          <Link
            to="/blog"
            className="text-md font-medium text-muted-foreground transition-colors hover:text-primary relative"
          >
            Blog
            <div className="absolute hidden group-hover:block h-auto py-3 bg-white px-2 border rounded-md">
              <Link to="/blog/write" className="hover:underline">
                compose blog
              </Link>
            </div>
          </Link>
        </div>
        <Link
          to="/team"
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Team
        </Link>
        <div className="group relative">
          <Link
            to="/events"
            className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Events
            <div className="absolute hidden group-hover:block h-auto py-3 bg-white px-2 border rounded-md">
              <Link to="/eventCompose" className="hover:underline">
                compose event
              </Link>
            </div>
          </Link>
        </div>
        <Link
          to="/podcast"
          className="text-md font-medium transition-colors hover:text-primary"
        >
          Podcast
        </Link>
      </div>
      <img src={Img} className="w-16 h-16 brightness-125"></img>
            
      <div className="flex items-center space-x-2 sm:space-x-6  sm:pl-10  ">
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none focus:outline-none ">
              <Menu className="text-white" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-6">
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>
                <Link
                  to="/"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/about"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </DropdownMenuItem>
              
              <DropdownMenuItem>
                <Link
                  to="/team"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuLabel>Blog</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  to="/blog/write"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Write
                </Link>
              </DropdownMenuItem>
              
              <DropdownMenuItem>
                <Link
                  to="/blog"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </Link>
                
              </DropdownMenuItem>
              <DropdownMenuLabel>Events</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  to="/events"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  to="/eventCompose"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Event Compose
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
