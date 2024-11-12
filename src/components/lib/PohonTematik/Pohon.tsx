export default (tema: any) => {
  const childs = tema.tema.sub_tematiks
  const listDahans = childs?.map((dahan: any, index: any) =>
    <li>
      <Pohon tema={dahan} jenisDahan="Sub Tematik" key={index} />
    </li>
  );
  return (
    <li>
      <Pohon tema={tema} jenisDahan="Tematik" />
      <ul>
        {listDahans}
      </ul>
    </li>
  )
}

const Pohon = (props: any) => {
  console.log(props)
  return (
    <div className="tf-nc tf flex flex-col w-[600px] rounded-lg shadow-lg shadow-slate-500">
      {/* HEADER */}
      <div className="flex pt-3 justify-center font-bold text-lg uppercase border my-3 py-3 border-black">
        <h1>{props.jenisDahan}</h1>
      </div>
      {/* BODY */}
      <PohonBody item={props.tema} />
      {/* button */}
      <div className="flex justify-center border my-3 py-3 border-black">
      </div>
      {/* footer */}
      <div className="flex justify-center my-3 py-3">
      </div>
    </div>
  )
}

const PohonBody = (item: any) => {
  const tema = item.item.tema_sub_tematik
  const keterangan = item.item.keterangan
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
