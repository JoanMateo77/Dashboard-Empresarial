
import React from "react";
import { UserButton } from "@clerk/nextjs";
import CardSummary from "./components/CardSummary/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/LastCustomers";
import { SalesDistributor } from "./components/SalesDistributors";
import {TotalSuscribers} from "./components/TotalSuscribers/TotalSuscribers";
import { ListIntegrations } from "@/app/(routes)/components/ListIntegrations/ListIntegrations";


import { dataCardsSummary } from "./dataCardsSummary.data";

export default function Home() {
  return (
  <div>
   
    
      <h2 className="text-2xl mb-4">Dashboard </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
       { dataCardsSummary.map(({icon, total, average, title, tooltipText}) => (
        <CardSummary 
        key={title}
         icon={icon}
         total={total}
         average={average}
         title={title}
         tooltipText={tooltipText}
         />
        ))}
         
         
         
        
          
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers/>
        <SalesDistributor/>

      </div>
      <div className="flex-col flex xl:flex md:gap-x-10 xl:flex-row gap-y-4 md:gap-y-0 mt-12 md:mb-10 justify-center ">
        <TotalSuscribers/>
        <ListIntegrations/>

      </div>
          
   </div>
  );
}
