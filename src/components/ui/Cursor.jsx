"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Cursor() {

    // ============================
    // Refs — sab hooks upar, koi condition ke bina
    // ============================

    const glowRef = useRef(null);
    const ringRef = useRef(null);
    const dotRef = useRef(null);
    const rippleRef = useRef(null);

    // ============================
    // State
    // ============================

    const [isTouch, setIsTouch] = useState(false);
    const [hover, setHover] = useState(false);
    const [cursorText, setCursorText] = useState("");

    // ============================
    // Touch Detection
    // ============================

    useEffect(() => {
        if (typeof window === "undefined") return;
        const media = window.matchMedia("(pointer: coarse)");
        setIsTouch(media.matches);
    }, []);

    // ============================
    // Mouse Move — seedha GSAP quickTo se drive hota hai
    // (state se re-render nahi hota, sirf DOM transform update hota hai — zyada smooth aur halka)
    // ============================

    useEffect(() => {
        if (isTouch) return;

        const glowX = gsap.quickTo(glowRef.current, "x", { duration: 0.5, ease: "power2.out" });
        const glowY = gsap.quickTo(glowRef.current, "y", { duration: 0.5, ease: "power2.out" });

        const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.2, ease: "power3.out" });
        const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.2, ease: "power3.out" });

        const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.08, ease: "power4.out" });
        const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.08, ease: "power4.out" });

        const rippleX = gsap.quickTo(rippleRef.current, "x", { duration: 0.3, ease: "power2.out" });
        const rippleY = gsap.quickTo(rippleRef.current, "y", { duration: 0.3, ease: "power2.out" });

        const moveCursor = (e) => {
            glowX(e.clientX);
            glowY(e.clientY);
            ringX(e.clientX);
            ringY(e.clientY);
            dotX(e.clientX);
            dotY(e.clientY);
            rippleX(e.clientX);
            rippleY(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [isTouch]);

    // ============================
    // Hover Detection
    // ============================

    useEffect(() => {
        if (isTouch) return;

        const handleOver = (e) => {
            const target = e.target;
            if (!(target instanceof Element)) return;

            const el = target.closest("a,button,img,video,.cursor-hover");
            if (!el) return;

            setHover(true);

            switch (el.tagName) {
                case "IMG":
                    setCursorText("VIEW");
                    break;
                case "VIDEO":
                    setCursorText("PLAY");
                    break;
                default:
                    setCursorText("OPEN");
            }
        };

        const handleOut = (e) => {
            const to = e.relatedTarget;
            if (to instanceof Element && to.closest("a,button,img,video,.cursor-hover")) {
                return;
            }
            setHover(false);
            setCursorText("");
        };

        document.addEventListener("mouseover", handleOver);
        document.addEventListener("mouseout", handleOut);

        return () => {
            document.removeEventListener("mouseover", handleOver);
            document.removeEventListener("mouseout", handleOut);
        };
    }, [isTouch]);

    // ============================
    // Touch devices par kuch bhi render nahi — sab hooks ke baad
    // ============================

    if (isTouch) return null;

    return (
        <>
            {/* Ambient glow — slowest, sabse peeche */}
            <motion.div
                ref={glowRef}
                animate={{
                    scale: hover ? 1.8 : 1,
                    opacity: hover ? 0.6 : 0.2,
                }}
                transition={{ duration: 0.3 }}
                className="
                fixed
                top-0
                left-0
                w-56
                h-56
                rounded-full
                bg-cyan-400/15
                blur-[120px]
                pointer-events-none
                z-[9995]
                -translate-x-1/2
                -translate-y-1/2
                "
            />

            {/* Hover ripple — sirf hover state me visible, halka pulse */}
            <motion.div
                ref={rippleRef}
                animate={{
                    scale: hover ? [1, 1.5, 1] : 1,
                    opacity: hover ? [0.3, 0, 0.3] : 0,
                }}
                transition={{
                    duration: 1.2,
                    repeat: hover ? Infinity : 0,
                    ease: "easeInOut",
                }}
                className="
                fixed
                top-0
                left-0
                w-24
                h-24
                rounded-full
                border
                border-cyan-400/20
                pointer-events-none
                z-[9994]
                -translate-x-1/2
                -translate-y-1/2
                "
            />

            {/* Ring with label */}
            <motion.div
                ref={ringRef}
                animate={{
                    width: hover ? 70 : 38,
                    height: hover ? 70 : 38,
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                }}
                className="
                fixed
                top-0
                left-0
                rounded-full
                border-2
                border-white/30
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                justify-center
                pointer-events-none
                z-[9998]
                -translate-x-1/2
                -translate-y-1/2
                shadow-[0_0_50px_rgba(34,211,238,.4)]
                "
            >
                <motion.span
                    animate={{
                        opacity: hover ? 1 : 0,
                        scale: hover ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.2 }}
                    className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[4px]
                    text-cyan-300
                    select-none
                    "
                >
                    {cursorText}
                </motion.span>
            </motion.div>

            {/* Core dot — fastest, sabse aage */}
            <motion.div
                ref={dotRef}
                animate={{
                    scale: hover ? 0.4 : 1,
                    backgroundColor: hover ? "#22d3ee" : "#ffffff",
                }}
                transition={{
                    type: "spring",
                    stiffness: 600,
                    damping: 25,
                }}
                className="
                fixed
                top-0
                left-0
                w-3
                h-3
                rounded-full
                pointer-events-none
                z-[10000]
                -translate-x-1/2
                -translate-y-1/2
                shadow-[0_0_20px_rgba(34,211,238,.9)]
                "
            />
        </>
    );
}