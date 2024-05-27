'use client';

import React, { useState } from 'react';

/* 
    The client refers to the browser and the server refers to the Next.js server.
    This is a client component because
        - Has 'use client' directive
        - Uses React hooks
        - Only client components can use React hooks

    Client components in Next.js can also be pre-rendered on the server and hydrated on the client.

*/


export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}