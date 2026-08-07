import { useEffect, useRef } from "react";
import gsap from "gsap";
import signature from "../../assets/signature/RohitSignature.svg";

const SEGMENTS = 10; // jitne zyada segments, utna smooth "letter by letter" feel

export default function Loader({ finish }) {
    const wrapperRef = useRef(null);
    const imgRef = useRef(null);
    const segmentRefs = useRef([]);
    const penTipRef = useRef(null);
    const glowRef = useRef(null);
    const curtainLeftRef = useRef(null);
    const curtainRightRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        const segments = segmentRefs.current;

        gsap.set(imgRef.current, { opacity: 1 });
        gsap.set(segments, { scaleX: 1 });
        gsap.set(glowRef.current, { opacity: 0, scale: 0.5 });
        gsap.set(penTipRef.current, { opacity: 0, left: "0%" });
        gsap.set(curtainLeftRef.current, { xPercent: 0 });
        gsap.set(curtainRightRef.current, { xPercent: 0 });

        // 0) Curtain open
        tl.to(curtainLeftRef.current, { xPercent: -100, duration: 1, ease: "power3.inOut" });
        tl.to(curtainRightRef.current, { xPercent: 100, duration: 1, ease: "power3.inOut" }, "<");

        // 1) Glow breathe in
        tl.to(glowRef.current, { opacity: 0.5, scale: 1, duration: 1, ease: "power2.out" }, "-=0.5");

        // 2) Pen tip fade in at start
        tl.to(penTipRef.current, { opacity: 1, duration: 0.3 });

        // 3) Har segment ek ek karke "likha" jaata hai (right se scaleX 0 karte hue reveal)
        segments.forEach((seg, i) => {
            tl.to(
                seg,
                {
                    scaleX: 0,
                    duration: 1.6 / SEGMENTS,
                    ease: "power1.inOut",
                },
                i === 0 ? undefined : "-=0.02" // thoda overlap, smooth continuous feel
            );
            // Pen tip us segment ki position tak move ho
            tl.to(
                penTipRef.current,
                {
                    left: `${((i + 1) / SEGMENTS) * 100}%`,
                    duration: 1.6 / SEGMENTS,
                    ease: "power1.inOut",
                },
                "<"
            );
        });

        // 4) Likhna complete hone ke baad pen tip fade out
        tl.to(penTipRef.current, { opacity: 0, duration: 0.3 });

        // 5) Ink-set glow pulse
        tl.to(glowRef.current, { opacity: 0.9, scale: 1.15, duration: 0.6, ease: "power2.out" });

        // 6) Settle pulse
        tl.to(imgRef.current, {
            scale: 1.04,
            duration: 0.35,
            ease: "power2.out",
            yoyo: true,
            repeat: 1,
        });

        // 7) Hold
        tl.to({}, { duration: 0.6 });

        // 8) Exit
        tl.to(wrapperRef.current, {
            opacity: 0,
            y: -20,
            scale: 1.08,
            duration: 0.9,
            ease: "power2.in",
        });
        tl.to(glowRef.current, { opacity: 0, scale: 1.4, duration: 0.9, ease: "power2.in" }, "<");

        tl.call(finish);

        return () => tl.kill();
    }, [finish]);

    return (
        <div
            className="
            fixed inset-0 bg-pink-500
            flex items-center justify-center
            overflow-hidden z-[999999]
            "
        >
            {/* Curtain panels */}
            <div ref={curtainLeftRef} className="absolute top-0 left-0 w-1/2 h-full bg-black z-[999998]" />
            <div ref={curtainRightRef} className="absolute top-0 right-0 w-1/2 h-full bg-black z-[999998]" />

            {/* Glow behind signature */}
            <div
                ref={glowRef}
                className="absolute w-[700px] h-[300px] bg-yellow-300/35 blur-[150px] rounded-full -z-10"
            />

            {/* Signature with segmented reveal */}
            <div
                ref={wrapperRef}
                className="relative w-[520px] md:w-[650px] z-10"
            >
                <img
                    ref={imgRef}
                    src={signature}
                    alt="Rohit Signature"
                    className="w-full object-contain select-none pointer-events-none block"
                    style={{
                        filter: `
                            brightness(0) saturate(100%) invert(82%) sepia(94%)
                            saturate(1400%) hue-rotate(358deg) brightness(105%) contrast(102%)
                            drop-shadow(0 0 20px #FFD700) drop-shadow(0 0 40px #FFD700)
                        `,
                    }}
                />

                {/* Segments — har ek image ke upar background-color block, right-anchored scaleX se reveal hota hai */}
                <div className="absolute inset-0 flex">
                    {Array.from({ length: SEGMENTS }).map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => (segmentRefs.current[i] = el)}
                            className="h-full bg-pink-500"
                            style={{
                                width: `${100 / SEGMENTS}%`,
                                transformOrigin: "right center",
                            }}
                        />
                    ))}
                </div>

                {/* Pen tip glowing dot — likhte hue aage aage chalta hai */}
                <div
                    ref={penTipRef}
                    className="absolute top-1/2 w-3 h-3 rounded-full bg-yellow-200 -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                    style={{
                        boxShadow: "0 0 12px 4px rgba(255,215,0,0.9)",
                    }}
                />
            </div>
        </div>
    );
}