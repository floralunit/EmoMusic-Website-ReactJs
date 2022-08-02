import React from 'react'
import '../styles/table.css';
import {NavLink} from "react-router-dom";

export function BandsTable() {
    return (
        <div className="about">
            <table className="table">
                <tbody>
                <td>
                    <table>
                        <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>Эмо 90-х</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to={"/bobtilton"}>Bob Tilton</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to={"/i-hate-myself"}>I Hate Myself</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to={"/mineral"}>Mineral</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to={"/kolya"}>Kolya</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <NavLink to={"/sleeping-for-sunrise"}>Sleeping for Sunrise</NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td className="transparent">Sunny Day</td>
                        </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table>
                        <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>Мидвест-эмо</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/ian_dury.htm">American Football</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">Camping in Alaska</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">Marietta</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">Tiny Moving Parts</a></td>
                        </tr>
                        <tr>
                            <td className="transparent">Sunny Day</td>
                        </tr>
                        <tr>
                            <td className="transparent">Sunny Day</td>
                        </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table>
                        <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>Русское эмо</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">Bird Bone</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/ian_dury.htm">botanichesky sad</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">hay king</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">состояние птиц</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">это</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">флорист</a></td>
                        </tr>
                        </tbody>
                    </table>
                </td>
                <td>
                    <table>
                        <tbody>
                        <tr>
                            <td className="tdUp">
                                <p align="center"><b>Остальное</b></p></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">Reasons</a></td>
                        </tr>
                        <tr>
                            <td className="tdLow">
                                <a href="../groups/idols.htm">Oakwood</a></td>
                        </tr>
                        <tr>
                            <td className="transparent">Sunny Day</td>
                        </tr>
                        <tr>
                            <td className="transparent">Sunny Day</td>
                        </tr>
                        <tr>
                            <td className="transparent">Sunny Day</td>
                        </tr>
                        <tr>
                            <td className="transparent">Sunny Day</td>
                        </tr>
                        </tbody>
                    </table>
                </td>
                </tbody>

            </table>
        </div>
    );
}
