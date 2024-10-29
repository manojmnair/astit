import { Link } from "react-router-dom";

import EthButton from "./EthButton";
import IdentityButton from "./IdentityButton";
import SessionButton from "./SessionButton";
import { useActor } from "../../ic/Actors";
export default function Header() {
  const { actor } = useActor();
  const visible = actor ? false : true;

  return (
    <div className="sticky top-0 left-0 flex flex-col justify-between h-20 w-full gap-10 p-5 md:flex-row bg-zinc-800 z-10">
      <div className="hidden text-sm  text-center md:block">
        <Link className="flex flex-row" to="/">
          <img
            width={36}
            height={36}
            src="/logo.png"
            className="w-9 h-9 mr-3 mt-1 "
            alt="logo"
          />
          <span className="text-md  uppercase   ">

            <div className="items-center">Astit</div>
            <div>Finance</div>
          </span>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 text-sm md:text-base md:flex-row">
        <Link to="/dashboard" className="flex items-center gap-2">
          <img
            src="/stories.png"
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Dashboard</span>
        </Link>
        <Link to="/counter" className="flex items-center gap-2">
          <img
            src="/stories.png"
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Counter</span>
        </Link>
        {!visible ? <></> :
          (<Link to="/profile" className="flex items-center gap-2">
            <img
              src="/stories.png"
              alt="Stories"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Profile</span>
          </Link>)
          }

        <Link to="/rate" className="flex items-center gap-2">
          <img
            src="/stories.png"
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Rate</span>
        </Link>

        <Link to="/bondtoken" className="flex items-center gap-2">
          <img
            src="/stories.png"
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Bond Token</span>
        </Link>
        <Link to="/goldtoken" className="flex items-center gap-2">
          <img
            src="/stories.png"
            alt="Stories"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          <span>Gold Token</span>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 text-sm md:text-base md:flex-row">
        <IdentityButton />
        <EthButton />
        <SessionButton />
      </div>
      {/*       <div className="block text-xl font-bold text-center md:hidden">
        Internet Com + React + Sign In With Ethereum
      </div> */}

    </div>
  );
}
