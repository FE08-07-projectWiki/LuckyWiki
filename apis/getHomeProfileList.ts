import ProfileType, { ProfileCardData } from '@/types/types';
import { getProfile } from './getProfile';

const PAGE_SIZE = '8';

export const getHomeProfileList = async (): Promise<ProfileCardData[] | undefined> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/profiles?pageSize=${PAGE_SIZE}`);

    if (!response.ok) {
      return undefined;
    }

    const ProfileCodeList = await response
      .json()
      .then(res => res.list.map((profile: Record<string, string>) => profile.code));

    // 프로필 코드로 메인 페이지에 표출할 8개의 프로필을 서버에서 각각 받아와야 함
    const profileDetailList = await Promise.all(
      ProfileCodeList.map((code: string) => getProfile(code).then(result => result)),
    );

    // 제공된 API에서 Profile을 리스트로 조회하는 것과 하나를 조회 하는 것이 서로 다른 데이터를 주기 때문에
    // 메인 페이지에서 상세 데이터를 가져와야 하고, 필요없는 데이터를 거르는 작업이 필요 했음
    const result = profileDetailList.map((profileDetail: ProfileType) => {
      // content, securityQuestion은 사용되지 않음
      // delete는 타입 안정성이 떨어지며, 기존 객체의 불변성을 유지할 수 없기에 사이드 이펙트 발생 여지가 있기에 구조분해할당 사용
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, securityQuestion, ...restProfile } = profileDetail;
      return {
        ...restProfile,
      };
    });

    return result;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return undefined;
  }
};
