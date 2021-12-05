import Head from "next/head";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <Sidebar />
        <Center />
      </main>
      <div></div>
    </div>
  );
}
