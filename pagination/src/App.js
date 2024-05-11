import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function Page() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = () => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
        console.error("failed to fetch data", error);
      });
  };


    const totalPages= Math.ceil(data.length/10);
    const startIndex=(currentPage-1)*10;
    const endIndex=Math.min(startIndex +10 ,data.length);
    
    const nextPage=()=>{
      setCurrentPage((prevPage)=>Math.min(prevPage +1,totalPages));
    }
    
    const prevPage=()=>{
      setCurrentPage((prevPage)=>Math.max(prevPage-1,1));
    }


  return (
    <div className="mainwrapper">
      <div>
        <h1>Employee Data Table</h1>
      </div>

      <table className="tablewrapper">
        <thead>
          <tr className="tabletitle">
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex).map((user) => {
            return (
              <tr className="tablerole">
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="pages">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span className="currentpage">{`${currentPage} `}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}
export default Page;