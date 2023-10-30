import Link from "next/link";
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-2">
        <img src="/assets/logo2.png" alt="logo" width={70} height={70} />
        <img src="/assets/logo3.png" alt="logo" width={200} height={200} />
        
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <img
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
}

export default TopBar;
