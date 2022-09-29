import { useEffect, useState } from "react"

// https://samuelkraft.com/blog/responsive-animation-framer-motion
export const useMediaQuery = query => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {

        const media = window.matchMedia(query)

        if (media.matches !== media) {
            setMatches(media.matches)
        }

        const listner = () => {
            setMatches(media.matches)
        }

        // https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
        media.addEventListener('change', listner)
        // cleanup function to remove EventListner
        return () => media.removeEventListener('change', listner)
    }, [matches, query])

    return matches
}