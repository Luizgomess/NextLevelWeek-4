import styles from '../styles/components/profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/luizgomess.png" alt="foto de um ser muito lindo"/>
            <div>
                <strong>Luiz Gomes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}