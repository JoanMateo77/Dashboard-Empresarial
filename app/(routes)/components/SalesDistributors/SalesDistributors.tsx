import CustomIcon from "@/components/Customicon/Customicon";
import { BarChart } from "lucide-react"
import GraficSuscribers from "../GraphicSuscribers/GraficSuscribers";

export function SalesDistributor(){
    return(
        <div className="shadow-sm bg-background rounden-lg p-5 ">
            <div className="flex gap-x-2 items-center ">
                <CustomIcon icon={BarChart} />
                <p className="text-xl">Sales Distributor</p>

            </div>

            <GraficSuscribers/>
        </div>
    )
}