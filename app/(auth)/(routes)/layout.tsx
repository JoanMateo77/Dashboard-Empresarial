
export default function layoutAuth({children}: {children: React.ReactNode}  ) {
    return(
        <div className="flex flex-col  h-full  justify-center items-center ">
            <h1>Smart Solutions</h1>

            <h1 className="text-xl my-2 font-semibold ">Bienvenidos al Dashboard empresarial </h1>
            <h1>Farid SAS</h1>
           
           {children}
                
           
            
        </div>
    )
}  