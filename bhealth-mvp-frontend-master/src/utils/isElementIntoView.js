export default function isScrolledIntoView (el, { full = false, shift = 0 } = {}) {
    if(!el) {
        return true
    }
    
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;

    if (full) {
        // Only completely visible elements return true:
        return (elemTop + shift >= 0) && (elemBottom - shift <= window.innerHeight);
    } else {
        // Partially visible elements return true:
        return (elemTop + shift) < window.innerHeight && elemBottom >= 0;
    }
}
