
import Customicon from "../../../../components/Customicon/Customicon"
import { List } from "lucide-react"
import { TableIntegrations } from "../TableIntegrations/TableIntegrations"

export function ListIntegrations() {
  return (
    <div className="shadow-sm bg-background  rounded-lg p-1 flex-1 ">
          <div className="flex gap-x-2 items-center ">
            <Customicon icon={List}/>
            <p className="text-xl">List of Integrations</p>
          </div>
          <TableIntegrations/>
        
      
    </div>
  )
}
