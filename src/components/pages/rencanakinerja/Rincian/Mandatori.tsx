'use client'

import { ButtonSky } from "@/components/global/Button";
import Select from 'react-select';
import { useState, useEffect } from "react";

interface id {
    id: string;
}
interface mandatori {
    id : string;
    usulan : string;
    peraturan_terkait : string;
    uraian : string;
}

const Mandatori: React.FC<id> = (id) => {

    const [mandatori, setMandatori] = useState<mandatori[]>([]);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [dataNull, setDataNull] = useState<boolean | null>(null);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const fetchMandatori = async() => {
            setLoading(true);
            try{
                const response = await fetch(`${API_URL}/rencana_kinerja/id_rencana_kinerja/pegawai/${id}/input_rincian_kak`);
                const result = await response.json();
                const data = result.usulan_terpilih_pokir;
                if(data){
                    if(data == null){
                        setDataNull(true);
                        setMandatori([]);
                    } else {
                        setDataNull(false);
                        setMandatori(data);
                    }
                } else {
                    setDataNull(true);
                    setMandatori([]);
                }
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false);
            }
        };
        fetchMandatori();
    },[id]);

    return(
        <>
            {/* usulan Mandatori */}
            <div className="mt-3 rounded-t-xl border px-5 py-3">
                <h1>Usulan Mandatori</h1>
            </div>
            <div className="rounded-b-xl shadow-lg border-x border-b px-5 py-3">
                <div className="my-2">
                    <Select 
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: '8px',
                                })
                            }}
                            placeholder={"Pilih Mandatori"}
                        />
                </div>
                <ButtonSky className="w-full mt-2">Simpan</ButtonSky>
                {loading ? (
                   <div className="text-blue-500">LOADING...</div>
                ):(
                    <div className="overflow-auto mt-3 rounded-t-xl border">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <td className="border-r border-b px-6 py-3 min-w-[50px]">No</td>
                                    <td className="border-r border-b px-6 py-3 min-w-[200px]">Usulan</td>
                                    <td className="border-r border-b px-6 py-3 min-w-[200px]">Peraturan Terkait</td>
                                    <td className="border-r border-b px-6 py-3 min-w-[400px]">Uraian</td>
                                    <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                                </tr>
                            </thead>
                            <tbody>
                                {dataNull ? 
                                    <tr>
                                        <td className="px-6 py-3" colSpan={5}>
                                            Data Kosong / Belum Ditambahkan
                                        </td>
                                    </tr>
                                :
                                    mandatori.map((data, index) => (
                                        <tr key={data.id}>
                                            <td className="border-r border-b px-6 py-3 min-w-[50px]">{index + 1}</td>
                                            <td className="border-r border-b px-6 py-3 min-w-[200px]">{data.usulan}</td>
                                            <td className="border-r border-b px-6 py-3 min-w-[200px]">{data.peraturan_terkait}</td>
                                            <td className="border-r border-b px-6 py-3 min-w-[400px]">{data.uraian}</td>
                                            <td className="border-r border-b px-6 py-3 min-w-[200px]">Aksi</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    )
}

export default Mandatori;