import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
  <Session>
    <Component {...pageProps} />
  </Session>
  )
}

export default MyApp;
