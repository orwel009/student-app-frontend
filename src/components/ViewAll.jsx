import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {

    const [data, changeData] = useState(
        [
            {
                "name":"Orwel",
                "rollNo":"122",
                "admNo":"717",
                "college":"fisat"
            },
            {
                "name":"Orwel",
                "rollNo":"122",
                "admNo":"717",
                "college":"fisat"
            },
            {
                "name":"Orwel",
                "rollNo":"122",
                "admNo":"717",
                "college":"fisat"
            },
            {
                "name":"Orwel",
                "rollNo":"122",
                "admNo":"717",
                "college":"fisat"
            },
            {
                "name":"Orwel",
                "rollNo":"122",
                "admNo":"717",
                "college":"fisat"
            }
        ]
    )
    

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">FullName</th>
                                    <th scope="col">RollNo</th>
                                    <th scope="col">College</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th scope="row">{index}</th>
                                            <td>{value.name}</td>
                                            <td>{value.rollNo}</td>
                                            <td>{value.college}</td>
                                        </tr>
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll