import { Link } from "react-router-dom";
//import Profile from "./Profile";

export default function RightMenu() {

    return (
        <div className="h-screen flex flex-col gap-6 ">
            {/* <Profile /> */}
            <div className="p-4  rounded-lg shadow-md text-sm  flex flex-col gap-2 bg-zinc-600">
                <Link
                    to="/"
                    className="flex items-center gap-4 p-2  hover:bg-zinc-500"
                >
                    <img src="/posts.png" alt="" width={20} height={20} />
                    <span>My Posts</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/activity.png" alt="" width={20} height={20} />
                    <span>Activity</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/market.png" alt="" width={20} height={20} />
                    <span>Marketplace</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/events.png" alt="" width={20} height={20} />
                    <span>Events</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/albums.png" alt="" width={20} height={20} />
                    <span>Albums</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/videos.png" alt="" width={20} height={20} />
                    <span>Videos</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/news.png" alt="" width={20} height={20} />
                    <span>News</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2 rounded-lg hover:bg-zinc-500"
                >
                    <img src="/courses.png" alt="" width={20} height={20} />
                    <span>Courses</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2  hover:bg-zinc-500"
                >
                    <img src="/lists.png" alt="" width={20} height={20} />
                    <span>Lists</span>
                </Link>

                <Link
                    to="/"
                    className="flex items-center gap-4 p-2  hover:bg-zinc-500"
                >
                    <img src="/settings.png" alt="" width={20} height={20} />
                    <span>Settings</span>
                </Link>
            </div>
        </div>
    );
};


