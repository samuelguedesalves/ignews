import styles from './styles.module.scss';

type SubscribeButtonProps = {
  priceId: string;
}

export const SubscribeButton: React.FC<SubscribeButtonProps> = () => {
  return (
    <button
      type="button"
      className={styles.subscribeButton}
    >
      Subscribe now
    </button>
  )
}