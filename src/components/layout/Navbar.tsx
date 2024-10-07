import Link from "next/link";

export const Navbar = () => {
  return (
    <header className="bg-black text-white h-[80px] flex flex-row items-center justify-center">
      <nav className="flex-1 max-w-[1200px] px-4 flex justify-between items-center">
        <div id="navbar-header">
          <Link href="/draft">
            <span className="font-bold text-[21px]">AntiCopyPasta</span>
          </Link>
        </div>
        <ul className="flex flex-row gap-6 cursor-pointer">
          <Link href="/docs/getting-started">
            <li>Documentation</li>
          </Link>
          <li>Marketplace</li>
        </ul>
      </nav>
    </header>
  );
};
