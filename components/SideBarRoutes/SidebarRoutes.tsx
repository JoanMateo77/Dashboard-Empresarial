"use client"

import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from "../../data/SideBarRoutes.data"

import { Sidebaritem } from "@/components/Sidebaritem/Sidebaritem";

import { Separator } from "../ui/separator";
import { Button,  } from "../ui/button";

export  function SidebarRoutes() {
  return (
    <div className=" flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <Sidebaritem  key={item.label} item ={item}/>
          ))}
        </div>

        <Separator/>

        <div className="p-2 md:p-6">
         
          <p className=" text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <Sidebaritem key={item.label} item={item}/>
          ))}
        </div>

        <Separator/>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToolsSidebar.map((item)=>(
            <Sidebaritem key={item.label} item={item} />
          ))}

        </div>
          
        </div>
          <div>
            <div className="p-6 text-center">
              <Button variant="outline" className="w-full">
                Upgrade to Pro
              </Button>
            </div>
            <Separator/>
            <footer className="mt-3 p-3 text-center text-sm text-slate-500">
              <p>© 2025 Dashboard. All rights reserved.</p>
            </footer>
            
          </div>
</div>
  );
}
