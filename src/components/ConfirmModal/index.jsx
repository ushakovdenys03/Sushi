import styles from "./confirmmodal.module.css";

export default function ConfirmModal({ onConfirm, onCancel, text }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3 className={styles.title}>Confirmation</h3>
        <p className={styles.text}>{text}</p>

        <div className={styles.buttons}>
          <button onClick={onCancel} className={styles.cancel}>
            Cancel
          </button>
          <button onClick={onConfirm} className={styles.confirm}>
            Yes, sure
          </button>
        </div>
      </div>
    </div>
  );
}
