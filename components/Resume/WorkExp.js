export default function WorkExp() {
  return (
    <div className="mt-5 max-w-5xl mx-auto print:max-w-7xl">
      <div
        className="inline-flex pl-5 pr-2 pt-[0.1em] pb-[0.25em]"
        id="workExp"
      >
        <h3 className="text-2xl font-secondary text-accent">Work Experience</h3>
      </div>
      <div className="px-5 py-2">
        <table className="table-fixed">
          <thead className="mb-2">
            <tr>
              <th className="text-left align-top w-1/3">Organisation</th>
              <th className="text-left align-top">Date</th>
              <th className="text-left align-top">Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-2 pb-1 align-top">IBAC</td>
              <td className="pr-2 pb-1 align-top">March 2022 - Current</td>
              <td className="pr-2 pb-1 align-top">
                Assessment and Review Officer
              </td>
            </tr>
            <tr>
              <td className="pr-2 pb-1 align-top">
                Department of Social Services
              </td>
              <td className="pr-2 pb-1 align-top">July 2021 - February 2022</td>
              <td className="pr-2 pb-1 align-top">
                Funding Arangement Manager
              </td>
            </tr>
            <tr>
              <td className="pr-2 pb-1 align-top">
                National Disability Insurance Agency
              </td>
              <td className="pr-2 pb-1 align-top">August 2018 - July 2021</td>
              <td className="pr-2 pb-1 align-top">Senior Case Officer</td>
            </tr>
            <tr>
              <td className="pr-2 pb-1 align-top">
                Department of Education and Training
              </td>
              <td className="pr-2 pb-1 align-top">May 2018 - August 2018</td>
              <td className="pr-2 pb-1 align-top">Project Officer</td>
            </tr>

            <tr>
              <td className="pr-2 pb-1 align-top">
                Aged Care Complaints Commissioner
              </td>
              <td className="pr-2 pb-1 align-top">August 2015 - May 2018</td>
              <td className="pr-2 pb-1 align-top">Senior Case Officer</td>
            </tr>

            <tr>
              <td className="pr-2 pb-1 align-top">Various</td>
              <td className="pr-2 pb-1 align-top">Pre August 2015</td>
              <td className="pr-2 pb-1 align-top">
                Various gov comms and media roles
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
