import styles from './ProfileList.module.scss';
import ProfileCard from './ProfileCard';
import { useEffect, useState } from 'react';
import { ProfileCardData } from '@/types/types';
import { getHomeProfileList } from '@/apis/getHomeProfileList';

export default function ProfileList() {
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
    <section className={styles.cardListContainer}>
      {profileList?.map(profile => {
        // ProfileCard에서 id는 사용되지 않음
        const { id, ...restProfile } = profile;
        return <ProfileCard key={id} profile={restProfile} />;
      })}
    </section>
  );
}
