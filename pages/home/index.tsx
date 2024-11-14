import styles from './Home.module.scss';
import classNames from 'classnames';
import { Bounce, Fade, JackInTheBox } from 'react-awesome-reveal';
import Footer from '@/components/@shared/footer/Footer';
import ProfileList from '@/components/home/ProfileList';

export default function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <section className={styles.paragraph}>
          <Fade triggerOnce>
            <h1 className={styles.textXl}>
              친구들이
              <br />내 위키를 만들어준다니,
            </h1>
          </Fade>
          <Bounce delay={500} triggerOnce>
            <h1 className={styles.textXl}>
              완전 <span className={classNames(styles.textXl, styles.cloverText, styles.green)}>럭키위키</span>자나!?
            </h1>
          </Bounce>
          <JackInTheBox delay={900} triggerOnce>
            <p className={classNames(styles.description, styles.textMd)}>
              친구들이 만들어 준 나만의 <span className={classNames(styles.cloverText, styles.green)}>위키</span>
              <br />
              친구들의 위키도 구경해보세요<span className={styles.cloverText}>!</span>
            </p>
          </JackInTheBox>
        </section>
        <ProfileList />
      </div>
      <Footer />
    </>
  );
}
