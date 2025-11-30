"use client"

import { Percent } from "lucide-react"
import {ResponsiveContainer, PieChart, Pie,Tooltip, Legend}  from "recharts"
import Customicon from "@/components/Customicon/Customicon"
import { dataTotalSuscribers } from "../../../../data/TotalSuscribers.data"

export  function TotalSuscribers() {
  return (
    <div className="mb-4 lg:mb-0 shadow-sm bg-background rounded-lg p-5 w-full xl:w-96
     hover:shadow transition">
        <div className="flex gap-x-2 items-center mb-4">
            <Customicon icon={Percent}/>
            <p className="text-xl">Total Subscribers</p>
        </div>
        <div className="w-full h-[200px] p-5">
            <ResponsiveContainer aspect={1} maxHeight={200}>
                <PieChart>
                    <Pie
                    dataKey="value"
                    data={dataTotalSuscribers}
                    outerRadius= {80}
                    labelLine = {false}
                    />
                
                <Tooltip/>
                <Legend/>

                </PieChart>
            </ResponsiveContainer>
        </div>
       
    </div>
  )
}
