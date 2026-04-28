'use client'

import { FiHome } from 'react-icons/fi';
import { ButtonGreen } from '@/components/global/Button';
import Musrebang from '@/components/pages/rencanakinerja/Rincian/Usulan';
import SubKegiatan from '@/components/pages/rencanakinerja/Rincian/SubKegiatan';
import Sakip from '@/components/pages/rencanakinerja/Rincian/Sakip';
import Renaksi from '@/components/pages/rencanakinerja/Rincian/Renaksi';
import DasarHukum from '@/components/pages/rencanakinerja/Rincian/DasarHukum';
import GambaranUmum from '@/components/pages/rencanakinerja/Rincian/GambaranUmum';
import Inovasi from '@/components/pages/rencanakinerja/Rincian/Inovasi';
import { AlertNotification } from '@/components/global/Alert';
import Permasalahan from '@/components/pages/rencanakinerja/Rincian/Permasalahan';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getUser, getOpdTahun } from '@/components/lib/Cookie';
import { TbDeviceFloppy } from 'react-icons/tb';
import { getToken } from '@/components/lib/Cookie';
import { FindallRincianRekin } from './type';

const RincianRencanaKinerja = () => {

    const params = useParams();
    const router = useRouter();
    const id_rekin = params.id as string;
    const token = getToken();

    const [Data, setData] = useState<FindallRincianRekin | null>(null);
    const [Loading, setLoading] = useState<boolean>(false);
    const [Error, setError] = useState<boolean>(false);
    const [User, setUser] = useState<any>(null);
    const [Tahun, setTahun] = useState<any>(null);

    useEffect(() => {
        const fetchUser = getUser();
        const data = getOpdTahun();
        if (fetchUser) {
            setUser(fetchUser.user);
        }
        if (data.tahun) {
            const tahun = {
                value: data.tahun.value,
                label: data.tahun.label,
            }
            setTahun(tahun);
        }
    }, []);

    useEffect(() => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const fetchSubKegiatan = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${API_URL}/rencana_kinerja/${id_rekin}/pegawai/${User?.nip}/input_rincian_kak`, {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const result = await response.json();
                const hasil = result.rencana_kinerja;
                if(result.code === 200){
                    setData(hasil[0]);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.log(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        if (User?.nip != undefined) {
            fetchSubKegiatan();
        }
    }, [id_rekin, User, token]);

    return (
        <>
            <div className="flex items-center">
                <a href="/" className="mr-1"><FiHome /></a>
                <p className="mr-1">/ Perencanaan</p>
                <p className="mr-1">/ Rencana Kinerja</p>
                <p>/ Nama sub kegiatan</p>
            </div>
            {(User?.roles != 'level_4' && User?.roles != 'level_2') ?
                <>
                    <div className="my-5">
                        <Musrebang
                            id={id_rekin}
                            nip={User?.nip}
                        />
                        <SubKegiatan
                            id={id_rekin}
                            tahun={Tahun?.value}
                            nip={User?.nip}
                            kode_opd={User?.kode_opd}
                        />
                        <Sakip id={id_rekin} />
                        <Renaksi id={id_rekin} />
                        <DasarHukum
                            id={id_rekin}
                            nip={User?.nip}
                        />
                        <GambaranUmum
                            id={id_rekin}
                            nip={User?.nip}
                        />
                        <Permasalahan
                            id={id_rekin}
                            nip={User?.nip}
                        />
                        {/* <Inovasi id={id_rekin}/> */}
                        <div className="w-full my-4">
                            <ButtonGreen
                                onClick={() => {
                                    AlertNotification("Tersimpan", "Data rincian rencana kinerja berhasil disimpan", "success", 2000);
                                    router.push('/rencanakinerja');
                                }}
                                className='w-full flex items-center gap-1'
                            >
                                <TbDeviceFloppy />
                                Selesai
                            </ButtonGreen>
                        </div>
                    </div>
                </>
                :
                <>
                    <Sakip id={id_rekin} />
                    <Renaksi id={id_rekin} />
                    <div className="w-full my-4">
                        <ButtonGreen
                            onClick={() => {
                                AlertNotification("Tersimpan", "Data rincian rencana kinerja berhasil disimpan", "success", 2000);
                                router.push('/rencanakinerja');
                            }}
                            className='w-full flex items-center gap-1'
                        >
                            <TbDeviceFloppy />
                            Selesai
                        </ButtonGreen>
                    </div>
                </>
            }
        </>
    )
}

export default RincianRencanaKinerja;