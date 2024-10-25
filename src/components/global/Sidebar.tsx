'use client'

import { useEffect, useState} from 'react';
import { 
  TbBook, TbFileImport, TbApps, TbChecklist, TbShoppingCartDollar, TbRefreshAlert,
  TbLogout,TbBook2,TbBulb,TbFileAlert,TbTooltip,TbBinaryTree,TbBuildingFortress,
  TbBuildingCommunity,TbDatabaseCog,TbHome,
  TbCircleArrowLeftFilled
} from "react-icons/tb";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import "@/app/globals.css";

interface SidebarProps {
  isOpen: boolean | null;
  isZoomed: boolean | null;
  toggleSidebar: () => void;
}

export const SidebarSuper = ({isZoomed, isOpen, toggleSidebar}: SidebarProps) => {

  const url = usePathname();
  //state menu, submenu, subsmenu
  const [Dashboard, setDashboard] = useState<boolean | null>(null);
  const [DataMaster, setDataMaster] = useState<boolean | null>(null);
  const [PerencanaanKota, setPerencanaanKota] = useState<boolean | null>(null);
    const [KotaPohonKinerjaKota, KotasetPohonKinerjaKota] = useState<boolean | null>(null);
  const [PerencanaanOPD, setPerencanaanOPD] = useState<boolean | null>(null);
    const [OpdPohonKinerjaKota, setOpdPohonKinerjaKota] = useState<boolean | null>(null);
    const [PohonKinerja, setPohonKinerja] = useState<boolean | null>(null);
    const [PohonCascading, setPohonCascading] = useState<boolean | null>(null);
  const [Laporan, setLaporan] = useState<boolean | null>(null);    
    const [Usulan, setUsulan] = useState<boolean | null>(null);
      const [Musrenbang, setMusrenbang] = useState<boolean | null>(null);
      const [PokokPikiran, setPokokPikiran] = useState<boolean | null>(null);
      const [Mandatori, setMandatori] = useState<boolean | null>(null);
    const [SPIP, setSPIP] = useState<boolean | null>(null);
    const [ManajemenResiko, setManajemenResiko] = useState<boolean | null>(null);
    const [Inovasi, setInovasi] = useState<boolean | null>(null);
    const [RencanaKinerjaKAK, setRencanaKinerjaKAK] = useState<boolean | null>(null);
    const [RincianBelanja, setRincianBelanja] = useState<boolean | null>(null);

  useEffect(() => {
    if(url == "/"){
      setDashboard(true);
      setPerencanaanKota(false);
      setPerencanaanOPD(false);
      setLaporan(false);
      setUsulan(false);
      setRencanaKinerjaKAK(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setManajemenResiko(false);
      setPohonCascading(false);
    }
    //perencanaanKota
    if(url == "/rencanakinerja"){
      setDashboard(false);
      setPerencanaanKota(false);
      setUsulan(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setManajemenResiko(false);
      setPohonCascading(false);
      setLaporan(true);
      setRencanaKinerjaKAK(true);
      setRincianBelanja(false);
    }
    if(url == "/rincianbelanja"){
      setDashboard(false);
      setPerencanaanKota(false);
      setRencanaKinerjaKAK(false);
      setLaporan(true);
      setUsulan(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setManajemenResiko(false);
      setPohonCascading(false);
      setRincianBelanja(true);
    }
    if(url == "/musrenbang"){
      setDashboard(false);
      setPerencanaanKota(true);
      setUsulan(true);
      setRencanaKinerjaKAK(false);
      setRincianBelanja(false);
      setMusrenbang(true);
      setPokokPikiran(false);
      setMandatori(false);
      setManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/pokokpikiran"){
      setDashboard(false);
      setPerencanaanKota(true);
      setUsulan(true);
      setRencanaKinerjaKAK(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(true);
      setMandatori(false);
      setManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/mandatori"){
      setDashboard(false);
      setPerencanaanKota(true);
      setUsulan(true);
      setRencanaKinerjaKAK(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(true);
      setManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/manajemenresiko"){
      setDashboard(false);
      setPerencanaanKota(true);
      setUsulan(false);
      setRencanaKinerjaKAK(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setManajemenResiko(true);
      setPohonCascading(false);
    }
    if(url == "/pohoncascading"){
      setDashboard(false);
      setPerencanaanKota(false);
      setPerencanaanOPD(true);
      setUsulan(false);
      setRencanaKinerjaKAK(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setManajemenResiko(false);
      setPohonCascading(true);
    }
  }, [url]);

  return (
    <div className="flex">
      {/* tombol sidebar zoom 150% */}
      {isZoomed && (
        <div 
          className={`fixed top-1 bg-gray-800 border border-white p-2 cursor-pointer duration-200 text-white rounded-md z-50 ${!isOpen ? 'rotate-180 left-12' : 'left-[13rem]'}`}
          onClick={() => toggleSidebar()}
        >
          <TbCircleArrowLeftFilled/>
        </div>
      )}

      {/* awal sidebar */}
      <div className={`bg-gray-800 overflow-y-auto text-white h-full ${isOpen ? 'w-64 py-5 px-3' : 'w-0'} duration-300 fixed custom-scrollbar`}>
        <div className="flex items-center justify-center">
          <Image
            className="mb-3 transition-all duration-300 ease-in-out"
            src="/logo.png"
            alt="logo"
            width={!isZoomed ? 80 : 80}
            height={!isZoomed ? 80 : 80}
          />
        </div>
        {/* tombol sidebar default */}
        {!isZoomed && (
        <div 
          className={`fixed top-1 p-2 mt-5 cursor-pointer border border-white text-white duration-200 rounded-md z-50 ${!isOpen ? 'rotate-180 bg-gray-800' : 'left-[13rem]'}`}
          onClick={toggleSidebar}
        >
          <TbCircleArrowLeftFilled/>
        </div>
        )}
        {/* {!isZoomed && (
          <FiChevronsLeft
            className={`absolute cursor-pointer -right-7 top-1 border-2 bg-gray-900 text-white rounded-md ${
              !isOpen && 'rotate-180'
            }`}
            onClick={toggleSidebar}
          />
        )} */}
        <div className="flex gap-x-4 items-center">
          <div className={`flex flex-wrap justify-center text-white text-center text-xl ${!isOpen && 'scale-0'} duration-300`}>
            <h2 className='font-bold'>
              KERTAS KERJA
            </h2>
            <h3 className='font-normal'>
              Kabupaten Madiun
            </h3>
          </div>
        </div>

        <ul className="pt-6">
          <Link href="/">
            <li className={`flex items-center font-medium gap-x-2 cursor-pointer p-2 rounded-xl ${Dashboard ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
              <TbHome className="text-xl" />
              <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Dashboard</span>
            </li>
          </Link>
            <li className={`flex items-center font-medium gap-x-2 cursor-pointer p-2 rounded-xl ${DataMaster ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
              <TbDatabaseCog className="text-xl" />
              <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Data Master</span>
            </li>
          <li 
            className={`flex font-medium items-center gap-x-2 cursor-pointer p-2 rounded-xl hover:bg-gray-700`}
            onClick={() => setPerencanaanKota(PerencanaanKota ? false : true)}
          >
            <TbBuildingFortress className="text-xl" />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Perencanaan Kota</span>
          </li>
          {PerencanaanKota &&
          <div className="flex flex-col border-l-2 border-white rounded-b-xl px-3 py-2 ml-2 duration-200">
            {/* submenu */}
            <Link href="#">
              <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${KotaPohonKinerjaKota ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                <TbBinaryTree className="text-xl" />
                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Pohon Kinerja Kota</span>
              </li>
            </Link>
          </div>
          }
          <li 
            className={`flex font-medium items-center gap-x-2 cursor-pointer p-2 rounded-xl hover:bg-gray-700`}
            onClick={() => setPerencanaanOPD(PerencanaanOPD ? false : true)}
          >
            <TbBuildingCommunity className="text-xl" />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Perencanaan OPD</span>
          </li>
            {/* submenu */}
            {PerencanaanOPD && 
            <div className="flex flex-col border-l-2 border-white rounded-b-xl px-3 py-2 ml-2 duration-200">
              <Link href="#">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${OpdPohonKinerjaKota ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbBinaryTree className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Pohon Kinerja Kota</span>
                </li>
              </Link>
              <Link href="#">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${PohonKinerja ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbBinaryTree className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Pohon Kinerja</span>
                </li>
              </Link>
              <Link href="/pohoncascading">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${PohonCascading ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbBinaryTree className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Pohon Cascading</span>
                </li>
              </Link>
            </div>
            }
          <li 
            onClick={() => setLaporan(Laporan ? false : true)}
            className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl"
          >
            <TbBook className="text-xl" />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Laporan</span>
          </li>
          {Laporan && 
            <div className="flex flex-col border-l-2 border-white rounded-b-xl px-3 py-2 ml-2 duration-200">
              <li 
                className="flex items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl"
                onClick={() => setUsulan(Usulan ? false : true)}
              >
                <TbApps className="text-xl" />
                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Usulan</span>
              </li>
                {/* subs menu */}
                {Usulan && 
                <div className="flex flex-col border-l-2 border-white rounded-b-xl px-3 py-2 ml-2 duration-200">
                  <Link href="/musrenbang">
                    <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${Musrenbang ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                      <TbBook2 className="text-xl" />
                      <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Musrenbang</span>
                    </li>
                  </Link>
                  <Link href="/pokokpikiran">
                    <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${PokokPikiran ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                      <TbBulb className="text-xl" />
                      <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Pokok Pikiran</span>
                    </li>
                  </Link>
                  <Link href="/mandatori">
                    <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${Mandatori ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                      <TbFileAlert className="text-xl" />
                      <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Mandatori</span>
                    </li>
                  </Link>
                  <li className="flex items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
                    <TbTooltip className="text-xl" />
                    <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Inisiatif Bupati</span>
                  </li>
                </div>
                }
              <Link href="/rencanakinerja">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${RencanaKinerjaKAK ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbChecklist className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Rencana Kinerja KAK</span>
                </li>
              </Link>
              <Link href="/rincianbelanja">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${RincianBelanja ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbShoppingCartDollar className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Rincian Belanja</span>
                </li>
              </Link>
              <Link href="/manajemenresiko">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${ManajemenResiko ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbRefreshAlert className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Manajemen Resiko</span>
                </li>
              </Link>
              <Link href="#">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${Inovasi ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbRefreshAlert className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Inovasi</span>
                </li>
              </Link>
            </div>
          }
          <Link href="/login">
            <li className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
              <TbLogout className="text-xl text-red-500" />
              <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export const SidebarAsn = ({isZoomed, isOpen, toggleSidebar}: SidebarProps) => {

  const url = usePathname();
  //state menu, submenu, subsmenu
  const [Dashboard, setDashboard] = useState<boolean | null>(null);
  const [Perencanaan, setPerencanaan] = useState<boolean | null>(null);
    const [Usulan, setUsulan] = useState<boolean | null>(null);
      const [Musrenbang, setMusrenbang] = useState<boolean | null>(null);
      const [PokokPikiran, setPokokPikiran] = useState<boolean | null>(null);
      const [Mandatori, setMandatori] = useState<boolean | null>(null);
    const [PohonCascading, setPohonCascading] = useState<boolean | null>(null);
    const [RencanaKinerja, setRencanaKinerja] = useState<boolean | null>(null);
    const [RincianBelanja, setRincianBelanja] = useState<boolean | null>(null);
    const [PerencanaanManajemenResiko, setPerencanaanManajemenResiko] = useState<boolean | null>(null);
  const [Laporan, setLaporan] = useState<boolean | null>(null);
    const [SPIP, setSPIP] = useState<boolean | null>(null);
    const [Inovasi, setInovasi] = useState<boolean | null>(null);
    const [LaporanManajemenResiko, setLaporanManajemenResiko] = useState<boolean | null>(null);
    const [RencanaKinerjaKAK, setRencanaKinerjaKAK] = useState<boolean | null>(null);

  useEffect(() => {
    if(url == "/"){
      setDashboard(true);
      setPerencanaan(false);
      setUsulan(false);
      setRencanaKinerja(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setPerencanaanManajemenResiko(false);
      setPohonCascading(false);
    }
    //perencanaan
    if(url == "/musrenbang"){
      setDashboard(false);
      setPerencanaan(true);
      setUsulan(true);
      setRencanaKinerja(false);
      setRincianBelanja(false);
      setMusrenbang(true);
      setPokokPikiran(false);
      setMandatori(false);
      setPerencanaanManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/pokokpikiran"){
      setDashboard(false);
      setPerencanaan(true);
      setUsulan(true);
      setRencanaKinerja(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(true);
      setMandatori(false);
      setPerencanaanManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/mandatori"){
      setDashboard(false);
      setPerencanaan(true);
      setUsulan(true);
      setRencanaKinerja(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(true);
      setPerencanaanManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/pohoncascading"){
      setDashboard(false);
      setPerencanaan(true);
      setUsulan(false);
      setRencanaKinerja(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setPerencanaanManajemenResiko(false);
      setPohonCascading(true);
    }
    if(url == "/rencanakinerja"){
      setDashboard(false);
      setPerencanaan(true);
      setUsulan(false);
      setRencanaKinerja(true);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setPerencanaanManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/rincianbelanja"){
      setDashboard(false);
      setPerencanaan(true);
      setUsulan(false);
      setRencanaKinerja(false);
      setRincianBelanja(true);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setPerencanaanManajemenResiko(false);
      setPohonCascading(false);
    }
    if(url == "/manajemenresiko"){
      setDashboard(false);
      setPerencanaan(true);
      setUsulan(false);
      setRencanaKinerja(false);
      setRincianBelanja(false);
      setMusrenbang(false);
      setPokokPikiran(false);
      setMandatori(false);
      setPerencanaanManajemenResiko(true);
      setPohonCascading(false);
    }
  }, [url]);

  return (
    <div className="flex">
      {/* tombol sidebar zoom 150% */}
      {isZoomed && (
        <div 
          className={`fixed top-1 bg-gray-800 border border-white p-2 cursor-pointer duration-200 text-white rounded-md z-50 ${!isOpen ? 'rotate-180 left-12' : 'left-[13rem]'}`}
          onClick={() => toggleSidebar()}
        >
          <TbCircleArrowLeftFilled/>
        </div>
      )}

      {/* awal sidebar */}
      <div className={`bg-gray-800 overflow-y-auto text-white h-full ${isOpen ? 'w-64 py-5 px-3' : 'w-0'} duration-300 fixed custom-scrollbar`}>
        <div className="flex items-center justify-center">
          <Image
            className="mb-3 transition-all duration-300 ease-in-out"
            src="/logo.png"
            alt="logo"
            width={!isZoomed ? 80 : 80}
            height={!isZoomed ? 80 : 80}
          />
        </div>
        {/* tombol sidebar default */}
        {!isZoomed && (
        <div 
          className={`fixed top-1 p-2 mt-5 cursor-pointer border border-white text-white duration-200 rounded-md z-50 ${!isOpen ? 'rotate-180 bg-gray-800' : 'left-[13rem]'}`}
          onClick={toggleSidebar}
        >
          <TbCircleArrowLeftFilled/>
        </div>
        )}
        {/* {!isZoomed && (
          <FiChevronsLeft
            className={`absolute cursor-pointer -right-7 top-1 border-2 bg-gray-900 text-white rounded-md ${
              !isOpen && 'rotate-180'
            }`}
            onClick={toggleSidebar}
          />
        )} */}
        <div className="flex gap-x-4 items-center">
          <div className={`flex flex-wrap justify-center text-white text-center text-xl ${!isOpen && 'scale-0'} duration-300`}>
            <h2 className='font-bold'>
              KERTAS KERJA
            </h2>
            <h3 className='font-normal'>
              Kabupaten Madiun
            </h3>
          </div>
        </div>

        <ul className="pt-6">
          <Link href="/">
            <li className={`flex items-center font-medium gap-x-2 cursor-pointer p-2 rounded-xl ${Dashboard ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
              <TbHome className="text-xl" />
              <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Dashboard</span>
            </li>
          </Link>
          <li 
            className={`flex font-medium items-center gap-x-2 cursor-pointer p-2 rounded-xl hover:bg-gray-700`}
            onClick={() => setPerencanaan(Perencanaan ? false : true)}
          >
            <TbBuildingFortress className="text-xl" />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Perencanaan </span>
          </li>
            {/* submenu */}
            {Perencanaan && 
            <div className="flex flex-col border-l-2 border-white rounded-b-xl px-3 py-2 ml-2 duration-200">
              <li 
                className="flex items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl"
                onClick={() => setUsulan(Usulan ? false : true)}
              >
                <TbApps className="text-xl" />
                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Usulan</span>
              </li>
                {/* subs menu */}
                {Usulan && 
                <div className="flex flex-col border-l-2 border-white rounded-b-xl px-3 py-2 ml-2 duration-200">
                  <Link href="/musrenbang">
                    <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${Musrenbang ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                      <TbBook2 className="text-xl" />
                      <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Musrenbang</span>
                    </li>
                  </Link>
                  <Link href="/pokokpikiran">
                    <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${PokokPikiran ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                      <TbBulb className="text-xl" />
                      <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Pokok Pikiran</span>
                    </li>
                  </Link>
                  <Link href="/mandatori">
                    <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${Mandatori ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                      <TbFileAlert className="text-xl" />
                      <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Mandatori</span>
                    </li>
                  </Link>
                  <li className="flex items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
                    <TbTooltip className="text-xl" />
                    <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Inisiatif Bupati</span>
                  </li>
                </div>
                }
              <Link href="/pohoncascading">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${PohonCascading ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbBinaryTree className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Pohon Cascading</span>
                </li>
              </Link>
              <Link href="/rencanakinerja">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${RencanaKinerja ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbChecklist className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Rencana Kinerja</span>
                </li>
              </Link>
              <Link href="/rincianbelanja">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${RincianBelanja ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbShoppingCartDollar className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Rincian Belanja</span>
                </li>
              </Link>
              <Link href="/manajemenresiko">
                <li className={`flex items-center gap-x-2 cursor-pointer p-2 rounded-xl ${PerencanaanManajemenResiko ? "bg-white text-gray-800" : "hover:bg-gray-700"}`}>
                  <TbRefreshAlert className="text-xl" />
                  <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Manajemen Resiko</span>
                </li>
              </Link>
            </div>
            }
          <li 
            className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl"
            onClick={() => setLaporan(Laporan ? false : true)}
          >
            <TbBook className="text-xl" />
            <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Laporan</span>
          </li>
          {/* sub menu */}
          {Laporan && 
          <div className="flex flex-col border-l-2 border-white rounded-b-xl px-3 py-2 ml-2 duration-200">
            <Link href="#">
              <li className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
                <TbFileImport className="text-xl" />
                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>SPIP</span>
              </li>
            </Link>
            <Link href="#">
              <li className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
                <TbFileImport className="text-xl" />
                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Manajemen Resiko</span>
              </li>
            </Link>
            <Link href="#">
              <li className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
                <TbFileImport className="text-xl" />
                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Inovasi</span>
              </li>
            </Link>
            <Link href="#">
              <li className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
                <TbFileImport className="text-xl" />
                <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Rencana Kinerja KAK</span>
              </li>
            </Link>
          </div>
          }
          <li className="border-t-2 my-5"></li>
          <Link href="/login">
            <li className="flex font-medium items-center gap-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-xl">
              <TbLogout className="text-xl text-red-500" />
              <span className={`${!isOpen && 'hidden'} origin-left duration-200`}>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
