"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import AffiliatePlacement2 from "@/app/AffiliatePlacementIG";

export default function WoodyByID() {
    const params = useParams()
    const [res,setRes] = useState([]);
    const [error,setError] = useState();

    const id = params.id
    useEffect(() => {
        async function fetchData() {
            try {
            const response = await axios.get(`https://purr.woody.cat/${id}`)
            setRes(response.data)
            } catch(err) {
                setError(true)
            }
        }
        fetchData()
    }, []);

    if(error) {
        return(
            <div>
                <h1 className="text-white text-4xl font-bold">An error has occoured.</h1>
                <p className="text-white">This is likely due to your search.<br /><a href="/">Return to homepage.</a></p>
            </div>
        )
    } else {
        return (
            <div>
              <div className="px-8">
                <h1 className="text-3xl font-bold text-white">Woody By ID</h1>
                <img src={res.Image} alt={"woody number " + id} width={750} height={500} title="woody" className="border border-white border-x-4 border-y-4 lg:float-right"/>
                <p className="text-white">
                  This Woody (ID): {id}<br /><br/>
                  <Link href="/" className="cursor-pointer text-orange-500 hover:underline">Random Woody</Link>
                  <AffiliatePlacement2 />
                  <a href={"https://purr.woody.cat/" + id} className="text-orange-500 hover:underline">Woody REST API (this Woody)</a><br />
                  <a href="https://purr.woody.cat/" className="text-orange-500 hover:underline">Woody REST API (random Woody)</a>
                </p>
              </div>
            </div>
          );
    }
}
