"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AffiliatePlacement from "./AffiliatePlacement";
import AffiliatePlacement2 from "./AffiliatePlacementIG";
export default function Home() {
  const [res, setRes] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("https://purr.woody.cat")
      setRes(response.data)
    }
    fetchData()
  }, [])

  if(!res) return <div className="flex flex-col items-center justify-center h-screen text-5xl text-orange-500">Loading...</div>

  const loadNew = async() => {
    const response = await axios.get("https://purr.woody.cat")
    setRes(response.data)
  }

  return (
    <div>
      <div className="px-8">
        <h1 className="text-3xl font-bold text-white">Random Woody</h1>
        <img src={res.Image} alt={"woody number " + res.ID} width={750} height={500} title="woody" className="border border-white border-x-4 border-y-4 lg:float-right"/>
        <p className="text-white">
          This Woody (ID): {res.ID}<br /><br/>
          <a onClick={loadNew} className="cursor-pointer text-orange-500 hover:underline">New Woody</a><br />
          <Link href={"/id/" + res.ID} className="text-orange-500 hover:underline">This Woody (permalink)</Link>
          <AffiliatePlacement2 />
          <a href={"https://purr.woody.cat/" + res.ID} className="text-orange-500 hover:underline">Woody REST API (this Woody)</a><br />
          <a href="https://purr.woody.cat/" className="text-orange-500 hover:underline">Woody REST API (random Woody)</a>
        </p>
      </div>
    </div>
  );
}
