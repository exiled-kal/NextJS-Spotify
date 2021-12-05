import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
  <SessionProvi>
    <Component {...pageProps} />
  </SessionProvi>
  )
}

export default MyApp;
