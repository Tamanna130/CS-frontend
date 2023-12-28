import React from 'react'

export default function Result() {
  return (
    <div className="container my-4">
            <div className="col-sm-2 my-4"></div>
            <div className="col-sm-8 my-4">
                <h4>Your Quiz results</h4>
                <table className="table table-bordered my-4">
                    <thead>
                        <tr>
                            <th>Total number of Questions</th>
                            <th>hfdjfhkd</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Attempted qusetions</td>
                            <td>dhjh</td>
                        </tr>
                        <tr>
                            <td className="text-success">Right answer </td>
                            <td className="text-success">deiwuie</td>
                        </tr>
                        <tr>
                            <td class="text-danger">Wrong answer</td>
                            <td class="text-danger">ewjwhejhw</td>
                        </tr>
                        <tr>
                            <td>No answer</td>
                            <td>1</td>
                        </tr>
                        <tr className="text-primary">
                            <td className="text-primary">Your result</td>
                            <td>50"%"</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-sm-2"></div>
        </div>

  )
}
