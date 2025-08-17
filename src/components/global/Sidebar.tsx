import Image from 'next/image';
import { TbHome, TbChevronRight } from 'react-icons/tb'
import { usePathname, useParams } from 'next/navigation';
import { useBrandingContext } from '@/context/BrandingContext';
import Link from 'next/link';
import { TbCircleArrowLeftFilled } from 'react-icons/tb'
import { DataMaster } from '@/menus/DataMaster'
import { DataMasterOpd } from '@/menus/DataMasterOpd'
import { User } from '@/types'
import { ReactNode } from "react";
import { useState } from "react";

interface SidebarProps {
    isOpen: boolean | null;
    isZoomed: boolean | null;
    toggleSidebar: () => void;
    user?: User | null;
}

type MenuItem = {
    id: string;
    name: string;
    href: string;
    icon: ReactNode;
    sub_menu: MenuItem[] | [];
}

export default function Sidebar({ isZoomed, isOpen, toggleSidebar, user }: SidebarProps) {
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
    const roles = user?.roles ?? [];
    const { branding } = useBrandingContext();
    const url = usePathname();

    const roleMenus: Record<string, MenuItem[]> = {
        super_admin: [DataMaster, DataMasterOpd],
    };

    const userMenus: MenuItem[] = roles.flatMap(role => roleMenus[role] ?? []);

    const toggleMenu = (id: string) => {
        setOpenMenus((prev: Record<string, boolean>) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <aside className="flex">
            {isZoomed && (
                <div
                    className={`fixed top-1 bg-gradient-to-bl from-[#182C4E] to-[#17212D] border border-white p-2 cursor-pointer duration-200 text-white rounded-md z-50 ${!isOpen ? 'rotate-180 ' : 'left-[13rem]'}`}
                    onClick={() => toggleSidebar()}
                >
                    <TbCircleArrowLeftFilled />
                </div>
            )}
            <div className={`bg-gradient-to-bl from-[#182C4E] to-[#17212D] overflow-y-auto text-white h-full ${isOpen ? 'w-64 py-5 px-3' : 'w-0'} duration-300 fixed custom-scrollbar`}>
                <div className="flex items-center justify-center">
                    <Image
                        className="mb-3 transition-all duration-300 ease-in-out"
                        src={branding.logo}
                        // src="/universal.png"
                        alt="logo"
                        width={!isZoomed ? 80 : 80}
                        height={!isZoomed ? 80 : 80}
                    />
                </div>
                {/* tombol sidebar default */}
                {!isZoomed && (
                    <div
                        className={`fixed top-1 p-2 mt-5 cursor-pointer border border-white text-white duration-200 rounded-md z-50 hover:bg-white hover:text-[#182C4E] ${!isOpen ? 'rotate-180 bg-gray-800' : 'left-[13rem]'}`}
                        onClick={toggleSidebar}
                    >
                        <TbCircleArrowLeftFilled />
                    </div>
                )}
                {/* header sidebar */}
                <div className="flex gap-x-4 items-center">
                    <div className={`flex flex-wrap justify-center text-white text-center text-lg ${!isOpen && 'scale-0'} duration-300`}>
                        <h2 className='font-bold uppercase'>
                            {branding.title}
                        </h2>
                        <h3 className='font-thin text-lg'>{branding.client}</h3>
                    </div>
                </div>

                {/* AWAL MENU SIDEBAR */}
                <ul className="pt-6">
                    {/* LABEL DASHBOARD */}
                    <Link href="/">
                        <li className={`flex items-center font-medium gap-x-2 cursor-pointer p-2 rounded-xl transition-all duration-300 ${url === "/" ? "bg-white text-gray-800" : "hover:bg-slate-500"}`}>
                            <TbHome className="text-xl" />
                            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Dashboard</span>
                        </li>
                    </Link>
                    {userMenus.map(menu => {
                        const isParent = !menu.href || menu.href === '#';
                        const isOpenMenu = openMenus[menu.id] ?? false;

                        if (isParent) {
                            return (
                                <>
                                    <li
                                        onClick={() => toggleMenu(menu.id)}
                                        key={menu.id}
                                        className="flex justify-between items-center font-medium gap-x-2 cursor-pointer p-2 rounded-xl hover:bg-slate-500 transition-all duration-300 ease-in-out"
                                    >
                                        <div className="flex items-center gap-2">
                                            {menu.icon}
                                            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>
                                                {menu.name}
                                            </span>
                                        </div>
                                        <TbChevronRight className={`transition-all duration-200 ease-in-out ${isOpenMenu ? "rotate-90" : ""}`} />
                                    </li>
                                    {isOpenMenu && menu.sub_menu && (
                                        <ul className={`transition-all duration-300 ease-in-out px-3 py-2 flex flex-col border-l-2 border-white rounded-b-xl ml-2  max-h-screen opacity-100`}>
                                            {menu.sub_menu.map(sub => (
                                                <Link href={sub.href}>
                                                    <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl hover:bg-slate-500`}
                                                        key={sub.id}>
                                                        {sub.icon}
                                                        <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>{sub.name}</span>
                                                    </li>
                                                </Link>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            )
                        }

                        return (
                            <Link href={menu.href}>
                                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl hover:bg-slate-500`} key={menu.id}>
                                    {menu.icon}
                                    <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>{menu.name}</span>
                                </li>
                            </Link>
                        )

                    }
                    )}
                </ul>
            </div>
        </aside>
    )
}
