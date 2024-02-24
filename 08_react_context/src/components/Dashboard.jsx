import React, { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Dashboad() {
    const { user } = useContext(UserContext);
    if (!user) return <h2>Not logged in</h2>;
    return <h2>Welcome, {user.username}</h2>;
}
