import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {

    const [data,changeData] = useState(
        [
            {"Name":"ORWEL","AdmNo":111,"Roll":26 },
            {"Name":"RICHI","AdmNo":121,"Roll":27 },
            {"Name":"JOE","AdmNo":131,"Roll":28 },
            {"Name":"RITHWIK","AdmNo":411,"Roll":29 },
            {"Name":"MEGHNA","AdmNo":151,"Roll":36 },
            {"Name":"SIVA","AdmNo":116,"Roll":37 },
            {"Name":"NIVEDHYA","AdmNo":611,"Roll":38 },
            {"Name":"ORWEL","AdmNo":111,"Roll":26 },
            {"Name":"RICHI","AdmNo":121,"Roll":27 },
            {"Name":"JOE","AdmNo":131,"Roll":28 },
            {"Name":"RITHWIK","AdmNo":411,"Roll":29 },
            {"Name":"MEGHNA","AdmNo":151,"Roll":36 },
            {"Name":"SIVA","AdmNo":116,"Roll":37 },
            {"Name":"NIVEDHYA","AdmNo":611,"Roll":38 }
        ]
    )

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">

                        {data.map(
                            (value,index) => {
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{value.Name}</h5>
                                        <p class="card-text">{value.AdmNo}</p>
                                        <p><b>{value.Roll}</b></p>
                                        <a href="#" class="btn btn-primary">MoreDetails</a>
                                    </div>
                                </div>
    
                            </div>
                            }
                        )}

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll