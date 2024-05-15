"use client"

import Link from "next/link";

export default function NewButtonShare({ url }) {
    return (
        <div className="share-item">
            <ul>
                <li>
                    <Link className="item-facebook" href={`http://www.facebook.com/sharer.php?u=${encodeURIComponent(url)}`}>
                        <svg x="0px" y="0px" viewBox="0 0 60 60">
                            <path fill="currentColor" d="M39.4,23.2h-6.3v-4.1c0-1.5,1-1.9,1.7-1.9c0.7,0,4.4,0,4.4,0v-6.9h-6.1c-6.7,0-8.3,5.1-8.3,8.3v4.4h-3.8v7h3.9c0,9,0,19.8,0,19.8h8.3c0,0,0-11,0-19.8h5.4L39.4,23.2z">
                            </path>
                        </svg>
                    </Link>
                </li>
                <li>
                    <a className="item-linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.nhojsc.vn/tin-tuc/tin-tuc-/n-h-o-day-manh-hop-tac-cung-kocham-va-hiep-hoi-nguoi-han-quoc-tai-hai-phong.html" target="_blank" rel="noopener">
                        <svg fill="currentColor" x="0px" y="0px" viewBox="0 0 60 60">
                            <rect fill="currentColor" x="16.6" y="23.3" width="6.5" height="22.7"></rect>
                            <path fill="currentColor" d="M41.3,24.6c-2.4-1.4-6-1.4-8.6-0.3v-1h-6.5V46h6.5V31.5l2.7-1.3c0.7-0.3,2.1-0.3,2.7,0.1c0.5,0.2,1.1,1.3,1.1,2v13.8h6.5V32.3C45.7,29.3,43.9,26.1,41.3,24.6z"></path>
                            <path fill="currentColor" d="M19.8,12.8c-2.3,0-4,1.8-4,4c0,2.3,1.8,4,4,4c2.3,0,4-1.8,4-4C23.9,14.6,22.1,12.8,19.8,12.8z"></path>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}
