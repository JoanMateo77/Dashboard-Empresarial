import { SidebarRoutes } from "../SideBarRoutes";

export function Sidebar() {
    return(
        <div className="h-screen">
            <div className="h-full flex flex-col border-r border-gray-200 dark:border-gray-700">
                <p>logo</p>
                <SidebarRoutes/>

            </div>

        </div>
    )
}