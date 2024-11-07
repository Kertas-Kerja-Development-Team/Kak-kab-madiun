'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ButtonGreen, ButtonRedBorder, ButtonSkyBorder, ButtonRed } from "@/components/global/Button";
import { LoadingClip } from "@/components/global/Loading";
import { AlertNotification } from "@/components/global/Alert";
import { useParams, useRouter } from "next/navigation";
import Select from 'react-select'

interface OptionTypeString {
    value: string;
    label: string;
}
interface FormValue {
    id: string;
    nama_sub_kegiatan: string;
    kode_subkegiatan: string;
    indikator_subkegiatan: string;
    target_subkegiatan: string;
    satuan_target_subkegiatan: string;
    kode_opd: OptionTypeString;
}

export const FormSubKegiatan = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaSubKegiatan, setNamaSubKegiatan] = useState<string>('');
    const [KodeSubKegiatan, setKodeSubKegiatan] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<OptionTypeString | null>(null);
    const [OpdOption, setOpdOption] = useState<OptionTypeString[]>([]);
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();

    const fetchOpd = async() => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      setIsLoading(true);
      try{ 
        const response = await fetch(`${API_URL}/opd/findall`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if(!response.ok){
          throw new Error('cant fetch data opd');
        }
        const data = await response.json();
        const opd = data.data.map((item: any) => ({
          value : item.kode_opd,
          label : item.nama_opd,
        }));
        setOpdOption(opd);
      } catch (err){
        console.log('gagal mendapatkan data opd');
      } finally {
        setIsLoading(false);
      }
    };

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            nama_subkegiatan : data.nama_sub_kegiatan,
            // kode_subkegiatan : data.kode_subkegiatan,
            kode_opd : data.kode_opd?.value,
        };
        // console.log(formData);
        try{
            const response = await fetch(`${API_URL}/sub_kegiatan/create`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                AlertNotification("Berhasil", "Berhasil menambahkan data master sub kegiatan", "success", 1000);
                router.push("/DataMaster/masterprogramkegiatan/subkegiatan");
            } else {
                AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
            }
        } catch(err){
            AlertNotification("Gagal", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
        }
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Sub Kegiatan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_sub_kegiatan"
                    >
                        Nama Sub Kegiatan :
                    </label>
                    <Controller
                        name="nama_sub_kegiatan"
                        control={control}
                        rules={{ required: "Nama Sub Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_sub_kegiatan"
                                    type="text"
                                    placeholder="masukkan Nama Sub Kegiatan"
                                    value={field.value || NamaSubKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaSubKegiatan(e.target.value);
                                    }}
                                />
                                {errors.nama_sub_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.nama_sub_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Sub Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                {/* <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_subkegiatan"
                    >
                        Kode Sub Kegiatan :
                    </label>
                    <Controller
                        name="kode_subkegiatan"
                        control={control}
                        rules={{ required: "Kode Sub Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Sub Kegiatan"
                                    value={field.value || KodeSubKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeSubKegiatan(e.target.value);
                                    }}
                                />
                                {errors.kode_subkegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_subkegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Sub Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div> */}
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_opd"
                    >
                        Perangkat Daerah:
                    </label>
                    <Controller
                        name="kode_opd"
                        control={control}
                        rules={{required : "Perangkat Daerah Harus Terisi"}}
                        render={({ field }) => (
                        <>
                            <Select
                                {...field}
                                placeholder="Masukkan Perangkat Daerah"
                                value={KodeOpd}
                                options={OpdOption}
                                isLoading={IsLoading}
                                isSearchable
                                isClearable
                                onMenuOpen={() => {
                                    if (OpdOption.length === 0) {
                                    fetchOpd();
                                    }
                                }}
                                onMenuClose={() => {
                                    setOpdOption([]);
                                }}
                                onChange={(option) => {
                                    field.onChange(option);
                                    setKodeOpd(option);
                                }}
                                styles={{
                                    control: (baseStyles) => ({
                                    ...baseStyles,
                                    borderRadius: '8px',
                                    })
                                }}
                            />
                            {errors.kode_opd ?
                                <h1 className="text-red-500">
                                    {errors.kode_opd.message}
                                </h1>
                            :
                                <h1 className="text-slate-300 text-xs">*Perangkat Daerah Harus Terisi</h1>
                            }
                        </>
                        )}
                    />
                </div>
                <ButtonGreen
                    type="submit"
                    className="my-4"
                >
                    Simpan
                </ButtonGreen>
                <ButtonRed type="button" halaman_url="/DataMaster/masterprogramkegiatan/subkegiatan">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}
export const FormEditSubKegiatan = () => {

    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<FormValue>();
    const [NamaSubKegiatan, setNamaSubKegiatan] = useState<string>('');
    const [KodeSubKegiatan, setKodeSubKegiatan] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<OptionTypeString | null>(null);
    const [OpdOption, setOpdOption] = useState<OptionTypeString[]>([]);
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [IsLoading, setIsLoading] = useState<boolean>(false);
    const [idNull, setIdNull] = useState<boolean | null>(null);
    const router = useRouter();
    const {id} = useParams();

    useEffect(() => {
        const fetchIdSubKegiatan = async() => {
            setLoading(true);
            try{
                const response = await fetch(`${API_URL}/sub_kegiatan/detail/${id}`);
                if(!response.ok){
                    throw new Error('terdapat kesalahan di koneksi backend');
                }
                const result = await response.json();
                if(result.code == 500){
                    setIdNull(true);
                } else {
                    const data = result.sub_kegiatan;
                    if(data.nama_sub_kegiatan){
                        setNamaSubKegiatan(data.nama_sub_kegiatan);
                        reset((prev) => ({ ...prev, nama_subkegiatan: data.nama_subkegiatan }))
                    }
                    if(data.kode_sub_kegiatan){
                        setKodeSubKegiatan(data.kode_sub_kegiatan);
                        reset((prev) => ({ ...prev, kode_subkegiatan: data.kode_subkegiatan }))
                    }
                    if(data.kode_opd){
                        const opd = {
                            value: data.kode_opd.kode_opd,
                            label: data.kode_opd.nama_opd,
                        }
                        setKodeOpd(opd);
                        reset((prev) => ({ ...prev, kode_opd: opd }))
                    }
                }
            } catch(err) {
                setError('gagal mendapatkan data, periksa koneksi internet atau database server')
            } finally {
                setLoading(false);
            }
        }
        fetchIdSubKegiatan();
    },[]);

    const fetchOpd = async() => {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      setIsLoading(true);
      try{ 
        const response = await fetch(`${API_URL}/opd/findall`,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if(!response.ok){
          throw new Error('cant fetch data opd');
        }
        const data = await response.json();
        const opd = data.data.map((item: any) => ({
          value : item.kode_opd,
          label : item.nama_opd,
        }));
        setOpdOption(opd);
      } catch (err){
        console.log('gagal mendapatkan data opd');
      } finally {
        setIsLoading(false);
      }
    };

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
      const formData = {
          //key : value
          nama_subkegiatan : data.nama_sub_kegiatan,
        //   kode_subkegiatan : data.kode_subkegiatan,
          kode_opd : data.kode_opd?.value,
      };
        //   console.log(formData);
        try{
            const response = await fetch(`${API_URL}/sub_kegiatan/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(formData),
            });
            if(response.ok){
                AlertNotification("Berhasil", "Berhasil menambahkan data master sub kegiatan", "success", 1000);
              router.push("/DataMaster/masterprogramkegiatan/subkegiatan");
            } else {
                AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
            }
        } catch(err){
            AlertNotification("Gagal", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
        }
    };

    if(loading){
        return (    
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
                <LoadingClip className="mx-5 py-5"/>
            </div>
        );
    } else if(error){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">{error}</h1>
            </div>
        )
    } else if(idNull){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
                <h1 className="text-red-500 mx-5 py-5">id tidak ditemukan</h1>
            </div>
        )
    }

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Edit Sub Kegiatan :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama_sub_kegiatan"
                    >
                        Nama Sub Kegiatan :
                    </label>
                    <Controller
                        name="nama_sub_kegiatan"
                        control={control}
                        rules={{ required: "Nama Sub Kegiatan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama_sub_kegiatan"
                                    type="text"
                                    placeholder="masukkan Nama Sub Kegiatan"
                                    value={field.value || NamaSubKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNamaSubKegiatan(e.target.value);
                                    }}
                                />
                                {errors.nama_sub_kegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.nama_sub_kegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Sub Kegiatan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                {/* <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_subkegiatan"
                    >
                        Kode Bidang Urusan :
                    </label>
                    <Controller
                        name="kode_subkegiatan"
                        control={control}
                        rules={{ required: "Kode Bidang Urusan harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="tahun"
                                    type="text"
                                    placeholder="masukkan Kode Bidang Urusan"
                                    value={field.value || KodeSubKegiatan}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeSubKegiatan(e.target.value);
                                    }}
                                />
                                {errors.kode_subkegiatan ?
                                    <h1 className="text-red-500">
                                    {errors.kode_subkegiatan.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode Bidang Urusan Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div> */}
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_opd"
                    >
                        Perangkat Daerah:
                    </label>
                    <Controller
                        name="kode_opd"
                        control={control}
                        rules={{required : "Perangkat Daerah Harus Terisi"}}
                        render={({ field }) => (
                        <>
                            <Select
                                {...field}
                                placeholder="Masukkan Perangkat Daerah"
                                value={KodeOpd}
                                options={OpdOption}
                                isLoading={IsLoading}
                                isSearchable
                                isClearable
                                onMenuOpen={() => {
                                    if (OpdOption.length === 0) {
                                    fetchOpd();
                                    }
                                }}
                                onMenuClose={() => {
                                    setOpdOption([]);
                                }}
                                onChange={(option) => {
                                    field.onChange(option);
                                    setKodeOpd(option);
                                }}
                                styles={{
                                    control: (baseStyles) => ({
                                    ...baseStyles,
                                    borderRadius: '8px',
                                    })
                                }}
                            />
                            {errors.kode_opd ?
                                <h1 className="text-red-500">
                                    {errors.kode_opd.message}
                                </h1>
                            :
                                <h1 className="text-slate-300 text-xs">*Perangkat Daerah Harus Terisi</h1>
                            }
                        </>
                        )}
                    />
                </div>
                <ButtonGreen
                    type="submit"
                    className="my-4"
                >
                    Simpan
                </ButtonGreen>
                <ButtonRed type="button" halaman_url="/DataMaster/masterprogramkegiatan/subkegiatan">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}