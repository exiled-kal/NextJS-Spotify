function Center() {
  const {data: session} = useSession(session);
  return (
    <div className="flex flex-grow text-white">
      <h1>I am center</h1>
      <header>
        <div>
          <img src="" alt="" />
        </div>
      </header>
    </div>
  );
}

export default Center;