import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

export default function SidebarWrapper({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="h-screen flex-col-reverse w-full py-4 px-2 flex lg:flex-col gap-4">
      <DesktopNav />
      <MobileNav />
      <main className="h-full lg:h-full w-full flex gap-4">{children}</main>
    </div>
  );
}
