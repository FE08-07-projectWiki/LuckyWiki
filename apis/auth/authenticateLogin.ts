interface AuthenticateLogInProps {
  email: string;
  password: string;
}

interface AuthenticateLogInReturn {
  user: {
    id: number;
    name: string;
    teamId: '8-7';
    createdAt: string;
    updatedAt: string;
    profile: {
      id: number;
      code: string;
    };
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}

export const authenticateLogIn = async ({
  email,
  password,
}: AuthenticateLogInProps): Promise<AuthenticateLogInReturn | undefined> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signIn`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    return undefined;
  }

  const result = await response.json();

  return result;
};
