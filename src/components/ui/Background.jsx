import { motion } from "framer-motion";

const blobs = [
  {
    id: 1,
    className:
      "w-[450px] h-[450px] bg-white/5 top-[-120px] left-[-120px]",
    duration: 12,
  },
  {
    id: 2,
    className:
      "w-[350px] h-[350px] bg-white/5 bottom-[-80px] right-[-80px]",
    duration: 16,
  },
];

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Grid */}

      <div className="absolute inset-0 grid-bg" />

      {/* Noise */}

      <div className="absolute inset-0 noise-bg" />

      {/* Animated Blobs */}

      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: blob.duration,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full blur-[140px] ${blob.className}`}
        />
      ))}
    </div>
  );
}