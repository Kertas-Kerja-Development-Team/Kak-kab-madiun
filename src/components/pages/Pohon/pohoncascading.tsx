import './treeflex.css'

const pohoncascading = () => {
    return(
        <>
            <div className="tf-tree text-center mt-3">
                <ul>
                    <li>
                        <div className="tf-nc tf flex flex-col w-[700px] rounded-lg">
                            <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black">
                                <h1>Tematik Kota</h1>
                            </div>
                            <div className="flex justify-center my-3">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Tema</td>
                                            <td className="min-w-[300px] border px-2 py-3 border-black text-start">Peningkatan Kualitas Pelayanan Publik Berbasis Smart City dan Percepatan Reformasi Birokrasi</td>
                                        </tr>
                                        <tr>
                                            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Indikator</td>
                                            <td className="min-w-[300px] border px-2 py-3 border-black text-start">Nilai indexs RB</td>
                                        </tr>
                                        <tr>
                                            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Target/Satuan</td>
                                            <td className="min-w-[300px] border px-2 py-3 border-black text-start">85 indeks</td>
                                        </tr>
                                        <tr>
                                            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Keterangan</td>
                                            <td className="min-w-[300px] border px-2 py-3 border-black text-start">RKPD 2024</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex justify-center border my-3 py-3 border-black">
                                <button className="border px-5 py-1 rounded-lg border-black">Review</button>
                            </div>
                            <div className="flex justify-center border my-3 py-3 border-black">
                                <button className="border px-5 py-1 rounded-lg border-black">Edit</button>
                            </div>
                            <div className="flex justify-between my-3 py-3">
                                <button className="border px-5 py-1 rounded-lg border-black">Tampilkan semua</button>
                                <button className="border px-5 py-1 rounded-lg border-black">+ subtema</button>
                                <button className="border px-5 py-1 rounded-lg border-black">+ ambil (strategic)</button>
                                <button className="border px-5 py-1 rounded-lg border-black">+ strategic</button>
                            </div>
                        </div>
                        <ul>
                            <li>
                                <div className="tf-nc tf flex flex-col w-[700px] rounded-lg">
                                    <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black">
                                        <h1>Sub-Tematik Kota</h1>
                                    </div>
                                    <div className="flex justify-center my-3">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Sub Tema</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Peningkatan Kualitas Pelayanan Publik Berbasis Smart City dan Percepatan Reformasi Birokrasi</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Indikator</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Nilai indexs RB</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Target/Satuan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">85 indeks</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Indikator</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Nilai indexs RB</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Target/Satuan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">85 indeks</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Indikator</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Nilai indexs RB</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Target/Satuan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">85 indeks</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Keterangan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">RKPD 2024</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-center border my-3 py-2 border-black">
                                        <button className="border px-5 py-1 rounded-lg border-black">Review</button>
                                    </div>
                                    <div className="flex justify-evenly border my-3 py-2 border-black">
                                        <button className="border px-5 py-1 rounded-lg border-black">Edit</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">Hapus</button>
                                    </div>
                                    <div className="flex justify-between my-3 py-2">
                                        <button className="border px-5 py-1 rounded-lg border-black">Tampilkan semua</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ subtema</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ ambil (strategic)</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ strategic</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="tf-nc tf flex flex-col w-[700px] rounded-lg">
                                    <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black">
                                        <h1>Sub-Tematik Kota</h1>
                                    </div>
                                    <div className="flex justify-center my-3">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Sub Tema</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Peningkatan Kualitas Pelayanan Publik Berbasis Smart City dan Percepatan Reformasi Birokrasi</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Indikator</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Nilai indexs RB</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Target/Satuan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">85 indeks</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Keterangan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">RKPD 2024</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-center border my-3 py-2 border-black">
                                        <button className="border px-5 py-1 rounded-lg border-black">Review</button>
                                    </div>
                                    <div className="flex justify-evenly border my-3 py-2 border-black">
                                        <button className="border px-5 py-1 rounded-lg border-black">Edit</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">Hapus</button>
                                    </div>
                                    <div className="flex justify-between my-3 py-2">
                                        <button className="border px-5 py-1 rounded-lg border-black">Tampilkan semua</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ subtema</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ ambil (strategic)</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ strategic</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="tf-nc tf flex flex-col w-[700px] rounded-lg">
                                    <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black">
                                        <h1>Sub-Tematik Kota</h1>
                                    </div>
                                    <div className="flex justify-center my-3">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Sub Tema</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Peningkatan Kualitas Pelayanan Publik Berbasis Smart City dan Percepatan Reformasi Birokrasi</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Indikator</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">Nilai indexs RB</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Target/Satuan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">85 indeks</td>
                                                </tr>
                                                <tr>
                                                    <td className="min-w-[100px] border px-2 py-1 border-black text-start">Keterangan</td>
                                                    <td className="min-w-[300px] border px-2 py-1 border-black text-start">RKPD 2024</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="flex justify-center border my-3 py-2 border-black">
                                        <button className="border px-5 py-1 rounded-lg border-black">Review</button>
                                    </div>
                                    <div className="flex justify-evenly border my-3 py-2 border-black">
                                        <button className="border px-5 py-1 rounded-lg border-black">Edit</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">Hapus</button>
                                    </div>
                                    <div className="flex justify-between my-3 py-2">
                                        <button className="border px-5 py-1 rounded-lg border-black">Tampilkan semua</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ subtema</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ ambil (strategic)</button>
                                        <button className="border px-5 py-1 rounded-lg border-black">+ strategic</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default pohoncascading;