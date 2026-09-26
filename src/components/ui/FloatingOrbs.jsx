import { motion } from 'framer-motion';

const orbs = [
  { size: 280, x: '10%', y: '15%', color: 'rgba(51, 157, 255, 0.15)', delay: 0 },
  { size: 200, x: '75%', y: '25%', color: 'rgba(139, 92, 246, 0.12)', delay: 1 },
  { size: 160, x: '60%', y: '70%', color: 'rgba(51, 157, 255, 0.1)', delay: 2 },
];

export default function FloatingOrbs() {
  return (
    <motion.div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: orb.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </motion.div>
  );
}
