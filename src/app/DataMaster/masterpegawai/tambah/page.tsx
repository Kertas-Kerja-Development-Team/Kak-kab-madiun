import { FiHome } from "react-icons/fi";
import { FormMasterPegawai } from "@/components/pages/datamaster/masterpegawai/FormMasterPegawai";

const tambahOpd = () => {
    return(
        <>
            <div className="flex items-center mb-3">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan</p>
                <p className="mr-1">/ Data Master</p>
                <p className="mr-1">/ Master Pegawai</p>
                <p className="mr-1">/ Tambah</p>
            </div>
            <FormMasterPegawai />
        </>
    )
}

export default tambahOpd;