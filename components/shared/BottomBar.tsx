"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { sidebarLinks } from "@/constants";

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={16}
                height={16}
                className="object-contain"
              />

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}

        <Link
          href="https://resume-io-inky.vercel.app/"
          className={`bottombar_link`}
        >
          <img
            src="https://img.icons8.com/ios-glyphs/90/FFFFFF/resume.png"
            alt=""
            className="w-[20px] h-[20px]"
          />
          <p className="text-subtle-medium text-light-1 max-sm:hidden">
                Resume
              </p>
        </Link>
      </div>
    </section>
  );
}

export default Bottombar;
