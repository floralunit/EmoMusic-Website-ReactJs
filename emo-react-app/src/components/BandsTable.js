import React from 'react'
import '../styles/table.css';
import {NavLink} from "react-router-dom";

export function BandsTable() {
    return (
        <div className="table">
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
                    <td className="tdLow">
                        <NavLink to={"/sleeping-for-sunrise"}>Neil Perry</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/sleeping-for-sunrise"}>You And I</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/sleeping-for-sunrise"}>Yaphet Kotto</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>Мидвест-эмо</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/american-football"}>American Football</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/camping-in-alaska"}>Camping in Alaska</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/marietta"}>Marietta</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/tiny-moving-parts"}>Tiny Moving Parts</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>Русское эмо</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/bird-bone"}>Bird Bone</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/botanichesky-sad"}>botanichesky sad</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/hay-king"}>hay king</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/sostoyanie-ptits"}>состояние птиц</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/eto"}>это</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/florist"}>флорист</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                <tr>
                    <td className="tdUp">
                        <p align="center"><b>Не 90-е, не мидвест и не русское :p</b></p></td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/reasons"}>Reasons</NavLink>
                    </td>
                </tr>
                <tr>
                    <td className="tdLow">
                        <NavLink to={"/oakwood"}>Oakwood</NavLink>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
