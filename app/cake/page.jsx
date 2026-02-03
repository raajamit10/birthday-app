'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function CakePage() {
  const router = useRouter()
  const [isCut, setIsCut] = useState(false)

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 100) setIsCut(true)
  }

  return (
    <main style={styles.container}>
      <AnimatePresence mode="wait">
        {!isCut ? (
          <motion.div key="uncut" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={styles.content}>
            <h1 style={styles.title}>Make a Wish! 🕯️</h1>
            <p style={styles.subtitle}>Swipe the cake to cut it</p>
            <motion.div drag="x" dragConstraints={{ left: 0, right: 200 }} onDragEnd={handleDragEnd} whileTap={{ cursor: 'grabbing' }} style={styles.cakeEmoji}>🎂</motion.div>
            <div style={styles.hint}>Drag right —→</div>
          </motion.div>
        ) : (
          <motion.div key="cut" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={styles.content}>
            <h1 style={styles.title}>Yay! Happy Birthday! 🎉</h1>
            <div style={styles.cakeEmoji}>🍰</div>
            <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} style={styles.button} onClick={() => router.push('/note')}>Read My Note →</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

const styles = {
  container: { minHeight: '100vh', background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '20px' },
  content: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  title: { fontSize: '2.5rem', color: '#fff', textShadow: '2px 2px 4px rgba(0,0,0,0.1)', marginBottom: '10px' },
  subtitle: { fontSize: '1.1rem', color: '#fff', marginBottom: '40px', opacity: 0.9 },
  cakeEmoji: { fontSize: '120px', cursor: 'grab', userSelect: 'none' },
  hint: { marginTop: '20px', color: '#fff', fontSize: '0.9rem', opacity: 0.6 },
  button: { marginTop: '40px', padding: '12px 30px', fontSize: '1.1rem', borderRadius: '30px', border: 'none', cursor: 'pointer', background: '#fff', color: '#ff758f', fontWeight: 'bold', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' },
}