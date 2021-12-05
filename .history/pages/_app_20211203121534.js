import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={session} pageProps={pageProps}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
