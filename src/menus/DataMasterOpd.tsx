import { ReactNode } from "react";
import { TbDatabasePlus, TbUser, TbFileCode2 } from "react-icons/tb";

type MenuItem = {
    id: string;
    name: string;
    href: string;
    icon: ReactNode;
    sub_menu: MenuItem[] | [];
}

const subMenuMasterOpd: MenuItem[] = [
    {
        id: "master_opd",
        name: "Data Master OPD",
        href: "/useropd",
        icon: <TbUser className="text-xl" />,
        sub_menu: [],
    },
    {
        id: "master_opd",
        name: "Data Master OPD",
        href: "/subkegiatanopd",
        icon: <TbFileCode2 className="text-xl" />,
        sub_menu: [],
    },
]

export const DataMasterOpd: MenuItem =
{
    id: "master_opd",
    name: "Data Master OPD",
    href: "#",
    icon: <TbDatabasePlus className="text-xl" />,
    sub_menu: subMenuMasterOpd,
}
