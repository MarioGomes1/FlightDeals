import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import styles from "./FlightList.module.css";

import axios from "axios";

//TODO haven't refactor yet
function FlightList(props) {
  const [countryName, setCountryName] = useState("");
  const [cityCodeFrom, setCityCodeFrom] = useState();
  const [cityCodeTo, setCityCodeTo] = useState("");
  const [date] = useState();
  let dataInfo = [""];
  const [] = useState();
  const [] = useState();

  const params = useParams();
  const from = params.from;
  const to = params.to;
  const start = params.start;
  const end = params.end;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      getFlights();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  async function getFlights() {
    const SEARCH_API_ENDPOINT = `https://tequila-api.kiwi.com/v2/search?fly_from=${from}&fly_to=${to}&dateFrom=${start}&dateTo=${end}&nights_in_dst_to=10&nights_in_dst_from=10&curr=usd&limit=10`;

    const config = {
      headers: {
        accept: "application/json",
        apikey: "1a3uomecE8h0iKQPFWck8DLgECSyWc3X",
      },
    };

    try {
      const { data } = await axios.get(SEARCH_API_ENDPOINT, config);
      dataInfo = data.data;
      // setCountryName = data.countryFrom.name;
      // setCityCodeFrom = data.cityCodeFrom;
      // setCityCodeTo = data.cityCodeTo;
      console.log(dataInfo.data);
    } catch {
      console.log("erro");
    }
  }

  async function booking() {
    const config = {
      headers: {
        accept: "application/json",
        apikey: "1a3uomecE8h0iKQPFWck8DLgECSyWc3X",
      },
    };
    try {
      const booking =
        "https://tequila-api.kiwi.com/v2/booking/check_flights?bnum=2&booking_token=CIGDuMfvt0VZCi2kWmKODfZq0oeCAQsFyvzWh2KbnCukQSyB61buy4igKEju9idA30wHlp8lAqsxBZ07nH91Pc9DsGTuPBxuTlauy3oyvnPaZSm6JL58LUVDKObst0hY3oeWsy7plZXXF-bwtdM0arTLf8hFWXH7NJUSS_0iC28WAzFRDuDUKBktgPax5peTBwRSLH7O-hGMDrf0Zl-6EaCQL57fVLdLh7OX-J0ykd6pO5HC7PNMGywKbHNmnyP8HF22VV2QmUktsS1YICQbUchtN4VxzaVKAGIH45I4xlHdYR0U7Lb3KtK1K56Kb-DYjSy4rGzXWrcoCBhpZcbPkZJrgAIMpgtk7Kj1ZsXZFgYIpaDH6lEmdKi_nVJFRZzbmgcVXq4pHaV1d_9qMCpWwghXss4eF3EyTKn_1hi6ZMsgyMNtFUt679uTpDLBOKzQHOk8-xXdWn5qq3TWnot3BiA";
      const response = await axios.get(booking, config);
      // dataInfo = data.data;
      console.log(response);
    } catch {
      console.log("erro");
    }
    return (
      <div>
        {dataInfo.map((flight) => {
          console.log(flight);
          return <li>{flight.countyFromName}</li>;
        })}
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.departure}>
          <ul>
            {dataInfo.map((flight, i) => {
              console.log(flight, i);
              return <li>{flight.cityCodeTo}</li>;
            })}
          </ul>
          <div>------</div>
          <div>-------</div>
          <div>-------</div>
        </div>
        <div className={styles.book}>
          <span onClick={booking}>Book Now!</span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.departure}>
          <ul>
            {dataInfo.map((flight, i) => {
              console.log(flight, i);
              return <li>{flight.cityCodeTo}</li>;
            })}
          </ul>
          <div>------</div>
          <div>-------</div>
          <div>-------</div>
        </div>
        <div className={styles.book}>
          <span onClick={booking}>Book Now!</span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.departure}>
          <ul>
            {dataInfo.map((flight, i) => {
              console.log(flight, i);
              return <li>{flight.cityCodeTo}</li>;
            })}
          </ul>
          <div>------</div>
          <div>-------</div>
          <div>-------</div>
        </div>
        <div className={styles.book}>
          <span onClick={booking}>Book Now!</span>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.departure}>
          <ul>
            {dataInfo.map((flight, i) => {
              console.log(flight, i);
              return <li>{flight.cityCodeTo}</li>;
            })}
          </ul>
          <div>------</div>
          <div>-------</div>
          <div>-------</div>
        </div>
        <div className={styles.book}>
          <span onClick={booking}>Book Now!</span>
        </div>
      </div>
    </div>
  );
}

export default FlightList;
