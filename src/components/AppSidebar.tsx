import { getUser } from "@/auth/server";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { prisma } from "@/db/prisma";
import { Notes } from "@prisma/client";
import Link from "next/link";
import SidebarGroupCcontent from "./SidebarGroupCcontent";

async function AppSidebar() {
  const user = await getUser();

  let notes: Notes[] = [];

  if (user) {
    notes = await prisma.notes.findMany({
      where: {
        authorId: user.id,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }
  return (
    <Sidebar>
      <SidebarContent className="custom-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-2 mt-2 text-lg">
            {user ? (
              "Your Notes"
            ) : (
              <p>
                <Link href="/login" className="underline">
                  Login{" "}
                </Link>{" "}
                to see your notes
              </p>
            )}
          </SidebarGroupLabel>
          {user && <SidebarGroupCcontent notes={notes} />}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
export default AppSidebar;
