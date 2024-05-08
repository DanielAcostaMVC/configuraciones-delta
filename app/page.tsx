import Link from 'next/link';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Button from '@mui/material/Button';
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
      <Link
            href="/empresa"
          >
        <p>
          Get started by <Button endIcon={<AirportShuttleIcon/>}>empresa</Button>
        </p>
        </Link>
      </div>

      

      
    </main>
  );
}
