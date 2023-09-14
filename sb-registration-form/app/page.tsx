import styles from './page.module.css';
import RegistrationForm from './components/RegistrationForm';

// TODO move all of this into a <Form> component that will get displayed here.

export default function Home() {
  return (
    <main className={styles.main}>
      <RegistrationForm />
    </main>
  );
}
