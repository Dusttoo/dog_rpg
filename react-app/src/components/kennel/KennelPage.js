import React from "react";
import { useSelector } from "react-redux";


const KennelPage = () => {
    const user = useSelector(state => state.session.user)

    return (
        <h1>{user.kennel_name}</h1>
    )
}

export default KennelPage;