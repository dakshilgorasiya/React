import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function User() {
    const data = useLoaderData();

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
    );
}

export const githubInfoLoader = async () => {
    // const response = await fetch('https://api.github.com/users/dakshilgorasiya');
    // return response.json(); 
    return fetch('https://api.github.com/users/dakshilgorasiya').then((res)=>res.json())
}