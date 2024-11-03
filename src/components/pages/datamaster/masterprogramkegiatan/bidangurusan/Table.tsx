import { ButtonGreen } from "@/components/global/Button";

const Table = () => {
    return(
        <>
            <div className="overflow-auto m-2 rounded-t-xl border">
                <table className="w-full">
                    <thead>
                        <tr className="bg-[#99CEF5] text-white">
                            <th className="border-r border-b px-6 py-3 min-w-[50px]">No</th>
                            <th className="border-r border-b px-6 py-3 min-w-[500px]">Nama Bidang Urusan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Kode Bidang Urusan</th>
                            <th className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-r border-b px-6 py-4">1</td>
                            <td className="border-r border-b px-6 py-4">Rehabilitasi Sedang/Berat Sarana, Prasarana dan Utilitas Sekolah</td>
                            <td className="border-r border-b px-6 py-4 text-center">9376497236</td>
                            <td className="border-r border-b px-6 py-4">
                                <div className="flex flex-col jutify-center items-center">
                                    <ButtonGreen halaman_url="/DataMaster/masterprogramkegiatan/bidangurusan/1">Edit</ButtonGreen>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;