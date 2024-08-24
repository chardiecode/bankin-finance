import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {
    firstName: "Chardie",
    lastName: "Coder",
  };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image alt="logo" height={30} src={"/icons/logo.svg"} width={30} />
          <div>
            <MobileNav user={loggedIn || "Guest"} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
