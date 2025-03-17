import { ModeToggle } from "@/components/theme-toggle";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function DesktopNav() {
  return (
    <Card className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center lg:h-16 lg:w-full lg:p-4">
      <div>
        <p>Nextjs Bloging App</p>
      </div>
      <nav className="flex items-center gap-4 justify-center">
        <div>
            <Link href="/home">Home</Link>
        </div>
        <div>
            <Link href="/profile">Profile</Link>
        </div>
        <ModeToggle/>
      </nav>
    </Card>
  );
}
