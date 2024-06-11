import { Outlet } from "react-router-dom";
import MiniSidebar, { SidebarItem } from "./MiniSidebar";
import NavbarMenuMobile from "./NavbarMenuMobile";
import { pageList } from "../constants/constant";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { useToggleDarkMode } from "../context/useToggleDarkMode";

const MainLayout = () => {
  const { selected } = useToggleDarkMode();

  return (
    <div className="flex absolute w-full flex-col">
      <div className="flex w-full">
        <header className="sm:hidden ">
          <NavbarMenuMobile />
        </header>
        <section
          className={`flex flex-col flex-1 h-full ${
            selected === "light" ? "bg-slate-100" : "bg-slate-950"
          } duration-150 transition-all pb-10 md:pb-20`}
        >
          <div className="px-10 py-6">
            <PageHeader />
          </div>

          <Outlet />
        </section>
        <aside className={`hidden sticky sm:block right-0 top-0 h-screen `}>
          <MiniSidebar>
            {pageList.slice(1).map((item) => (
              <SidebarItem key={item.path} path={item.path} text={item.label} />
            ))}
          </MiniSidebar>
        </aside>
      </div>
      <footer
        className={`fixed bottom-0 w-full h-20 sm:h-28 border-t ${
          selected === "light" ? "bg-slate-50" : "bg-slate-900 border-slate-950"
        }  duration-150 transition-all sm:block`}
      >
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
