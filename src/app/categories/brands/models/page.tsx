import React from "react";
import "./style.css";
import Link from "next/link";


const generateRandomString = (length: any) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// Generate 50 random strings and add them to the sampleData array
const data1 = Array.from({ length: 50 }, () => generateRandomString(8));
const data2 = Array.from({ length: 300 }, () => generateRandomString(16));
const data3 = Array.from({ length: 120 }, () => generateRandomString(12));



const TableItems = ({ sampleData }: any) => {
    const renderRows = () => {
        const rows = [];
        for (let i = 0; i < sampleData.length; i += 6) {
            const row = sampleData.slice(i, i + 6);
            rows.push(
                <tr key={i}>
                    {row.map((item, index) => (
                        <td style={{ color: "blue" }} key={index}>
                            <Link key={index} href="/products" className="table-link">
                                <span style={{ color: "blue" }}>{item}</span>
                            </Link>
                        </td>
                    ))}
                </tr>
            );
        }
        return rows;
    };

    return (
        <div className="table-responsive">
            <table className="table">
                <tbody>{renderRows()}</tbody>
            </table>
        </div>
    );
};

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 main-col">
                    <div id="accordionExample">
                        <h2 className="title h2">Payment and Returns</h2>
                        <div className="faq-body">
                            <h4
                                className="panel-title"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                What is Lorem Ipsum?
                            </h4>
                            <div
                                id="collapseOne"
                                className="collapse panel-content"
                                data-parent="#accordionExample"
                            >
                                <TableItems sampleData={data1} />
                            </div>
                        </div>
                        <div className="faq-body">
                            <h4
                                className="panel-title"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Why do we use it?
                            </h4>
                            <div id="collapseTwo" className="collapse panel-content">
                                <TableItems sampleData={data2} />
                            </div>
                        </div>
                        <div className="faq-body">
                            <h4
                                className="panel-title"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                How to use this template?
                            </h4>
                            <div className="panel-content collapse" id="collapseThree">
                                <TableItems sampleData={data3} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
