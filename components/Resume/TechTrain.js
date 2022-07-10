export default function TechEd() {
  return (
    <div className="mt-5">
      <div
        className="bg-accent inline-flex pl-5 pr-2 pt-[0.1em] pb-[0.25em]"
        id="techTrain"
      >
        <h3 className="text-4xl text-light">Tech Training</h3>
      </div>
      <div className="px-5 py-2">
        <table className="w-full">
          <thead className="mb-2">
            <tr>
              <th className="text-left">Provider</th>
              <th className="text-left">Name</th>
              <th className="text-left">Date Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-2 mb-1 align-top">Udacity</td>
              <td className="pr-2 mb-1 align-top">
                Full Stack Javascript Developer Nano-Degree
              </td>
              <td className="pr-2 mb-1 align-top">
                December 2021 - March 2022
              </td>
            </tr>
            <tr>
              <td className="pr-2 mb-1 align-top">Udacity</td>
              <td className="pr-2 mb-1 align-top">React Nano-Degree</td>
              <td className="pr-2 mb-1 align-top">July 2021 - November 2021</td>
            </tr>

            <tr>
              <td className="pr-2 mb-1 align-top">Udacity</td>
              <td className="pr-2 mb-1 align-top">
                Front End Developer Nano-Degree
              </td>
              <td className="pr-2 mb-1 align-top">January 2021 - May 2021</td>
            </tr>

            <tr>
              <td className="pr-2 mb-1 align-top">
                Online and hard copy resources
              </td>
              <td className="pr-2 mb-1 align-top">
                Various self directed studies
              </td>
              <td className="pr-2 mb-1 align-top">Ad-hoc</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
