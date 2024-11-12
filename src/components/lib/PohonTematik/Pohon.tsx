import { TbCirclePlus } from 'react-icons/tb';
import { useState } from 'react';
import FormPohon from './FormPohon';


export default (tema: any) => {
  const [childPohons, setChildPohons] = useState(tema.tema.childs || []);
  const [formList, setFormList] = useState<number[]>([]); // List of form IDs

  // Adds a new form entry
  const newChild = () => {
    setFormList([...formList, Date.now()]); // Use unique IDs
  };

  // Add new item and remove form entry
  const addNewItem = (newItem: any, formId: number) => {
    setChildPohons([...childPohons, newItem]);
    setFormList(formList.filter((id) => id !== formId)); // Remove form entry
  };

  return (
    <li>
      <Pohon tema={tema.tema} newChild={newChild} />
      <ul className="parent">
        {childPohons.map((dahan: any, index: any) => (
          <li>
            <Pohon tema={dahan} newChild={newChild} key={index} />
          </li>
        ))}
        {formList.map((formId) => (
          <FormPohon
            key={formId}
            formId={formId}
            onSave={addNewItem}
            onCancel={() => setFormList(formList.filter((id) => id !== formId))}
          />
        ))}
      </ul>
    </li>
  )
}


function newChildButtonName(currLevel: string): string {
  switch (currLevel) {
    case 'Tematik':
      return 'Sub Tematik';
    case 'SubTematik':
      return 'Sub Sub Tematik';
    case 'Sub Sub Tematik':
      return 'Super Sub Tematik';
    default:
      return '-'
  }
}

const Pohon: React.FC<{ tema: any; newChild?: () => void }> = ({ tema, newChild }) => {
  return (
    <div className="tf-nc tf flex flex-col w-[600px] rounded-lg shadow-lg shadow-slate-500">
      {/* HEADER */}
      <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black">
        <h1>{tema.jenis_pohon}</h1>
      </div>
      {/* BODY */}
      <PohonBody item={tema} />
      {/* button */}
      <div className="flex justify-center border my-3 py-3 border-black">
      </div>
      {/* footer */}
      <div className="flex justify-center my-3 py-3">
        <button
          className={`px-3 flex justify-center items-center py-1 bg-gradient-to-r border-2 border-[#00A607] hover:bg-[#00A607] text-[#00A607] hover:text-white rounded-lg`}
          onClick={newChild}
        >
          <TbCirclePlus className='mr-1' />
          {newChildButtonName(tema.jenis_pohon)}
        </button>
      </div>
    </div>
  )
}

const PohonBody = (props: any) => {
  const tema = props.item.tema
  const keterangan = props.item.keterangan
  return (
    <div className="flex justify-center my-3">
      <table className='w-full'>
        <tbody>
          <tr>
            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Tema</td>
            <td className="min-w-[300px] border px-2 py-3 border-black text-start">{tema}</td>
          </tr>
          <tr>
            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Indikator</td>
            <td className="min-w-[300px] border px-2 py-3 border-black text-start">IND X</td>
          </tr>
          <tr>
            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Target/Satuan</td>
            <td className="min-w-[300px] border px-2 py-3 border-black text-start">TARGET X</td>
          </tr>
          <tr>
            <td className="min-w-[100px] border px-2 py-3 border-black text-start">Keterangan</td>
            <td className="min-w-[300px] border px-2 py-3 border-black text-start">{keterangan}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
