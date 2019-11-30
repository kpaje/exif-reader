import React, { useState, useEffect } from "react";
import Exif from "../components/Exif";
import Fingerprint2 from "fingerprintjs2";
import DataTable from "../components/DataTable"; // Custom component to render our data

function HomePage() {
  const getFingerprint = () =>
    new Promise(resolve => {
      Fingerprint2.get(components => {
        resolve(components);
      });
    });

  const cleanData = f => {
    for (let key in f) {
      if (f[key] === null || f[key] === undefined || f[key] instanceof Error) {
        delete f[key];
      }
      if (Array.isArray(f[key])) {
        f[key] = f[key].join(", ");
      }
      if (
        (typeof f[key] === "string" || f[key] instanceof String) &&
        f[key].length === 0
      ) {
        delete f[key];
      }
      if (typeof f[key] === "boolean") {
        f[key] = `${f[key]}`;
      }
    }

    return f;
  };

  const [fingerprint, setFingerprint] = useState(null);
  const [ipData, setIpData] = useState(null);
  const [showReport, setShowReport] = useState(true);

  useEffect(() => {
    if (showReport) {
      fetch("https://extreme-ip-lookup.com/json")
        .then(res => res.json())
        .then(ip => Promise.all([ip, getFingerprint()]))
        .then(([ip, finger]) => {
          let f = finger
            .map(({ key, value }) => ({ [key]: value }))
            .reduce((acc, curr) => ({
              ...acc,
              ...curr
            }));

          f = cleanData(f);
          ip = cleanData(ip);

          setFingerprint(f);
          setIpData(ip);
          setShowReport(false);
        });
    }
  }, [showReport]);
  return (
    <div>
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

      <Exif />
    </div>
  );
}

export default HomePage;
