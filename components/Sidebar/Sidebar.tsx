import { SidebarRoutes } from "../SideBarRoutes";

import { Logo } from "../Logo";

export function Sidebar() {
    return(
        <div className="h-screen">
            <div className="h-full flex flex-col border-r border-gray-200 dark:border-gray-600 ">
                <Logo/>
                <SidebarRoutes/>

            </div>

        </div>
    )
}    