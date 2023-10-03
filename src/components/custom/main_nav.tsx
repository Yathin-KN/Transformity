import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn(
        "flex items-center z-50 justify-between space-x-4 lg:space-x-6 py-6 px-6 md:px-10 sticky top-0 shadow-inner border-b-[0.1rem] font-chivo h-full w-full bg-slate-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border",
        className
      )}
      {...props}
    >
      <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
        <Link
          to="/"
          className="text-md font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>
        <a
          href="/about"
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          About
        </a>
        <Link
          to="/blog"
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Blog
        </Link>
        <a
          href="/blog/write"
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Write
        </a>
        <a
          href="/events"
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Events
        </a>
      </div>
      <h1 className="font-chivo text-3xl md:text-4xl font-extrabold tracking-widest pr-4 md:pr-6 text-gray-800">
        Transformity
      </h1>
      <div className="flex items-center space-x-2 sm:space-x-6 pl-2 sm:pl-10">
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:border-none focus:outline-none">
            <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-6">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
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
                  to="/blog/write"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  write
                </Link>
              </DropdownMenuItem>
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
                  to="/blog"
                  className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Show login and sign up buttons on larger screens */}
        <div className="hidden sm:flex space-x-2">
          <Button
            variant="outline"
            className="font-poppins border-b-[0.2rem] border-gray-600"
          >
            <Link to="/signup">Sign up</Link>
          </Button>
          <Button
            variant="outline"
            className="font-poppins border-b-[0.2rem] border-gray-600"
          >
            Login
          </Button>
        </div>
      </div>
    </nav>
  );
}