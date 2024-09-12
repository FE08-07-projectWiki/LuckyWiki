import ProfileType from '@/types/types';
import Image from 'next/image';
import styles from './WikiTitle.module.scss';
import { useCopyLink } from '@/hooks/useCopyLink';

interface WikiTitleProps {
  profile: ProfileType;
  onOpenModalButtonClick: () => void;
}

export default function WikiTitle({ profile, onOpenModalButtonClick }: WikiTitleProps) {
  const { copyLink } = useCopyLink();
  const linkURL = `https://www.wikied.kr/wiki/${profile.code}`;

  const handleCopyButtonClick = () => {
    copyLink(linkURL);
  };

  return (
    <div className={styles.wikiTitle}>
      <header>
        <h1>{profile.name}</h1>
        <button onClick={onOpenModalButtonClick}>위키 참여하기</button>
      </header>
      <button className={styles.linkButton} onClick={handleCopyButtonClick}>
        <Image src="/icon/icon-link.png" alt="링크 아이콘" width={20} height={20} />
        <p>{linkURL}</p>
      </button>
    </div>
  );
}
