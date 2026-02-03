'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    const targetDate = new Date('2026-02-04T00:00:00')
    const timer = setInterval(() => {
      const now = new Date()
      const diff = targetDate - now

      if (diff <= 0) {
        clearInterval(timer)
        router.push('/cake')
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [router])

  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ff9a9e, #fecfef)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Something Special is Coming... 💖</h1>
      {timeLeft && (
        <div style={{ display: 'flex', gap: '20px', fontSize: '1.5rem', background: 'rgba(255,255,255,0.2)', padding: '20px', borderRadius: '15px' }}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit}><strong>{value}</strong><div style={{ fontSize: '0.8rem' }}>{unit.toUpperCase()}</div></div>
          ))}
        </div>
      )}
      <button onClick={() => router.push('/cake')} style={{ marginTop: '30px', padding: '10px 25px', borderRadius: '25px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Next →</button>
    </main>
  )
}