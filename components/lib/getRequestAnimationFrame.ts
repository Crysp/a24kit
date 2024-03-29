const availablePrefixs = ['moz', 'ms', 'webkit'];
const frameDuration = 16;


function requestAnimationFramePolyfill() {
    let lastTime = 0;
    return (callback: (time: number) => void) => {
        const currTime = new Date().getTime();
        const timeToCall = Math.max(0, frameDuration - (currTime - lastTime));
        const id = window.setTimeout(() => callback(currTime + timeToCall), timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}

export default function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return () => {};
    }
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame.bind(window);
    }

    const prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];

    return prefix
        ? window[`${prefix}RequestAnimationFrame`]
        : requestAnimationFramePolyfill();
}

export function cancelRequestAnimationFrame(this: any, id: number) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    const prefix = availablePrefixs.filter(key => (
        `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window
    ))[0];

    return prefix
        ? (
            window[`${prefix}CancelAnimationFrame`]
            || window[`${prefix}CancelRequestAnimationFrame`]
        ).call(this, id)
        : clearTimeout(id);
}
