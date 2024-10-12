import { cookies } from 'next/headers';

export const fetchBackendForUser = (user: any, providerId: string, providerName: string) => {
  const backendUrl = process.env.BACKEND_API_URL;
  const clientId: string = process.env.WEB_CLIENT_ID as string;
  return fetch(`${backendUrl}/api-auth/user/oauth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'client-id': clientId,
    },
    body: JSON.stringify({
      //need to replace with provider account id 
      name: user?.name,
      email: user?.email,
      provider_id: providerId,
      provider_name: providerName,

    }),
  });
};

export const handleExistingAccessToken = async () => {
  const existingToken = cookies().get('accessToken')?.value;
  console.log("Existing token : " + existingToken);
  if (existingToken) {
    try {
      const backendUrl = process.env.BACKEND_API_URL;
      const response = await fetch(`${backendUrl}/api-auth/user/logout`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${existingToken}`,
          'accept': 'application/json',
        },
      });

      if (response.ok) {
        cookies().delete('accessToken');
        console.log("Successfully logged out previous session");
      } else {
        const errorResponse = await response.json();
        console.error("Failed to logout previous session: ", errorResponse);
      }
    } catch (error) {
      console.error("Error during logout: ", error);
    }
  }
};


export const setAccessTokenCookie = (accessToken: string, expiry: string) => {
  cookies().set('accessToken', accessToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'lax',
    expires: new Date(expiry),

  });
};
