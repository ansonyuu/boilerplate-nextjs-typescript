import styles from "./Home.module.scss";
import data from "../../data/content.json";

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <h1>{data.home.title}</h1>

        <h3>{data.home.subtitle}</h3>
        <p>{data.home.text}</p>
      </div>
    </section>
  );
}

export default Home;
