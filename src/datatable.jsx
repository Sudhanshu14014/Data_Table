import { useState } from "react";

const Datatable = () => {
    const [style, setStyle] = useState(true);

    const data = [
        {
            id: "1",
            first_name: "Lonnie",
            last_name: "O' Connell",
            email: "loconnell0@hao123.com",
            gender: "Male",
            ip_address: "163.42.164.152",
            "airport code": "OGO",
            time: "7/10/2022",
            status: "true",
            mobile: "707-462-9538",
            area: "9 Coleman Trail",
            show: "false",
            edit: "false",
        },
        {
            id: "2",
            first_name: "Nikolos",
            last_name: "Botler",
            email: "nbotler1@wikipedia.org",
            gender: "Male",
            ip_address: "116.251.170.231",
            "airport code": "CBB",
            time: "12/25/2021",
            status: "false",
            mobile: "240-316-9224",
            area: "6545 Waxwing Road",
            show: "false",
            edit: "false",
        },
        {
            id: "3",
            first_name: "Burgess",
            last_name: "Caddens",
            email: "bcaddens2@accuweather.com",
            gender: "Polygender",
            ip_address: "126.177.211.243",
            "airport code": "UKS",
            time: "2/24/2022",
            status: "false",
            mobile: "435-749-4095",
            area: "49260 Golf Course Court",
            show: "false",
            edit: "true",
        },
        {
            id: "4",
            first_name: "Elissa",
            last_name: "Lesslie",
            email: "elesslie3@blog.com",
            gender: "Female",
            ip_address: "163.18.115.96",
            "airport code": "SFE",
            time: "3/13/2022",
            status: "false",
            mobile: "877-992-0858",
            area: "65014 Gulseth Trail",
            show: "false",
            edit: "false",
        },
    ];

    const changeStyle = (e) => {
        setStyle(!style);
        if (style === true) e.currentTarget.style.backgroundColor = "yellow";
        else e.currentTarget.style.backgroundColor = "white";
    };

    return (
        <div>
            <table className="main-table sortable">
                <thead>
                    <tr className="main-tab-th table-heading">
                        <th className="table-head">
                            <div className="content">
                                Id
                                <div className="dropdown">
                                    <button className="sort-btn">
                                        <i className="fa fa-ellipsis-v"></i>
                                    </button>
                                    <div className="dropdown-content">
                                        <p>Unsort</p>
                                        <p>Sort by ASC</p>
                                        <p>Sort by DESC</p>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th className="table-head">First Name </th>
                        <th className="table-head">Last Name </th>
                        <th className="table-head">Gender </th>
                        <th className="table-head">IP_address </th>
                        <th className="table-head">Airport Code</th>
                        <th className="table-head">Time </th>
                        <th className="table-head">Status </th>
                        <th className="table-head">Mobile </th>
                        <th className="table-head">Area </th>
                        <th className="table-head">Show </th>
                        <th className="table-head">Edit </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr
                                className="main-tab-th"
                                key={index}
                                onClick={(e) => changeStyle(e)}
                            >
                                <td className="table-head">{item.id}</td>
                                <td className="table-head">
                                    {item.first_name}
                                </td>
                                <td className="table-head">{item.last_name}</td>
                                <td className="table-head">{item.gender}</td>
                                <td className="table-head">
                                    {item.ip_address}
                                </td>
                                <td className="table-head">
                                    {item["airport code"]}
                                </td>
                                <td className="table-head">{item.time}</td>
                                <td
                                    className={
                                        item.status === "true"
                                            ? "table-head true-value"
                                            : "table-head false-value"
                                    }
                                >
                                    {item.status}
                                </td>
                                <td className="table-head">{item.mobile}</td>
                                <td className="table-head">{item.area}</td>
                                <td className="table-head">{item.show}</td>
                                <td className="table-head">{item.edit}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Datatable;

// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// Code<button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>
// <button><i class="fa fa-ellipsis-v"></i></button>

// className={!style ? "main-tab-th": "main-tab-th clicked"}
