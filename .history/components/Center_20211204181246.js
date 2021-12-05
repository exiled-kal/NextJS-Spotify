import { useSession } from "next-auth/react";

function Center() {
  const { data: session } = useSession();
  return (
    <div className="flex flex-grow text-white">
      <h1>I am center</h1>
      <header>
        <div>
          <img className="roudned-full w-10 h-10src={session?.user.image} alt="" />
        </div>
      </header>
    </div>
  );
}

export default Center;
