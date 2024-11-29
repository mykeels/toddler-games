export const throttle = (func: (...args: unknown[]) => void, limit: number) => {
    let inThrottle: NodeJS.Timeout | false | undefined = undefined;
    return (...args: unknown[]) => {
        if (!inThrottle) {
            func(...args)
            inThrottle = setTimeout(() => inThrottle = false, limit)
        }
    }
}

export const debounce = (func: (...args: unknown[]) => void, limit: number) => {
    let timeout: NodeJS.Timeout | undefined = undefined;
    return (...args: unknown[]) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), limit);
    }
}