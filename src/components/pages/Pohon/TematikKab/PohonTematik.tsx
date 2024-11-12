import '@/components/pages/Pohon/treeflex.css'
import { useState, useEffect } from 'react';
import { LoadingBeat } from '@/components/global/Loading';
import { ButtonSkyBorder, ButtonRedBorder, ButtonGreenBorder } from '@/components/global/Button';
import { TbCirclePlus, TbPencil, TbTrash } from 'react-icons/tb';
import { AlertNotification, AlertQuestion } from '@/components/global/Alert';
import { getOpdTahun } from '@/components/lib/Cookie';
import { OpdTahunNull } from '@/components/global/OpdTahunNull';
import { ModalAddStrategic, ModalEditStrategic } from '../ModalStrategic';
import Pohon from '@/components/lib/PohonTematik/Pohon';

interface pohontematik {
  id: number;
}
interface opd {
  kode_opd: string;
  nama_opd: string;
}

interface tematik {
  id: number;
  parent: number;
  tema: string;
  taget: string;
  satuan: string;
  keterangan: string;
  indikators: string;
  sub_tematiks: subtematik[];
}
interface subtematik {
  id: number;
  parent: number;
  tema_sub_tematik: string;
  keterangan: string;
  indikators: string;
  strategics: strategics[];
}
interface strategics {
  id: number;
  parent: number;
  strategi: string;
  keterangan: string;
  indikators: string;
  perangkat_daerah: opd;
  tacticals: tacticals[];
}
interface tacticals {
  id: number;
  parent: number;
  strategi: string;
  keterangan: string;
  indikators: string;
  kode_perangkat_daerah: opd;
  operationals: operationals[];
}
interface operationals {
  id: number;
  parent: number;
  strategi: string;
  keterangan: string;
  indikators: string;
  kode_perangkat_daerah: opd;
}

const PohonTematik = ({ id }: pohontematik) => {

  const [Pokin, setPokin] = useState<tematik[]>([]);
  const [Loading, setLoading] = useState<boolean | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchTematikKab = async () => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      setLoading(true);
      try {
        const response = await fetch(`${API_URL}/pohon_kinerja_admin/tematik/${id}`);
        if (!response.ok) {
          throw new Error('terdapat kesalahan di koneksi backend');
        }
        const result = await response.json();
        const data = result?.data || [];
        setPokin(data);
      } catch (err) {
        setError('gagal mendapatkan data, terdapat kesalahan backend/server saat mengambil data pohon kinerja tematik');
      } finally {
        setLoading(false);
      }
    }
    if (id != undefined) {
      fetchTematikKab();
    }
  }, [id]);

  if (error) {
    return (
      <div className="flex flex-col p-5 border-b-2 border-x-2 rounded-b-xl">
        <h1 className="text-red-500">{error}</h1>
      </div>
    )
  }
  if (Loading) {
    return (
      <div className="flex flex-col p-5 border-b-2 border-x-2 rounded-b-xl">
        <LoadingBeat className="mx-5 py-5" />
      </div>
    )
  }

  return (
      <div className="tf-tree text-center mt-3">
        <ul>
          <Pohon tema={Pokin} />
        </ul>
      </div>
  )
}

export default PohonTematik;
