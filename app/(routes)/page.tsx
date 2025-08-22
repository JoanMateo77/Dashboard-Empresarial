
import React from "react";
import { UserButton } from "@clerk/nextjs";
import CardSummary from "./components/CardSummary/CardSummary";
import { BookOpenCheck, UserRound, Waypoints } from "lucide-react";
import { LastCustomers } from "./components/CardSummary/LastCustomers";


export const dataCardsSummary = [
  {
  icon:UserRound ,
  total : "12.450",
  average: 15,
  title: "Companies Created 31131",
  tooltipText: "see all of the companies created"
  },
{
  icon:Waypoints ,
  total : "86.5%",
  average: 80,
  title: "total revenue",
  tooltipText: "se all of the sumary"
 },
 {
  icon: BookOpenCheck ,
  total : "363,34$",
  average:30 ,
  title: "bounce rate",
  tooltipText: "se all of the bounce rate"
  },
]
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
        <p>Sales Distributors</p>
      </div>
    
   </div>
  );
}
