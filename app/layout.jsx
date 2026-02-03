export const metadata = {
  title: 'Happy Birthday! ❤️',
  description: 'A special surprise for a special person',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {/* This wrapper ensures a consistent feel across all steps */}
        <div style={globalStyles.mainWrapper}>
          {children}
        </div>
      </body>
    </html>
  )
}

const globalStyles = {
  mainWrapper: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    minHeight: '100vh',
    width: '100vw',
  }
}