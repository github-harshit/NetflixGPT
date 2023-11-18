import React from 'react'
import styles from "../styles/videoTitle.module.css"
function VideoTitle({title, overview}) {
  return (
    <div className={styles.container}>
        <h1>{title}</h1>
        <p>{overview}</p>
        <div className={styles.buttons}>
            <button className={styles.play}> ▶ Play</button>
            <button className={styles.info}> ❕More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle