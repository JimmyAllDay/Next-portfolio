export default function TechEd() {
  return (
    <div className="resume__comp" id="techTrain">
      <div className="resume__comp-header-bg">
        <div className="resume__comp-header-margin"></div>
        <h3 className="resume__comp-title">Tech Training</h3>
      </div>
      <div className="resume__comp-body-table">
        <div>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Name</th>
              <th>Date Completed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Udacity</td>
              <td>Full Stack Javascript Developer Nano-Degree</td>
              <td>December 2021 - March 2022</td>
            </tr>
            <tr>
              <td>Udacity</td>
              <td>React Nano-Degree</td>
              <td>July 2021 - November 2021</td>
            </tr>

            <tr>
              <td>Udacity</td>
              <td>Front End Developer Nano-Degree</td>
              <td>January 2021 - May 2021</td>
            </tr>

            <tr>
              <td>Online and hard copy resources</td>
              <td>Various self directed studies</td>
              <td>Ad-hoc</td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
}
