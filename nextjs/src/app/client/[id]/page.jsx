import Layout from "@/components/Layout";
import Header from "@/components/Header";
import styles from "@/app/styles/Client.module.css";

export default function ClientPage({ params }) {
  const { id } = params

  return (
    <Layout>
      <Header titulo="Navegação dinâmica" />
      <div className={styles.client}>
        <div className={styles.propriedades}>
          <div className={styles.attr}>Id</div>
          <div className={styles.attr}>{id}</div>
        </div>
        <div className={styles.propriedades}>
          <div className={styles.attr}>Nome</div>
          <div className={styles.attr}>Noki</div>
        </div>
        <div className={styles.propriedades}>
          <div className={styles.attr}>Idade</div>
          <div className={styles.attr}>23</div>
        </div>
        <div className={styles.propriedades}>
          <div className={styles.attr}>Gênero</div>
          <div className={styles.attr}>Masculino</div>
        </div>
      </div>
    </Layout>
  )
}