import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Center() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-grow text-white">
      <h1>I am center</h1>
      <header>
        <div className="flex items-center bg-black space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section className={`flex items-end space-x-7 bg-gradient-to-b to-`}>
        <img src="" alt="" />
      </section>
    </div>
  );
}

export default Center;
