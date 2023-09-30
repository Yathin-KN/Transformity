
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center justify-between space-x-4 lg:space-x-6 py-6 px-10 sticky top-0 shadow-inner border-b-[0.1rem] font-chivo h-full w-full bg-slate-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border", className)}
      {...props}
    >
      <nav className="items-center space-x-4  md:visible  lg:space-x-6 lg:visible">
      <Link
        to="/"
        className="text-md font-medium transition-colors hover:text-primary"
      >
        Home
      </Link>
      <a
        href="/examples/dashboard"
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
        href="/examples/dashboard"
        className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Team
      </a>
      <a
        href="/examples/dashboard"
        className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Events
      </a>
      
      </nav>
      <h1 className="font-chivo text-4xl font-extrabold tracking-widest pr-6 text-gray-800">
        Transformity
      </h1>
      <div className="flex gap-6 pl-10 md:visible">
      <Button variant="outline" className="float-right font-poppins border-b-[0.2rem] border-gray-600">
        Login
      </Button>
      <Button variant="outline" className="float-right font-poppins border-b-[0.2rem] border-gray-600">
        Login
      </Button>
      </div>
    </nav>
  )
}