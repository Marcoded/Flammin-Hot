import Link from "next/link"

export const Footer = () => {
    return ( 
    <div className="bg-accent h-10 w-full flex gap-5 justify-center items-center">
        <h1>Demo project by Marc Pollet</h1>
        <a rel="noopener noreferrer" target="_blank" className="font-extrabold text-transparent hover:scale-105 transition-all duration-75  bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" href="https://marc.pollet.dev/"> MP</a>
        <a rel="noopener noreferrer" target="_blank" className="font-extrabold text-transparent hover:scale-105 transition-all duration-75   bg-clip-text bg-gradient-to-r from-slate-100 to-slate-200" href="https://github.com/Marcoded/"> Github</a>
      
    </div>
    )
}

export default Footer