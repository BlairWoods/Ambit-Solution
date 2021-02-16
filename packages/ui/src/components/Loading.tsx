import React, { useEffect, useState } from "react";

import type { ReactElement } from "react";

/**
 * Standard Loading component.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
const Loading = (): ReactElement => {
    const [loadingDots, setLoadingDots] = useState(1);
    useEffect(() => {
        const timer = setTimeout((): void => {
            const nextLoadingDots = loadingDots % 3 + 1;
            setLoadingDots(nextLoadingDots);
        }, 100);
        return (): void => {
            clearTimeout(timer);
        };
    });
    return (
        <span>
            Loading {".".repeat(loadingDots)}
        </span>
    );
};

export default Loading;