'use client'

import { FiHome } from "react-icons/fi";
import { TableRenstra } from "@/components/pages/renstra/Table";
import { getToken, getOpdTahun, getUser } from "@/components/lib/Cookie";
import { useEffect, useState } from "react";
import Select from 'react-select';
import Maintenance from "@/components/global/Maintenance";
import { OpdNull } from "@/components/global/OpdTahunNull";

interface Periode {
    value: number;
    label: string;
    id: number;
    tahun_awal: string;
    tahun_akhir: string;
    jenis_periode: string;
    tahun_list: string[];
}

const LaporanRenstra = () => {

    const token = getToken();
    const [Periode, setPeriode] = useState<Periode | null>(null);
    const [PeriodeOption, setPeriodeOption] = useState<Periode[]>([]);

    const [User, setUser] = useState<any>(null);
    const [SelectedOpd, setSelectedOpd] = useState<any>(null);
    const [Loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchUser = getUser();
        const data = getOpdTahun();
        if (fetchUser) {
            setUser(fetchUser.user);
        }
        if (data.opd) {
            const opd = {
                label: data.opd.label,
                value: data.opd.value,
            }
            setSelectedOpd(opd);
        }
    }, []);

    const fetchPeriode = async () => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        try {
            setLoading(true);
            const response = await fetch(`${API_URL}/periode/findall`, {
                headers: {
                    Authorization: `${token}`,
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();
            const hasil = result.data;
            const data = hasil.map((item: any) => ({
                value: item.id,
                label: `${item.tahun_awal} - ${item.tahun_akhir} (${item.jenis_periode})`,
                tahun_awal: item.tahun_awal,
                tahun_akhir: item.tahun_akhir,
                jenis_periode: item.jenis_periode,
                tahun_list: item.tahun_list,
            }));
            setPeriodeOption(data);
        } catch (err) {
            console.error("error fetch periode", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Laporan</p>
                <p className="mr-1">/ Laporan Renstra</p>
            </div>
            <div className="mt-3 rounded-xl shadow-lg border">
                <div className="flex items-center justify-between border-b px-5 py-5">
                    <div className="flex flex-wrap items-end">
                        <h1 className="uppercase font-bold">Laporan Renstra |</h1>
                        {User?.roles == 'super_admin' &&
                            <h1 className="uppercase font-bold ml-1">{SelectedOpd?.label} |</h1>
                        }
                        <h1 className="uppercase font-bold ml-1">(Periode {Periode?.tahun_awal} - {Periode?.tahun_akhir})</h1>
                    </div>
                    <Select
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                borderRadius: '8px',
                                minWidth: '200.562px',
                                minHeight: '38px'
                            })
                        }}
                        onChange={(option) => {
                            setPeriode(option);
                        }}
                        options={PeriodeOption}
                        isClearable
                        isLoading={Loading}
                        placeholder="Pilih Periode ..."
                        value={Periode}
                        isSearchable
                        onMenuOpen={() => {
                            fetchPeriode();
                        }}
                    />
                </div>
                {(User?.roles == 'super_admin' || User?.roles == 'reviewer') &&
                    SelectedOpd?.value === undefined ? (
                    <OpdNull />
                ) : (
                    Periode ?
                        <div className="p-1">
                            {/* <Maintenance /> */}
                            <TableRenstra />
                        </div>
                        :
                        <div className="m-5">
                            <h1>Pilih Periode terlebih dahulu</h1>
                        </div>
                )
                }
            </div>
        </>
    )
}

export default LaporanRenstra;