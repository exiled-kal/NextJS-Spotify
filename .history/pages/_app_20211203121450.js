import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
  <SessionProvieder>
    <Component {...pageProps} />
  </SessionProvieder>
  )
}

export default MyApp;
