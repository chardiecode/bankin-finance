"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SiderbarProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link className="flex mb-12 cursor-pointer items-center gap-2" href="/">
          <Image
            alt="Logo"
            className="size-[24px] max-xl:size-14"
            height={34}
            src={"/icons/logo.svg"}
            width={34}
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              key={item.label}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
              href={item.route}
            >
              <div className="relative size-6">
                <Image
                  fill
                  alt={item.label}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                  src={item.imgURL}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-white": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
      <Footer user={user} type={"desktop"} />
    </section>
  );
};

export default Sidebar;
