import { motion, useScroll, useTransform } from 'framer-motion'

export function Header() {
  const { scrollYProgress } = useScroll()

  const headerY = useTransform(scrollYProgress, [0.188, 0.198], ['0%', '-100%'])

  return (
    <motion.header
      style={{ y: headerY }}
      className="fixed top-0 z-10 h-32 w-full bg-black"
    ></motion.header>
  )
}
