import { motion, useScroll, useTransform } from 'framer-motion'

export function FirstAndSecond() {
  const { scrollYProgress } = useScroll()

  const frameOpacity = useTransform(scrollYProgress, [0.196, 0.198], [0, 1])
  const frameScale = useTransform(scrollYProgress, [0.558, 0.627], [0.511, 0.8])

  return (
    <motion.div className="sticky left-0 right-0 top-0 h-screen bg-green-800">
      <First />

      <motion.div
        style={{ opacity: frameOpacity, scale: frameScale }}
        className="absolute left-0 right-0 top-0 h-screen rounded-md border-4 border-white"
      />
    </motion.div>
  )
}

const First: React.FC = () => {
  const { scrollYProgress } = useScroll()

  const firstRadius = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [0, 4, 4, 0],
  )

  const firstScale = useTransform(
    scrollYProgress,
    [0.198, 0.264, 0.558, 0.627],
    [1, 0.511, 0.511, 1],
  )

  const leftSideHeight = useTransform(
    scrollYProgress,
    [0, 0.058],
    ['20vh', '100vh'],
  )

  const rightSideScale = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    [0, 0.511],
  )

  const rightSideY = useTransform(
    scrollYProgress,
    [0.047, 0.093],
    ['58vh', '0vh'],
  )

  const offsetY = useTransform(
    scrollYProgress,
    [0.328, 0.397, 0.461, 0.53],
    ['0%', '-100%', '-100%', '-200%'],
  )

  return (
    <motion.div
      style={{ scale: firstScale, borderRadius: firstRadius }}
      className="sticky left-0 right-0 top-0 h-screen overflow-hidden bg-red-600"
    >
      <motion.div
        style={{
          y: offsetY,
        }}
        className="h-full w-full"
      >
        <div className="flex h-full items-end bg-zinc-100">
          <motion.div
            style={{ height: leftSideHeight }}
            className="h-full w-1/2 bg-green-800"
          />
          <div className="h-full w-1/2">
            <motion.div
              style={{ y: rightSideY, scale: rightSideScale }}
              className="h-full w-full bg-green-800"
            />
          </div>
        </div>
        <div className="h-full w-full bg-amber-950"></div>
        <div className="h-full w-full bg-cyan-600"></div>
      </motion.div>
    </motion.div>
  )
}
