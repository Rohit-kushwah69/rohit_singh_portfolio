import { useEffect, useRef } from "react";
import gsap from "gsap";
import signature from "../../assets/signature/RohitSignature.svg";

const SEGMENTS = 14;

export default function Loader({ finish }) {
  const wrapperRef = useRef(null);
  const signatureRef = useRef(null);
  const segmentsRef = useRef([]);
  const penRef = useRef(null);
  const glowRef = useRef(null);
  const progressRef = useRef(null);
  const percentRef = useRef(null);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const segments = segmentsRef.current;

    gsap.set(signatureRef.current, {
      opacity: 1,
      scale: 1,
    });

    gsap.set(segments, {
      scaleX: 1,
    });

    gsap.set(penRef.current, {
      opacity: 0,
      left: "0%",
    });

    gsap.set(glowRef.current, {
      opacity: 0,
      scale: 0.6,
    });

    gsap.set(progressRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(percentRef.current, {
      textContent: "0",
    });

    gsap.set(bgTextRef.current, {
      opacity: 0,
      scale: 0.9,
    });

    /* ================================
       BACKGROUND TEXT
    ================================= */

    tl.to(bgTextRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "power3.out",
    });

    /* ================================
       SIGNATURE GLOW
    ================================= */

    tl.to(
      glowRef.current,
      {
        opacity: 0.35,
        scale: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7"
    );

    /* ================================
       PEN START
    ================================= */

    tl.to(penRef.current, {
      opacity: 1,
      duration: 0.25,
    });

    /* ================================
       SIGNATURE REVEAL
    ================================= */

    segments.forEach((segment, index) => {
      const duration = 1.8 / SEGMENTS;

      tl.to(
        segment,
        {
          scaleX: 0,
          duration,
          ease: "power1.inOut",
        },
        index === 0 ? undefined : "-=0.025"
      );

      tl.to(
        penRef.current,
        {
          left: `${((index + 1) / SEGMENTS) * 100}%`,
          duration,
          ease: "power1.inOut",
        },
        "<"
      );

      tl.to(
        progressRef.current,
        {
          scaleX: (index + 1) / SEGMENTS,
          duration,
          ease: "none",
        },
        "<"
      );

      tl.to(
        percentRef.current,
        {
          textContent: Math.round(
            ((index + 1) / SEGMENTS) * 100
          ),
          duration,
          snap: {
            textContent: 1,
          },
          ease: "none",
        },
        "<"
      );
    });

    /* ================================
       PEN EXIT
    ================================= */

    tl.to(penRef.current, {
      opacity: 0,
      scale: 0,
      duration: 0.25,
    });

    /* ================================
       FINAL GLOW
    ================================= */

    tl.to(glowRef.current, {
      opacity: 0.75,
      scale: 1.15,
      duration: 0.5,
      ease: "power2.out",
    });

    tl.to(
      signatureRef.current,
      {
        scale: 1.035,
        duration: 0.35,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      },
      "<"
    );

    /* ================================
       HOLD
    ================================= */

    tl.to({}, {
      duration: 0.7,
    });

    /* ================================
       EXIT
    ================================= */

    tl.to(
      wrapperRef.current,
      {
        opacity: 0,
        scale: 1.06,
        y: -15,
        duration: 0.75,
        ease: "power3.in",
      }
    );

    tl.to(
      bgTextRef.current,
      {
        opacity: 0,
        scale: 1.08,
        duration: 0.7,
        ease: "power2.in",
      },
      "<"
    );

    tl.to(
      glowRef.current,
      {
        opacity: 0,
        scale: 1.5,
        duration: 0.8,
        ease: "power2.in",
      },
      "<"
    );

    tl.call(() => {
      finish?.();
    });

    return () => tl.kill();
  }, [finish]);

  return (
    <div
      className="
        fixed
        inset-0
        z-[999999]
        overflow-hidden
        flex
        items-center
        justify-center
        bg-[#080808]
        text-white
      "
    >

      {/* ========================================
          HUGE BACKGROUND R
      ======================================== */}

      <div
        ref={bgTextRef}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
          select-none
        "
      >

        <span
          className="
            font-['Space_Grotesk']
            font-bold
            text-[420px]
            sm:text-[600px]
            md:text-[750px]
            leading-none
            tracking-[-60px]
            text-white/[0.018]
          "
        >
          R
        </span>

      </div>


      {/* ========================================
          TOP LEFT
      ======================================== */}

      <div
        className="
          absolute
          top-8
          left-7
          sm:top-10
          sm:left-12
        "
      >

        <p
          className="
            font-['Space_Grotesk']
            text-[8px]
            uppercase
            tracking-[5px]
            text-white/30
          "
        >
          Rohit Singh
        </p>

        <div
          className="
            mt-2
            w-8
            h-px
            bg-white/20
          "
        />

      </div>


      {/* ========================================
          TOP RIGHT
      ======================================== */}

      <div
        className="
          absolute
          top-8
          right-7
          sm:top-10
          sm:right-12
          flex
          items-center
          gap-3
        "
      >

        <span
          className="
            w-1.5
            h-1.5
            rounded-full
            bg-white/60
          "
        />

        <span
          className="
            font-['Space_Grotesk']
            text-[8px]
            uppercase
            tracking-[4px]
            text-white/30
          "
        >
          Portfolio
        </span>

      </div>


      {/* ========================================
          CENTER
      ======================================== */}

      <div
        ref={wrapperRef}
        className="
          relative
          z-20
          w-[300px]
          sm:w-[480px]
          md:w-[600px]
          lg:w-[700px]
        "
      >

        {/* GLOW */}

        <div
          ref={glowRef}
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[75%]
            h-[70%]
            rounded-full
            bg-white/10
            blur-[100px]
            pointer-events-none
          "
        />


        {/* SIGNATURE */}

        <img
          ref={signatureRef}
          src={signature}
          alt="Rohit Singh Signature"
          draggable="false"
          className="
            relative
            z-10
            block
            w-full
            object-contain
            select-none
            pointer-events-none
          "
          style={{
            filter: `
              brightness(0)
              saturate(100%)
              invert(95%)
              sepia(5%)
              saturate(100%)
              hue-rotate(0deg)
              brightness(105%)
              contrast(100%)
              drop-shadow(0 0 10px rgba(255,255,255,0.25))
            `,
          }}
        />


        {/* SEGMENTS */}

        <div
          className="
            absolute
            inset-0
            z-20
            flex
          "
        >

          {Array.from({
            length: SEGMENTS,
          }).map((_, index) => (

            <div
              key={index}
              ref={(element) => {
                segmentsRef.current[index] = element;
              }}
              className="
                h-full
                bg-[#080808]
              "
              style={{
                width: `${100 / SEGMENTS}%`,
                transformOrigin: "right center",
              }}
            />

          ))}

        </div>


        {/* PEN */}

        <div
          ref={penRef}
          className="
            absolute
            z-30
            top-1/2
            left-0
            w-2.5
            h-2.5
            rounded-full
            bg-white
            -translate-x-1/2
            -translate-y-1/2
            pointer-events-none
          "
          style={{
            boxShadow: `
              0 0 8px rgba(255,255,255,0.9),
              0 0 22px rgba(255,255,255,0.45)
            `,
          }}
        />

      </div>


      {/* ========================================
          BOTTOM LEFT
      ======================================== */}

      <div
        className="
          absolute
          bottom-8
          left-7
          sm:bottom-10
          sm:left-12
        "
      >

        <p
          className="
            font-['Space_Grotesk']
            text-[8px]
            uppercase
            tracking-[3px]
            text-white/20
          "
        >
          Data Scientist
        </p>

        <p
          className="
            mt-1
            font-['Space_Grotesk']
            text-[8px]
            uppercase
            tracking-[2px]
            text-white/10
          "
        >
          AI • ML • Development
        </p>

      </div>


      {/* ========================================
          BOTTOM RIGHT
      ======================================== */}

      <div
        className="
          absolute
          bottom-8
          right-7
          sm:bottom-10
          sm:right-12
          flex
          flex-col
          items-end
          gap-3
        "
      >

        <span
          ref={percentRef}
          className="
            font-['Space_Grotesk']
            text-[10px]
            tracking-[3px]
            text-white/40
          "
        >
          0
        </span>

        <div
          className="
            w-24
            sm:w-32
            h-px
            bg-white/10
            overflow-hidden
          "
        >

          <div
            ref={progressRef}
            className="
              w-full
              h-full
              bg-white/60
            "
          />

        </div>

      </div>


      {/* ========================================
          CENTER DECORATIVE DOTS
      ======================================== */}

      <div
        className="
          absolute
          left-1/2
          top-[18%]
          -translate-x-1/2
          flex
          items-center
          gap-2
        "
      >

        <span className="w-1 h-1 rounded-full bg-white/20" />

        <span className="w-1 h-1 rounded-full bg-white/10" />

        <span className="w-1 h-1 rounded-full bg-white/5" />

      </div>

    </div>
  );
}