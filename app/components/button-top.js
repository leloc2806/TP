"use client"
export default function ButtonTop(){

    const backToTop = () => window.scrollTo({ top: 0 })

    return (
        <button className="go-top block" onClick={backToTop}>
            <svg className={
                "h-[32px] w-[32px] mh5:h-[32px] mh5:w-[32px]"
            } 
            viewBox="0 0 24 24"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </g>
            </svg>
        </button>
    )
}