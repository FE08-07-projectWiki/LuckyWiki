import Link from 'next/link';
import React, { useEffect } from 'react';
import { useValidForm, ValidationConfig } from '@/hooks/useValidForm';
import ValidInput from '@/components/@shared/input/ValidInput';
import { useAuth } from '@/contexts/AuthProvider';
import { FieldValues } from 'react-hook-form';
import { VALID_OPTIONS } from '@/constants/validOptions';

const loginValidationConfig: ValidationConfig = {
  email: {
    required: 'e-mail을 입력해주세요',
    pattern: VALID_OPTIONS.emailPattern,
  },
  password: {
    required: '비밀번호를 입력해주세요',
    pattern: VALID_OPTIONS.passwordPattern,
  },
};

export default function LogInPage() {
  const { logIn } = useAuth();

  const { register, errors, handleSubmit, setValue } = useValidForm({ validationConfig: loginValidationConfig });

  const handleFormSubmit = async (formData: FieldValues) => {
    if (formData.email && formData.password) {
      const { email, password } = formData;
      await logIn({ email, password });
    }
  };

  useEffect(() => {
    // 테스트 계정 미리 입력을 위한 useEffect
    setValue('email', process.env.NEXT_PUBLIC_TEST_ACCOUNT_ID);
    setValue('password', process.env.NEXT_PUBLIC_TEST_ACCOUNT_PW);
  }, []);

  return (
    <main className={'auth-container'}>
      <h3 className={'text-2xl'}>로그인</h3>

      <form className={'form'} onSubmit={handleSubmit(handleFormSubmit)}>
        <ValidInput
          label={'이메일'}
          type={'email'}
          htmlFor={'email'}
          error={errors.email}
          message={errors.email?.message}
          register={register.email}
          placeholder={'이메일을 입력해주세요'}
        />

        <ValidInput
          label={'비밀번호'}
          type={'password'}
          htmlFor={'password'}
          error={errors.password}
          message={errors.password?.message}
          register={register.password}
          placeholder={'비밀번호를 입력해주세요'}
        />

        <button className={'button'}>로그인</button>

        <Link className={'text-xs'} href={'/signup'}>
          회원가입
        </Link>
      </form>
    </main>
  );
}
