export default function DataTable({ columns, data }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#112A46]/10 bg-white/90 shadow-[0_18px_55px_rgba(17,42,70,0.10)] backdrop-blur">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#112A46] text-sm text-white">
              {columns.map((col, i) => (
                <th key={i} className="whitespace-nowrap px-6 py-4 font-semibold">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-[#112A46]/10">
            {data.map((row, i) => (
              <tr key={i} className="transition duration-300 hover:bg-[#FDF1A5]/35">
                {columns.map((col, j) => (
                  <td key={j} className="px-6 py-4 text-sm text-[#112A46]">
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
