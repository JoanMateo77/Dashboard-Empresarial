'use client'
import {Input} from "@/components/ui/input";

import { Sheet, SheetContent, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Search } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"




import { SidebarRoutes } from "@/components/SideBarRoutes";
import { ToggleTheme } from "@/components/ToggleTheme";


export default function Navbar() {
  return (
    <nav className=" flex items-center  px-2 gap-x-4 md:px-6 
     justify-between w-full bg-background border-b h-20">
        <div className="block xl:hidden">
           <Sheet> 
            <SheetTrigger className="flex items-center">
                <Menu/>
                
            </SheetTrigger>    
            <SheetContent side="left" >  
                <VisuallyHidden>
                     <SheetTitle>Menu</SheetTitle>
                </VisuallyHidden>
                <SidebarRoutes/>
                
            </SheetContent>
           </Sheet>
        </div>
        <div className="relative w-full max-w-[300px]">
            <Input placeholder="Search..." aria-label="Search" className="rounded-lg" />
            <Search strokeWidth ={1}  className="absolute top-2 right-2 text-slate-400"/>
        </div>
        <div className="flex gap-x-2 items-center ">
           <ToggleTheme/>
            <UserButton/>
        </div>

    </nav>
  )
}
