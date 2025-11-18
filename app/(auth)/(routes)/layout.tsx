import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";


export default function layoutAuth({children}: {children: React.ReactNode}  ) {
    return(
        <div className="flex flex-col  h-full  justify-center items-center ">
             <Logo/>

            <h1 className="text-xl my-2 font-semibold ">Bienvenido a {siteConfig.name}</h1>
            <p className="mb-4 text-sm text-slate-500 text-center max-w-sm">{siteConfig.description}</p>

           {children}
        </div>
    )
}