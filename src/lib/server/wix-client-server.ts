import { OAuthStrategy, createClient } from '@wix/sdk';
import { products, collections } from '@wix/stores';

import { cookies } from 'next/headers';

export const wixClientServer = async () => {
  let refreshToken;
  const getCookies = () => {
    try {
      const cookieStore = cookies();
      refreshToken = JSON.parse(
        cookieStore.get('refreshToken')?.value || '{}'
      );
      return refreshToken;
    } catch (error) {
      console.log(error);
      return {};
    }
  };

  const token = getCookies();

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken: token,
        accessToken: { value: '', expiresAt: 0 },
      },
    }),
  });

  return wixClient;
};
