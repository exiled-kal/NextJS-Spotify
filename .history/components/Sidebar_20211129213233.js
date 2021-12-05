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
        <button>
          <HomeIcon className="h-5 w-5" />
        </button>
        <p>Home</p>
        <button>
          <SearchIcon className="h-5 w-5" />
        </button>
        <p>Home</p>
        <button>
          <LibraryIcon className="h-5 w-5" />
        </button>
        <p>Home</p>
        <button>
          <HomeIcon className="h-5 w-5" />
        </button>
        <p>Home</p>
      </div>
    </div>
  );
}

export default Sidebar;
