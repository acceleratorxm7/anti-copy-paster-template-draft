import { docsMenus } from "@/pages/docs/[id]";
import { usePathname } from "next/navigation";
import { DocsMenu } from "./DocsMenu";

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <ul className="py-4 border-r-[1px] border-gray-400 h-[calc(100vh-80px)] hidden md:block">
      {docsMenus.map((menu) => (
        <DocsMenu
          title={menu.title}
          keyName={menu.keyName}
          subMenus={menu.subMenus}
          isActive={pathname?.replace("/docs/", "") == menu.keyName}
        />
      ))}
    </ul>
  );
}
