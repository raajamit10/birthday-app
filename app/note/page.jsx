'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const messageLines = ["Hey 💖", "I just want you to know something...", "You are genuinely one of the most important people in my life.", "You make everything lighter, happier, and better.", "On your special day, I hope you smile a little extra 😊", "Because you deserve all the happiness in the world.", "Happy Birthday 🎉🎂"]

export default function NotePage() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (isOpen && visibleLines < messageLines.length) {
      const timer = setTimeout(() => setVisibleLines(v => v + 1), 700)
      return () => clearTimeout(timer)
    }
  }, [isOpen, visibleLines])

  return (
    <main style={styles.container}>
      <motion.h1 animate={{ opacity: isOpen ? 0.5 : 1, scale: isOpen ? 0.95 : 1 }} style={styles.header}>A Message from My Heart ❤️</motion.h1>
      <div style={styles.stage}>
        <motion.div animate={{ x: isOpen ? -200 : 0 }} transition={{ type: 'spring', stiffness: 40, damping: 14 }} style={styles.envelopeContainer} onClick={() => !isOpen && setIsOpen(true)}>
          <div style={styles.envelopeBack} /><div style={styles.envelopeFront}>{!isOpen && <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={styles.tapText}>Tap to Open 💌</motion.div>}</div>
        </motion.div>
        <motion.div initial={{ x: 0, opacity: 0 }} animate={{ x: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }} transition={{ type: 'spring', stiffness: 45, damping: 14, delay: 0.15 }} style={styles.letter}>
          <div style={styles.letterInner}>
            {messageLines.slice(0, visibleLines).map((line, i) => (<motion.p key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} style={styles.text}>{line}</motion.p>))}
            {visibleLines === messageLines.length && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.signature}>— Always Yours ❤️</motion.p>}
          </div>
        </motion.div>
      </div>
      {visibleLines === messageLines.length && (
        <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05 }} onClick={() => router.push('/gallery')} style={styles.button}>See Our Memories →</motion.button>
      )}
    </main>
  )
}

const styles = {
  container: { height: '100vh', background: '#fff0f3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: '20px' },
  header: { color: '#ff4d6d', marginBottom: '40px', fontSize: '1.8rem', textAlign: 'center' },
  stage: { position: 'relative', width: '100%', maxWidth: '900px', height: '420px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'visible' },
  envelopeContainer: { position: 'absolute', width: '320px', height: '220px', cursor: 'pointer', zIndex: 10 },
  envelopeBack: { position: 'absolute', inset: 0, background: '#e05771', borderRadius: '14px' },
  envelopeFront: { position: 'absolute', bottom: 0, width: '100%', height: '70%', background: '#ff758f', borderRadius: '0 0 14px 14px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 12px 25px rgba(0,0,0,0.15)' },
  letter: { position: 'absolute', width: '340px', height: '380px', background: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 15px 40px rgba(0,0,0,0.15)', zIndex: 5 },
  letterInner: { height: '100%', overflowY: 'auto', fontFamily: 'Georgia, serif', color: '#4a0e0e' },
  text: { fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '12px' },
  signature: { textAlign: 'right', fontWeight: 'bold', color: '#ff4d6d', marginTop: '24px' },
  tapText: { color: '#fff', fontWeight: 'bold', fontSize: '1.2rem' },
  button: { marginTop: '30px', padding: '14px 34px', background: '#ff4d6d', color: '#fff', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 6px 18px rgba(255,77,109,0.35)' },
}