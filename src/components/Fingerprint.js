import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable"; // Custom component to render our data
import { cleanData } from "../utils/helpers";
import { getFingerprint } from "../api/fingerprintjs2";

function Fingerprint() {
  const [fingerprint, setFingerprint] = useState(null);
  const [ipData, setIpData] = useState(null);
  const [showReport, setShowReport] = useState(true);

  useEffect(() => {
    if (showReport) {
      fetch("https://extreme-ip-lookup.com/json")
        .then(res => res.json())
        .then(ipAddress => Promise.all([ipAddress, getFingerprint()]))
        .then(([ipAddress, deviceFingerprint]) => {
          console.log(deviceFingerprint);
          let fingerprint = deviceFingerprint
            .map(({ key, value }) => ({ [key]: value }))
            .reduce((acc, curr) => ({
              ...acc,
              ...curr
            }));

          fingerprint = cleanData(fingerprint);
          ipAddress = cleanData(ipAddress);

          setFingerprint(fingerprint);
          setIpData(ipAddress);
          setShowReport(false);
        });
    }
  }, [showReport]);
  return (
    <div>
      {ipData && fingerprint ? (
        <div>
          <DataTable title="IP Data" data={ipData} />
          <DataTable title="Fingerprint" data={fingerprint} />
        </div>
      ) : (
        <div>
          <h2>Please wait...</h2>
        </div>
      )}
    </div>
  );
}

export default Fingerprint;
