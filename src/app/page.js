'use client'
import Image from 'next/image'
import styles from './home.module.css'

export default function Home() {
  return (
    <main >
      <div className={styles.desc}>
        Assiste à l'événement de football de l'année au Canada! Rejoins-nous pour des matchs passionnants entre les meilleures équipes nationales du monde entier. Vibrons ensemble au rythme des buts, de l'excitation et de la camaraderie. Ne manque pas cette opportunité de vivre le football à son meilleur! Réserve tes places dès maintenant! 🎉⚽️🌍
       </div>
     <div className={styles.imgContainer}>
     <Image src="https://images.pexels.com/photos/14020153/pexels-photo-14020153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="music" fill />
     </div>
    </main>
  )
}
