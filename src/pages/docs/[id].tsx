import { DocsMenu } from "@/components/layout/docs/DocsMenu";
import DocsSidebar from "@/components/layout/docs/DocsSidebar";
import { usePathname } from "next/navigation";

export const docsMenus: Array<DocsMenu> = [
  {
    title: "Getting Started",
    keyName: "getting-started",
    content: (
      <div>
        <h1 className="text-4xl font-bold">Getting Started</h1>
        <h3 className="text-2xl mt-4">How to install</h3>
        <p className="mt-2">
          <b>
            AntiCopyPaster requires IntelliJ IDEA of version 2022.3 to work. To
            install the plugin
          </b>
          :
          <br />
          1. Download the pre-built version of the plugin from here;
          <br />
          2. Open IntelliJ IDEA and go to File/Settings/Plugins; <br />
          3. Select the gear icon, and choose Install Plugin from Disk...;
          <br />
          4. Choose the downloaded ZIP archive; <br />
          5. Click Apply; <br />
          6. Restart the IDE.
        </p>
        <h3 className="text-2xl mt-4">How it works</h3>
        <p>
          The plugin monitors the copying and pasting that takes place inside
          the IDE. As soon as a code fragment is pasted, the plugin checks if it
          introduces code duplication, and if it does, the plugin calculates a
          set of code metrics for it, and a pre-installed CNN model makes a
          decision whether this piece of code is suitable for Extract Method
          refactoring. If it is, the plugin suggests the developer to perform
          the Extract Method refactoring and applies the refactoring if
          necessary.
        </p>
      </div>
    ),
  },
  {
    title: "Troubleshooting",
    keyName: "troubleshooting",
    content: (
      <div>
        <h1 className="text-4xl font-bold">Troubleshooting</h1>
      </div>
    ),
  },
];

const searchMenu = (
  key: string,
  menus: DocsMenu[] = docsMenus
): DocsMenu | null => menus.find((menu) => menu.keyName === key) || null;

export default function DocsPage() {
  const pathname = usePathname();
  const pathKey = pathname?.replace("/docs/", "");
  const menu = searchMenu(pathKey);

  if (!menu) return null;

  return (
    <>
      <main className="flex flex-row">
        <DocsSidebar />
        <div className="flex flex-grow px-4 md:px-16 lg:px-24 py-16">
          {menu.content}
        </div>
      </main>
    </>
  );
}
