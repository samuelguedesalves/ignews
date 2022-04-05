import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export const SingInButton = () => {
  const isUserLoggedIn = true;


  return isUserLoggedIn ? (
    <button
      type="button"
      className={styles.singInButton}
    >
      <FaGithub color="#04d361" />
      Samuel Guedes
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      type="button"
      className={styles.singInButton}
    >
      <FaGithub color="#eba417" />
      Sing in with GitHub
    </button>
  );
}