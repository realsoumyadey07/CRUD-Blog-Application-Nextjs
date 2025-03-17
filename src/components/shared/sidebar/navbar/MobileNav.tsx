import { ModeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Card className="fixed bottom-4 w-[calc(100vw-32px)] flex lg:hidden justify-center items-center p-2">
      <nav className="w-full">
        <ul className="flex flex-row justify-between items-center">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li><ModeToggle/></li>
        </ul>
      </nav>
    </Card>
  );
}
