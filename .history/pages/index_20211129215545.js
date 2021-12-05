import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Login from "../login";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      {/* <Head> */}
      {/* <title>Spotify 2.0</title> */}
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */}
      <main>
        <Login />
        <Sidebar />
      </main>
      <div></div>
    </div>
  );
}
