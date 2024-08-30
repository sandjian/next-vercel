const Layout = ({children}:{children:React.ReactNode})=>{
    return(
        <div className="justify-center flex items-center  min-h-screen w-full">
            {children}
        </div>
    )
}
export default Layout