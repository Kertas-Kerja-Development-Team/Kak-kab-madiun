import { FiHome } from "react-icons/fi";
import Table from "@/components/pages/datamaster/masterprogramkegiatan/program/Table";
import { ButtonSky } from "@/components/global/Button";
import { TbCirclePlus } from "react-icons/tb";

const program = () => {
    return(
        <>
            <div className="flex flex-wrap items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Data Master</p>
                <p className="mr-1">/ Master Program</p>
            </div>
            <div className="mt-3 rounded-xl shadow-lg border">
                <div className="flex flex-wrap items-center justify-between border-b px-5 py-5">
                    <div className="flex flex-col items-end">
                        <h1 className="uppercase font-bold">Master Program</h1>
                    </div>
                    <div className="flex flex-col">
                        <ButtonSky 
                            className="flex items-center justify-center"
                            halaman_url='/DataMaster/masterprogramkegiatan/program/tambah'
                        >
                            <TbCirclePlus className="mr-1"/>
                            Tambah Program
                        </ButtonSky>
                    </div>
                </div>
                <Table />
            </div>
        </>
    )
}

export default program;