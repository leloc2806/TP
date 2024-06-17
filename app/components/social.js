import Link from "next/link";
import MotionSocial from "./motionSocial";
import flattenAttributes from "../lib/utils";

async function fetchSocial(){
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social?populate=deep,2`, { cache: 'no-store' });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      }
      catch(error){
          // Handle errors here, such as logging or displaying an error message
          console.error("Error fetching slider data:", error.message);
          throw error; // Re-throw the error to be handled by the caller if needed
      }
}

export default async function Social(){

    const socialLink = await fetchSocial();
    const social = flattenAttributes(socialLink);

    return (
        <MotionSocial className="social black">
            <ul>
                <li>
                    <Link className="facebook" href={`${social.Facebook}`} target="_blank" rel="noopener" aria-label="facebook">
                        <svg 
                            fill="#000000" 
                            className={
                                "h-[32px] w-[32px] mh5:h-[32px] mh5:w-[32px]"
                            }
                            viewBox="0 0 32 32" 
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                            </g>
                        </svg>
                    </Link>
                </li>
                <li>
                    <a className="zalo" href={`https://zalo.me/${social.Zalo}`} target="_blank" rel="noopener" aria-label="zalo">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            x="0px" y="0px"
                            className={
                                "h-[32px] w-[32px] mh5:h-[32px] mh5:w-[32px]"
                            }
                            viewBox="0,0,256,256">
                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                <g transform="scale(5.33333,5.33333)">
                                    <path d="M15,36v-29.173l-1.211,-0.811c-5.149,2.067 -8.789,7.096 -8.789,12.984v10c0,7.732 6.268,14 14,14h10c4.722,0 8.883,-2.348 11.417,-5.931v-1.069z" fill="#000000"></path><path d="M29,5h-10c-1.845,0 -3.601,0.366 -5.214,1.014c-3.333,3.236 -5.786,8.514 -5.786,12.986c0,6.771 0.936,10.735 3.712,14.607c0.216,0.301 0.357,0.653 0.376,1.022c0.043,0.835 -0.129,2.365 -1.634,3.742c-0.162,0.148 -0.059,0.419 0.16,0.428c0.942,0.041 2.843,-0.014 4.797,-0.877c0.557,-0.246 1.191,-0.203 1.729,0.083c3.313,1.759 7.193,1.995 10.86,1.995c4.676,0 9.339,-1.04 12.417,-2.916c1.621,-2.285 2.583,-5.07 2.583,-8.084v-10c0,-7.732 -6.268,-14 -14,-14z" fill="#eeeeee"></path><path d="M36.75,27c-2.067,0 -3.75,-1.683 -3.75,-3.75c0,-2.067 1.683,-3.75 3.75,-3.75c2.067,0 3.75,1.683 3.75,3.75c0,2.067 -1.683,3.75 -3.75,3.75zM36.75,21c-1.24,0 -2.25,1.01 -2.25,2.25c0,1.24 1.01,2.25 2.25,2.25c1.24,0 2.25,-1.01 2.25,-2.25c0,-1.24 -1.01,-2.25 -2.25,-2.25z" fill="#000000"></path><path d="M31.5,27h-1c-0.276,0 -0.5,-0.224 -0.5,-0.5v-8.5h1.5z" fill="#000000"></path><path d="M27,19.75v0.519c-0.629,-0.476 -1.403,-0.769 -2.25,-0.769c-2.067,0 -3.75,1.683 -3.75,3.75c0,2.067 1.683,3.75 3.75,3.75c0.847,0 1.621,-0.293 2.25,-0.769v0.269c0,0.276 0.224,0.5 0.5,0.5h1v-7.25zM24.75,25.5c-1.24,0 -2.25,-1.01 -2.25,-2.25c0,-1.24 1.01,-2.25 2.25,-2.25c1.24,0 2.25,1.01 2.25,2.25c0,1.24 -1.01,2.25 -2.25,2.25z" fill="#000000"></path><path d="M21.25,18h-8v1.5h5.321l-5.571,6.5h0.026c-0.163,0.211 -0.276,0.463 -0.276,0.75v0.25h7.5c0.276,0 0.5,-0.224 0.5,-0.5v-1h-5.321l5.571,-6.5h-0.026c0.163,-0.211 0.276,-0.463 0.276,-0.75z" fill="#000000"></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </li>
            </ul>
        </MotionSocial>
    )
}