import { useEffect } from "react";

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                if (!ref.current || isRefContains(ref, event.target)) {
                    return;
                }
                handler(event);
            };
            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);
            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        [ref, handler]
    );
}

function isRefContains(ref, target) {
    console.log(ref)
    if (Array.isArray(ref)) {
        for (let i = 0; i < ref.length; i++) {
            const element = ref[i];

            console.log('adsas')

            if (element.current.contains(target)) {
                return true;
            }
        }
        return false
    }
    return ref.current.contains(target);
}

export { useOnClickOutside }