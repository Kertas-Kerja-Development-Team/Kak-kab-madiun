import { useState } from 'react';
import { ButtonSky, ButtonRed } from '@/components/global/Button';

const FormPohon: React.FC<{ formId: number; onSave: (data: any, id: number) => void; onCancel: () => void }> = ({ formId, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ tema: '', keterangan: '' });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData, formId); // Pass form data and ID to parent on save
  };

  return (
    <li>
      <div className="tf-nc tf flex flex-col w-[600px] rounded-lg shadow-lg shadow-slate-500">
        <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black">
          <h1>Buat Sub Tematik Baru</h1>
        </div>
        <div className="flex justify-center my-3 ">
          <form onSubmit={handleSave} className="w-full">
            <div className="flex flex-col py-3">
              <label className="uppercase text-xs font-bold text-gray-700 my-2" htmlFor="tema">
                Tema:
              </label>
              <input
                type="text"
                id="tema"
                value={formData.tema}
                onChange={(e) => setFormData({ ...formData, tema: e.target.value })}
                className="border rounded p-2"
              />
            </div>
            <div className="flex flex-col py-3">
              <label className="uppercase text-xs font-bold text-gray-700 my-2" htmlFor="keterangan">
                Keterangan:
              </label>
              <input
                type="text"
                id="keterangan"
                value={formData.keterangan}
                onChange={(e) => setFormData({ ...formData, keterangan: e.target.value })}
                className="border rounded p-2"
              />
            </div>
            <ButtonSky type="submit" className="w-full my-3">
              Simpan
            </ButtonSky>
            <ButtonRed className="w-full my-3" onClick={onCancel}>
              Batal
            </ButtonRed>
          </form>
        </div>
      </div>
    </li>
  );
};

export default FormPohon;
