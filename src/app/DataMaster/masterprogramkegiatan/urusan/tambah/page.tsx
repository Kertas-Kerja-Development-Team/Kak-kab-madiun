import { FiHome } from "react-icons/fi";
import { FormUrusan } from "@/components/pages/datamaster/masterprogramkegiatan/urusan/FormUrusan";

const tambahUrusan = () => {
    return(
        <>
            <div className="flex items-center mb-3">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan</p>
                <p className="mr-1">/ Data Master</p>
                <p className="mr-1">/ Master Urusan</p>
                <p className="mr-1">/ Tambah</p>
            </div>
            <FormUrusan />
        </>
    )
}

export default tambahUrusan;