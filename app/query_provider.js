"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function Providers({children}){
    const [queryClient] = useState(() => new QueryClient());

    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ProgressBar
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
                options={{ showSpinner: false }}
                shallowRouting={true}
            />
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    )
}