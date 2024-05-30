import flattenAttributes from "../lib/utils";
import ButtonTop from "./button-top";
import Link from "next/link"

async function fetchSocial(){
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/social?populate=deep,2`);
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

export default async function Footer() {

    const socialLink = await fetchSocial();
    const social = flattenAttributes(socialLink);

    return(
        <>
            <footer className="footer">
                <div className="box-footer ani-item on-show">
                    <ButtonTop/>
                    <div className="wrap-box-footer">
                        <div className="company-text">
                            <h2>Công ty CP Năng Lượng Thành Phát</h2>
                            <ul className="company-info"> 
                                <li>
                                    <span className="call">
                                        <svg className={
                                            "h-[32px] w-[32px] mh5:h-[32px] mh5:w-[32px]"
                                        } 
                                            viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier"> 
                                                    <path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" fill="#000000"></path> <path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" fill="#000000"></path> <path fillRule="evenodd" clipRule="evenodd" d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z" fill="#000000"></path> 
                                                </g>
                                        </svg>
                                    </span> 
                                    <a href="tel:+84-99-9999-9999">{social.Phone}</a> 
                                </li>   
                                <li>
                                    <span className="email">
                                        <svg 

                                            className={
                                                "h-[32px] w-[32px] mh5:h-[32px] mh5:w-[32px]"
                                            } 
                                            viewBox="0 0 512 512" 
                                            version="1.1" xmlns="http://www.w3.org/2000/svg" 
                                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                                            fill="#000000" 
                                            stroke="#000000"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> 
                                                <g id="mail-filled-white" fill="#000000" transform="translate(42.686667, 85.339333)"> 
                                                    <path d="M3.55271368e-14,28.7 L213.333914,220.70134 L426.667,28.701 L426.667248,341.333608 L0.00058094128,341.333608 L3.55271368e-14,28.7 Z M394.776,1.42108547e-14 L213.333914,163.285608 L31.89,1.42108547e-14 L394.776,1.42108547e-14 Z" id="Combined-Shape"> </path> 
                                                </g> 
                                                </g> 
                                            </g>
                                        </svg>
                                    </span> 
                                    <Link href={`mailto:${social.Email}`}>{social.Email}</Link> 
                                </li>   
                                <li className="company-address">
                                    <span className="address">
                                        <svg 
                                            className={
                                                "h-[32px] w-[32px] mh5:h-[32px] mh5:w-[32px]"
                                            }
                                            version="1.0" 
                                            id="Layer_1" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                                            viewBox="0 0 64 64" 
                                            enableBackground="new 0 0 64 64" 
                                            xmlSpace="preserve" 
                                            fill="#000000"
                                        >
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"> 
                                                <path fill="#231F20" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> 
                                            </g>
                                        </svg>
                                    </span>  
                                    {social.Address} 
                                </li>  
                            </ul>
                        </div>
                    </div>
                    <div className="center-footer">
                        <div className="menu-footer">
                            <ul>
                                <li><Link className="link-load link-footer" href={"/"}>Trang chủ</Link></li>
                                <li><Link className="link-load link-footer" href={"/product"}>Dự án</Link></li>
                                <li><Link className="link-load link-footer" href={"/news"}>Tin tức</Link></li>
                                <li><Link className="link-load link-footer" href={"/about"}>Giới thiệu</Link></li>
                            </ul>
                        </div>
                        <div className="social-footer">
                            <ul>
                                <li>
                                    <Link className="facebook" href={`${social.Facebook}`} target="_blank" rel="noopener" aria-label="facebook">
                                        <svg 
                                            fill="#000000" 
                                            className={
                                                "h-[46px] w-[46px] mh5:h-[46px] mh5:w-[46px]"
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
                                    <Link className="zalo" href={`https://zalo.me/${social.Zalo}`} target="_blank" rel="noopener" aria-label="zalo">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            x="0px" y="0px"
                                            className={
                                                "h-[46px] w-[46px] mh5:h-[46px] mh5:w-[46px]"
                                            }
                                            viewBox="0,0,256,256">
                                            <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                                <g transform="scale(5.33333,5.33333)">
                                                    <path d="M15,36v-29.173l-1.211,-0.811c-5.149,2.067 -8.789,7.096 -8.789,12.984v10c0,7.732 6.268,14 14,14h10c4.722,0 8.883,-2.348 11.417,-5.931v-1.069z" fill="#000000"></path><path d="M29,5h-10c-1.845,0 -3.601,0.366 -5.214,1.014c-3.333,3.236 -5.786,8.514 -5.786,12.986c0,6.771 0.936,10.735 3.712,14.607c0.216,0.301 0.357,0.653 0.376,1.022c0.043,0.835 -0.129,2.365 -1.634,3.742c-0.162,0.148 -0.059,0.419 0.16,0.428c0.942,0.041 2.843,-0.014 4.797,-0.877c0.557,-0.246 1.191,-0.203 1.729,0.083c3.313,1.759 7.193,1.995 10.86,1.995c4.676,0 9.339,-1.04 12.417,-2.916c1.621,-2.285 2.583,-5.07 2.583,-8.084v-10c0,-7.732 -6.268,-14 -14,-14z" fill="#eeeeee"></path><path d="M36.75,27c-2.067,0 -3.75,-1.683 -3.75,-3.75c0,-2.067 1.683,-3.75 3.75,-3.75c2.067,0 3.75,1.683 3.75,3.75c0,2.067 -1.683,3.75 -3.75,3.75zM36.75,21c-1.24,0 -2.25,1.01 -2.25,2.25c0,1.24 1.01,2.25 2.25,2.25c1.24,0 2.25,-1.01 2.25,-2.25c0,-1.24 -1.01,-2.25 -2.25,-2.25z" fill="#000000"></path><path d="M31.5,27h-1c-0.276,0 -0.5,-0.224 -0.5,-0.5v-8.5h1.5z" fill="#000000"></path><path d="M27,19.75v0.519c-0.629,-0.476 -1.403,-0.769 -2.25,-0.769c-2.067,0 -3.75,1.683 -3.75,3.75c0,2.067 1.683,3.75 3.75,3.75c0.847,0 1.621,-0.293 2.25,-0.769v0.269c0,0.276 0.224,0.5 0.5,0.5h1v-7.25zM24.75,25.5c-1.24,0 -2.25,-1.01 -2.25,-2.25c0,-1.24 1.01,-2.25 2.25,-2.25c1.24,0 2.25,1.01 2.25,2.25c0,1.24 -1.01,2.25 -2.25,2.25z" fill="#000000"></path><path d="M21.25,18h-8v1.5h5.321l-5.571,6.5h0.026c-0.163,0.211 -0.276,0.463 -0.276,0.75v0.25h7.5c0.276,0 0.5,-0.224 0.5,-0.5v-1h-5.321l5.571,-6.5h-0.026c0.163,-0.211 0.276,-0.463 0.276,-0.75z" fill="#000000"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="list-term-footer">
                            <ul>
                                <li><Link className="link-load link-footer " href={'/contact'}>Liên hệ</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="left-footer">   
                            <div className="copyright footer-copyright">
                                <p>2024 © <strong>Thanh Phat Company</strong>. <span>All Rights Reserved.</span></p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}