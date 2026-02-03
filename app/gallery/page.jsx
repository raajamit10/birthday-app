"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import NextImage from "next/image"; // Renamed to avoid conflicts with global Image constructor

const photos = [
  { id: 1, src: "/bg22.jpg", caption: "Mittar before College" },
  { id: 2, src: "/bg21.jpg", caption: "Radhee.." },
  { id: 3, src: "/bg33.jpg", caption: "Cute Sunflower" },
  { id: 4, src: "/bg11.jpg", caption: "Jacket Paglu😊" },
  { id: 5, src: "/bg24.jpg", caption: "Icecream Paglu" },
  { id: 6, src: "/bg5.jpg", caption: "Always better together 👫" },
  { id: 7, src: "/bg30.jpg", caption: "Gale me Kharash😂" },
  { id: 8, src: "/bg25.jpg", caption: "Chearsss📸" },
  { id: 9, src: "/bg16.jpg", caption: "Selfie Paglu" },
  { id: 10, src: "/bg1.jpg", caption: "Mittar🥹" },    
  { id: 11, src: "/bg23.jpg", caption: "Dekho Na Guys🤪" },
  { id: 12, src: "/bg7.jpg", caption: "Dosa Paglu" },
  { id: 13, src: "/bg2.jpg", caption: "First Hangout" },
  { id: 14, src: "/bg34.jpg", caption: "Anuskha paglu" },
  { id: 15, src: "/bg8.jpg", caption: "Hasti rhe" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function GalleryPage() {
  const router = useRouter();

  return (
    <main style={styles.container}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={styles.title}
      >
        Our Beautiful Memories 📸
      </motion.h1>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={styles.grid}
      >
        {photos.map((photo, index) => (
          <motion.div 
            key={photo.id} 
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
            style={styles.polaroid}
          >
            {/* Using next/image for Optimization */}
            <div style={styles.imageWrapper}>
              <NextImage 
                src={photo.src} 
                alt={photo.caption}
                fill // Fills the wrapper container
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                priority={index < 3} // Loads first 3 images immediately for better LCP
              />
            </div>
            <p style={styles.caption}>{photo.caption}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => router.push("/final")}
        style={styles.button}
      >
        Wait, theres more! 🎂
      </motion.button>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#fff0f3", // Theme background
    padding: "40px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "#ff4d6d",
    fontFamily: "Georgia, serif",
    marginBottom: "40px",
    fontSize: "2rem",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    width: "100%",
    maxWidth: "1100px",
    marginBottom: "50px",
  },
  polaroid: {
    background: "white",
    padding: "15px",
    boxShadow: "0 8px 15px rgba(0,0,0,0.08)",
    borderRadius: "2px",
    textAlign: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "260px",
    marginBottom: "15px",
    overflow: "hidden",
  },
  caption: {
    fontFamily: "cursive", 
    color: "#4a0e0e",
    fontSize: "1.05rem",
    margin: "10px 0 20px 0",
  },
  button: {
    padding: "14px 40px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "30px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 5px 15px rgba(255, 77, 109, 0.4)",
  },
};