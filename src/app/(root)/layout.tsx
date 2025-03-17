import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";

import { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}){
    return (
        <SidebarWrapper>{children}</SidebarWrapper>
    )
}