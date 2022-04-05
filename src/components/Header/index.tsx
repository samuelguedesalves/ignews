import { SingInButton } from '../SingInButton';
import styles from './styles.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer} >
      <div className={styles.headerContent} >
        <img src="./images/logo.svg" alt="ig.news" />

        <nav>
          <a className={styles.active} >Home</a>
          <a>Posts</a>
        </nav>

        <SingInButton />
      </div>
    </header>
  )
}