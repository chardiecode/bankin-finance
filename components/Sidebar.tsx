import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link className="mb-12 cursor-pointer items-center gap-2" href="/">
          <Image
            alt="Logo"
            className="size-[24px] max-xl:size-14"
            height={34}
            src={"/icons/logo.svg"}
            width={34}
          />
          <h1 className="sidebar-log">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          return (
            <Link key={item.label} className="" href={item.route}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
