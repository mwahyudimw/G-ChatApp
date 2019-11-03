import React, { Component } from 'react'
import "./ListPesan.css";

const styles = {
    textAlign: "left",
    padding: "20px",
    background: "#eee",
    width: "55%",
    borderRadius: "10px",
    float: "left",
    marginBottom: "10px"
}
const styles2 = {
    textAlign: "right",
    padding: "20px",
    background: "#eee",
    width: "55%",
    borderRadius: "10px",
    float: "right"
}
export default class ListPesan extends Component {
    render() {
        return (
            <div className="container">
                <ul>
                    <li style={styles}>(PENGIRIM)TES</li>
                    <li style={styles2}>(PENERIMA)TES</li>
                </ul>
        </div>
        )
    }
}
// /message/{sender_id}/{receiver_id}
// /message/send+