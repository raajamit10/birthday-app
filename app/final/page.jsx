'use client'
import { motion } from 'framer-motion'

export default function FinalNote() {
  return (
    <main style={styles.container}>
      {/* Soft, drifting background circles for a "Peace" feel */}
      <div style={styles.blobs}>
        <div style={styles.blob1} />
        <div style={styles.blob2} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
        style={styles.content}
      >
        <h1 style={styles.title}>Stay Happy & Stay Healthy</h1>
        <div style={styles.divider} />
        <p style={styles.message}>
          Always be the Strong Independent Women
        </p>
        <p style={styles.subtext}>
          Thank you for being my Friend. <br />
          Happy Birthday Chanchala.
        </p>
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
          style={styles.heart}
        >
          🌻
        </motion.div>
      </motion.div>
    </main>
  )
}

const styles = {
  container: { height: '100vh', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' },
  content: { textAlign: 'center', zIndex: 10, padding: '20px' },
  title: { fontSize: '1rem', letterSpacing: '8px', textTransform: 'uppercase', color: '#adb5bd', marginBottom: '20px' },
  divider: { width: '40px', height: '1px', background: '#adb5bd', margin: '0 auto 40px' },
  message: { fontSize: '1.8rem', fontStyle: 'italic', color: '#495057', lineHeight: '1.6', maxWidth: '600px', marginBottom: '30px' },
  subtext: { fontSize: '1rem', color: '#6c757d', lineHeight: '1.8' },
  heart: { marginTop: '50px', fontSize: '2rem' },
  blobs: { position: 'absolute', width: '100%', height: '100%', filter: 'blur(80px)', opacity: 0.4, zIndex: 1 },
  blob1: { position: 'absolute', top: '20%', left: '20%', width: '300px', height: '300px', background: '#ffecd2', borderRadius: '50%' },
  blob2: { position: 'absolute', bottom: '20%', right: '20%', width: '350px', height: '350px', background: '#fcb69f', borderRadius: '50%' }
}