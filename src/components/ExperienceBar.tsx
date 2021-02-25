import styles from "../styles/components/experienceBar.module.css"

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 px</span>
            <div>
                <div style={{width: '60%'}}>
                    <span className={styles.currentExperience} style={{ left: '50%' }}>
                        300 xp
                    </span>
                </div>
            </div>
            <span>600 px</span>
        </header>
    );
}