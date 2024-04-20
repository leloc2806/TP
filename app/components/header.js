import Link from "next/link"
import Image from "next/image"
import NavigationMenu from "./navigation"

export default function Header() {
    
    return (
        <header className="header relative bg-slate-300">
            <div className="logo absolute">
                <h2>Logo</h2>
            </div>
            
            
            <NavigationMenu/>
            
            

        </header>
    )
}