import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div>
      <div>
        <button className="">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>

        <button className="">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;