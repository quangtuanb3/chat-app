import React from "react"
import { useLocation, useParams } from "react-router-dom";
import G_icon from '../img/G.jpg';
import '../components/style/NameBar.css';
import users from '../AppConstant/users';



export const NameBar = ({ recipient }) => {
    const location = useLocation();
    const { recipientUid } = useParams();
    let recipientName = '...';

    if (location.pathname.includes("/chanel/")) {
        recipientName = recipientUid;
        // Use generalId as needed
    } else if (location.pathname.includes("/direct-message/")) {
        recipient = users.find((user) => user.uid === recipientUid);
    }


    return (
        <div className="nameBar">
            <img
                src={recipient?.photo || G_icon}
                style={{ marginRight: "10px", width: 40, height: 40, borderRadius: "50%" }} // Adjust the margin as needed
            >
            </img>
            <span style={{ display: "inline-block" }}>{recipient?.displayName || recipientName}</span>

        </div>
    )

}

