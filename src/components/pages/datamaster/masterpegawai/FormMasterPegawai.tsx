'use client'

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { ButtonGreen, ButtonRedBorder, ButtonSkyBorder, ButtonRed } from "@/components/global/Button";
import { LoadingClip } from "@/components/global/Loading";

interface OptionTypeString {
    value: string;
    label: string;
}
interface FormValue {
    nama: string;
    kode_opd: string;
    nip: string;
    role: string;
}

export const FormMasterPegawai = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [Nama, setNama] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');
    const [Nip, setNip] = useState<string>('');
    const [Role, setRole] = useState<string>('');

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const formData = {
            //key : value
            kode_opd : data.kode_opd,
            nama : data.nama,
            nip : data.nip,
            role : data.role, 
        };
        console.log(formData);
      };

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Tambah Pegawai :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama"
                    >
                        Nama :
                    </label>
                    <Controller
                        name="nama"
                        control={control}
                        rules={{ required: "Nama harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama"
                                    type="text"
                                    placeholder="masukkan Nama"
                                    value={field.value || Nama}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNama(e.target.value);
                                    }}
                                />
                                {errors.nama ?
                                    <h1 className="text-red-500">
                                    {errors.nama.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_opd"
                    >
                        Kode OPD :
                    </label>
                    <Controller
                        name="kode_opd"
                        control={control}
                        rules={{ required: "Kode OPD harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="kode_opd"
                                    type="text"
                                    placeholder="masukkan Kode OPD"
                                    value={field.value || KodeOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeOpd(e.target.value);
                                    }}
                                />
                                {errors.kode_opd ?
                                    <h1 className="text-red-500">
                                    {errors.kode_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode OPD Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nip"
                    >
                        NIP :
                    </label>
                    <Controller
                        name="nip"
                        control={control}
                        rules={{ required: "NIP harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nip"
                                    type="text"
                                    placeholder="masukkan NIP"
                                    value={field.value || Nip}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNip(e.target.value);
                                    }}
                                />
                                {errors.nip ?
                                    <h1 className="text-red-500">
                                    {errors.nip.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*NIP Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="role"
                    >
                        Role :
                    </label>
                    <Controller
                        name="role"
                        control={control}
                        rules={{ required: "Role harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="role"
                                    type="text"
                                    placeholder="masukkan Role"
                                    value={field.value || Role}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setRole(e.target.value);
                                    }}
                                />
                                {errors.role ?
                                    <h1 className="text-red-500">
                                    {errors.role.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Role Harus Terisi</h1>
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
                <ButtonRed type="button" halaman_url="/DataMaster/masterpegawai">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}
export const FormEditMasterPegawai = () => {

    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValue>();
    const [Nama, setNama] = useState<string>('');
    const [KodeOpd, setKodeOpd] = useState<string>('');
    const [Nip, setNip] = useState<string>('');
    const [Role, setRole] = useState<string>('');
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const [idNull, setIdNull] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchIdOpd = async() => {
            setLoading(true);
            try{
                const response = await fetch(`${API_URL}/lorem`);
                if(!response.ok){
                    throw new Error('terdapat kesalahan di koneksi backend');
                }
                const result = await response.json();
                if(result.code == 500){
                    setIdNull(true);
                } else {
                    const data = result.data;
                    if(data.nama){
                        setNama(data.nama);
                    }
                    if(data.kode_opd){
                        setKodeOpd(data.kode_opd);
                    }
                    if(data.nip){
                        setNip(data.nip);
                    }
                    if(data.role){
                        setRole(data.role)
                    }
                }
            } catch(err) {
                setError('gagal mendapatkan data, periksa koneksi internet atau database server')
            } finally {
                setLoading(false);
            }
        }
        fetchIdOpd();
    },[]);

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
      const formData = {
          //key : value
          kode_opd : data.kode_opd,
          nama : data.nama,
          nip : data.nip,
          role : data.role, 
      };
      console.log(formData);
    };

    if(loading){
        return (    
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Pegawai :</h1>
                <LoadingClip className="mx-5 py-5"/>
            </div>
        );
    } else if(error){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Pegawai :</h1>
                <h1 className="text-red-500 mx-5 py-5">{error}</h1>
            </div>
        )
    } else if(idNull){
        return (
            <div className="border p-5 rounded-xl shadow-xl">
                <h1 className="uppercase font-bold">Form Edit Pegawai :</h1>
                <h1 className="text-red-500 mx-5 py-5">id tidak ditemukan</h1>
            </div>
        )
    }

    return(
    <>
        <div className="border p-5 rounded-xl shadow-xl">
            <h1 className="uppercase font-bold">Form Edit Pegawai :</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col mx-5 py-5"
            >
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nama"
                    >
                        Nama :
                    </label>
                    <Controller
                        name="nama"
                        control={control}
                        rules={{ required: "Nama harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nama"
                                    type="text"
                                    placeholder="masukkan Nama"
                                    value={field.value || Nama}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNama(e.target.value);
                                    }}
                                />
                                {errors.nama ?
                                    <h1 className="text-red-500">
                                    {errors.nama.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Nama Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="kode_opd"
                    >
                        Kode OPD :
                    </label>
                    <Controller
                        name="kode_opd"
                        control={control}
                        rules={{ required: "Kode OPD harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="kode_opd"
                                    type="text"
                                    placeholder="masukkan Kode OPD"
                                    value={field.value || KodeOpd}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setKodeOpd(e.target.value);
                                    }}
                                />
                                {errors.kode_opd ?
                                    <h1 className="text-red-500">
                                    {errors.kode_opd.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Kode OPD Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="nip"
                    >
                        NIP :
                    </label>
                    <Controller
                        name="nip"
                        control={control}
                        rules={{ required: "NIP harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="nip"
                                    type="text"
                                    placeholder="masukkan NIP"
                                    value={field.value || Nip}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setNip(e.target.value);
                                    }}
                                />
                                {errors.nip ?
                                    <h1 className="text-red-500">
                                    {errors.nip.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*NIP Harus Terisi</h1>
                                }
                            </>
                        )}
                    />
                </div>
                <div className="flex flex-col py-3">
                    <label
                        className="uppercase text-xs font-bold text-gray-700 my-2"
                        htmlFor="role"
                    >
                        Role :
                    </label>
                    <Controller
                        name="role"
                        control={control}
                        rules={{ required: "Role harus terisi" }}
                        render={({ field }) => (
                            <>
                                <input
                                    {...field}
                                    className="border px-4 py-2 rounded-lg"
                                    id="role"
                                    type="text"
                                    placeholder="masukkan Role"
                                    value={field.value || Role}
                                    onChange={(e) => {
                                        field.onChange(e);
                                        setRole(e.target.value);
                                    }}
                                />
                                {errors.role ?
                                    <h1 className="text-red-500">
                                    {errors.role.message}
                                    </h1>
                                    :
                                    <h1 className="text-slate-300 text-xs">*Role Harus Terisi</h1>
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
                <ButtonRed type="button" halaman_url="/DataMaster/masterpegawai">
                    Kembali
                </ButtonRed>
            </form>
        </div>
    </>
    )
}