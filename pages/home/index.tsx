import ProfileCard from '@/components/home/ProfileCard';
import { ProfileCardData } from '@/types/types';
import styles from './Home.module.scss';
import classNames from 'classnames';
import { Bounce, Fade, JackInTheBox } from 'react-awesome-reveal';
import Footer from '@/components/@shared/footer/Footer';
import { useEffect, useState } from 'react';
import { getHomeProfileList } from '@/apis/getHomeProfileList';

export default function Home() {
  const [profileList, setProfileList] = useState<ProfileCardData[]>([]);

  useEffect(() => {
    const getProfileList = async () => {
      const result = await getHomeProfileList();
      if (result) {
        setProfileList(result);
      }
    };

    getProfileList();
  }, []);

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
        <section className={styles.cardListContainer}>
          {profileList?.map((profile, index) => {
            // ProfileCard에서 id는 사용되지 않음
            const { id, ...restProfile } = profile;
            return <ProfileCard key={id} profile={restProfile} index={index} />;
          })}
        </section>
      </div>
      <Footer />
    </>
  );
}
