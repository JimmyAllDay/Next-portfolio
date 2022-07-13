export default function TechEd() {
  return (
    <div className="mt-5">
      <div
        className="inline-flex pl-5 pr-2 pt-[0.1em] pb-[0.25em]"
        id="techTrain"
      >
        <h3 className="text-2xl font-secondary text-accent">Tech Training</h3>
      </div>
      <div className="px-5 py-2">
        <table className="w-full">
          <thead className="mb-2">
            <tr>
              <th className="text-left align-top">Provider</th>
              <th className="text-left align-top">Name</th>
              <th className="text-left align-top">Date Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-2 pb-1 align-top">Udacity</td>
              <td className="pr-2 pb-1 align-top">
                Full Stack Javascript Developer Nano-Degree
              </td>
              <td className="pr-2 pb-1 align-top">
                December 2021 - March 2022
              </td>
            </tr>
            <tr>
              <td className="pr-2 pb-1 align-top">Udacity</td>
              <td className="pr-2 pb-1 align-top">React Nano-Degree</td>
              <td className="pr-2 pb-1 align-top">July 2021 - November 2021</td>
            </tr>

            <tr>
              <td className="pr-2 pb-1 align-top">Udacity</td>
              <td className="pr-2 pb-1 align-top">
                Front End Developer Nano-Degree
              </td>
              <td className="pr-2 pb-1 align-top">January 2021 - May 2021</td>
            </tr>

            <tr>
              <td className="pr-2 pb-1 align-top">
                Online and hard copy resources
              </td>
              <td className="pr-2 pb-1 align-top">
                Various self directed studies
              </td>
              <td className="pr-2 pb-1 align-top">Ad-hoc</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
