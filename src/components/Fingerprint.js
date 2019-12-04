import React, { useState, useEffect } from "react";
import DataTable from "../components/DataTable"; // Custom component to render our data
import {
  getIpAndFingerprintData,
  formatFingerprint,
  cleanUpData
} from "../api/fingerprintjs2";

function Fingerprint() {
  const [fingerprint, setFingerprint] = useState(null);
  const [ipData, setIpData] = useState(null);
  const [showReport, setShowReport] = useState(true);

  const generateData = ([ipAddress, clientFingerprint]) => {
    let fingerprint = formatFingerprint(clientFingerprint);
    cleanUpData(ipAddress, fingerprint);
    setIpData(ipAddress);
    setFingerprint(fingerprint);
    setShowReport(false);
  };

  useEffect(() => {
    if (showReport) {
      getIpAndFingerprintData().then(generateData);
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