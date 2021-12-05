import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import spotifyApi from '../'

function useSpotify() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      //If refresh access token attempt fails, direct user to login....
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return null;
}

export default useSpotify;
