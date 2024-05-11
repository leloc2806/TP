"use client"

import { useRouter } from "next/navigation";
import { useState } from "react"


export default function SearchComponent({show, display}){

    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const onSearch = (e) => {
        e.preventDefault(); 
        const trimmedQuery = searchQuery.trim();
        if (!trimmedQuery) {
            console.log(show);
            return; // Prevent further execution
        }

        if (!/^[a-zA-Z0-9\s]*$/.test(trimmedQuery)) {
            alert("Search query must contain only text."); // Show an alert if the query contains non-text characters
            return; // Prevent further execution
        }

        const encodedSearchQuery = encodeURI(searchQuery);

        router.push(`/search?q=${encodedSearchQuery}`)

    }

    const submitForm = (e) => {
        e.preventDefault();
        // Check if the search query is not empty before submitting
        if (searchQuery.trim()) {
            onSearch(e); // Call the onSearch function to submit the form
        }
    };
    
    return(

        <div 
            className={`search-overlay${show ? ' show opacity-1' : ''}`}
        >
            <span></span>
            <div className={`search-form${show ? ' active opacity-1' : ''}`}>
                <div className="form-row-search">
                    <form id="search" onSubmit={onSearch}>
                        <div className="search-svg">
                            <svg viewBox="0 0 50 50">
                                <path fill="currentColor" d="M33.3,31.9c-0.6,0.6-1.3,1-2,1.4l5.9,5.9c1,0.9,2.5,0.9,3.4,0c0.9-1,0.9-2.5,0-3.4l-5.9-5.9C34.4,30.6,33.9,31.3,33.3,31.9z"></path>
                                <path fill="currentColor" d="M14.9,30.8c4.8,4.8,12.7,4.8,17.5,0s4.8-12.6,0-17.4s-12.7-4.8-17.5,0S10.1,25.9,14.9,30.8z M17.1,15.5
                                    c3.7-3.7,9.6-3.7,13.3,0s3.7,9.5,0,13.2s-9.6,3.7-13.3,0S13.4,19,17.1,15.5z"></path>
                            </svg>
                        </div>
                        <div className="input-text">
                            <input 
                                type="text" 
                                id="quicksearch" 
                                value={searchQuery} 
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Tìm kiếm ..."
                            />
                            {/* <div className="search-error" id="errorsearch">
                                <div className="search-error-content">Từ khóa không được dưới 3 kí tự, vui lòng nhập lại từ khóa tìm kiếm!</div>
                            </div> */}
                            <button
                                className="display-none link-search-load-typing"
                                onClick={submitForm}
                            >
                            </button>
                        </div>
                        <button 
                            className="close-search"
                            onClick={display}
                        >
                        </button>
                    </form>
                </div>
            </div>

        </div>
    )
}