'use client'

import { useState, useEffect } from "react";
import { Controller, SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { ButtonSky, ButtonRed } from '@/components/global/Button';
import { AlertNotification } from "@/components/global/Alert";
import { getOpdTahun, getToken } from "@/components/lib/Cookie";
import Select from 'react-select';

interface OptionType {
    value: number;
    label: string;
}
interface OptionTypeString {
    value: string;
    label: string;
}
interface modal {
    jenis: "pemda" | "opd";
    isOpen: boolean;
    onClose: () => void;
    id?: number;
    nama_pohon?: string;
    nama_opd?: string;
    onSuccess: () => void;
}
interface FormValue {
    tahun_awal: number;
    tahun_tujuan: OptionType;
}
interface indikator {
    nama_indikator: string;
    targets: target[];
}
type target = {
    target: string;
    satuan: string;
};

export const ModalClone: React.FC<modal> = ({ isOpen, onClose, onSuccess, id, nama_pohon, nama_opd, jenis }) => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValue>();

    const [TahunTarget, setTahunTarget] = useState<OptionType | null>(null);

    const [Proses, setProses] = useState<boolean>(false);

    const [Tahun, setTahun] = useState<any>(null);
    const token = getToken();

    useEffect(() => {
        const data = getOpdTahun();
        if(data.tahun){
            const tahun = {
                value: data.tahun.value,
                label: data.tahun.label,
            }
            setTahun(tahun);
        }
    },[])

    const handleClose = () => {
        setTahunTarget(null);
        onClose();
    }

    const tahunOption = [
        { label: "2019", value: 2019 },
        { label: "2020", value: 2020 },
        { label: "2021", value: 2021 },
        { label: "2022", value: 2022 },
        { label: "2023", value: 2023 },
        { label: "2024", value: 2024 },
        { label: "2025", value: 2025 },
        { label: "2026", value: 2026 },
        { label: "2027", value: 2027 },
        { label: "2028", value: 2028 },
        { label: "2029", value: 2029 },
        { label: "2030", value: 2030 },
    ];

    const onSubmit: SubmitHandler<FormValue> = async (data) => {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const formData = {
            //key : value
            id: id,
            tahun_awal: Tahun?.value,
            tahun_tujuan: TahunTarget?.value,
            jenis: jenis,
        };
        if (Tahun?.value === TahunTarget?.value) {
            AlertNotification("Tahun Sekarang sama dengan Tahun Tujuan", "", "warning", 2000);
        } else if (TahunTarget?.value === undefined) {
            AlertNotification("Tahun Tujuan Wajib Diisi", "", "warning", 2000);
        } else {
            AlertNotification("Fitur Clone dalam pengembangan", "", "error", 2000);
            // console.log(formData);
            // try{
            //     const response = await fetch(`${API_URL}/pohon_kinerja_opd/pindah_parent/${id}`, {
            //         method: "POST",
            //         headers: {
            //             Authorization: `${token}`,
            //             "Content-Type" : "application/json",
            //         },
            //         body: JSON.stringify(formData),
            //     });
            //     if(response.ok){
            //         AlertNotification("Berhasil", "Berhasil Pindah Pohon", "success", 1000);
            //         onClose();
            //         onSuccess();
            //     } else {
            //         AlertNotification("Gagal", "terdapat kesalahan pada backend / database server", "error", 2000);
            //     }
            // } catch(err){
            //     AlertNotification("Error", "cek koneksi internet/terdapat kesalahan pada database server", "error", 2000);
            //     console.error(err);
            // }
        }
    };

    if (!isOpen) {
        return null;
    } else {

        return (
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className={`fixed inset-0 bg-black opacity-30`} onClick={handleClose}></div>
                <div className={`bg-white rounded-lg p-8 z-10 w-4/5 max-h-[80%] text-start overflow-auto`}>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="w-max-[500px] py-2 mb-2 border-b-2 border-gray-300 text-center uppercase font-bold">
                            Clone Pohon Kinerja {jenis === 'pemda' ? "Pemda" : "OPD"}
                        </div>
                        {jenis === 'pemda' &&
                            <div className="flex flex-col py-3">
                                <label
                                    className="uppercase text-xs font-bold text-gray-700 my-2"
                                    htmlFor="nama_pohon"
                                >
                                    Nama Tematik
                                </label>
                                <div className="border px-4 py-2 rounded-lg">{nama_pohon}</div>
                            </div>
                        }
                        {jenis === 'opd' &&
                            <div className="flex flex-col py-3">
                                <label
                                    className="uppercase text-xs font-bold text-gray-700 my-2"
                                    htmlFor="nama_opd"
                                >
                                    Nama OPD
                                </label>
                                <div className="border px-4 py-2 rounded-lg">{nama_opd}</div>
                            </div>
                        }
                        <div className="flex flex-col py-3">
                            <label
                                className="uppercase text-xs font-bold text-gray-700 my-2"
                                htmlFor="tahun_objek"
                            >
                                Tahun Sekarang
                            </label>
                            <div className="border px-4 py-2 rounded-lg">{Tahun?.value}</div>
                        </div>
                        <div className="flex flex-col justify-center pr-2 pb-5">
                            <label
                                className="uppercase text-xs font-medium text-gray-700 my-2"
                                htmlFor="tahun_tujuan"
                            >
                                Tahun Tujuan Clone
                            </label>
                            <Controller
                                name="tahun_tujuan"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <Select
                                            {...field}
                                            placeholder="Pilih Tahun Tujuan Clone"
                                            value={TahunTarget}
                                            options={tahunOption}
                                            isSearchable
                                            isClearable
                                            // menuShouldBlockScroll={true}
                                            // menuPlacement="top"
                                            menuPortalTarget={document.body} // Render menu ke document.body
                                            onChange={(option) => {
                                                field.onChange(option);
                                                setTahunTarget(option);
                                            }}
                                            styles={{
                                                control: (baseStyles) => ({
                                                    ...baseStyles,
                                                    borderRadius: '8px',
                                                    textAlign: 'start',
                                                }),
                                                menuPortal: (base) => ({ 
                                                    ...base, zIndex: 9999 
                                                })
                                            }}
                                        />
                                    </>
                                )}
                            />
                        </div>
                        <ButtonSky type="submit" className="w-full my-3">
                            Simpan
                        </ButtonSky>
                        <ButtonRed className="w-full my-3" onClick={handleClose}>
                            Batal
                        </ButtonRed>
                    </form>
                </div>
            </div>
        )
    }
}