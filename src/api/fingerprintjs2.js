import Fingerprint2 from "fingerprintjs2";
import { cleanData, setObjKeyValues, setObjSpread } from "../utils/helpers";

export const getFingerprint = () =>
  new Promise(resolve => {
    Fingerprint2.get(components => {
      resolve(components);
    });
  });

export async function fetchIpData() {
  let response = await fetch("https://extreme-ip-lookup.com/json");
  let data = await response.json();
  return data;
}

export function getIpAndFingerprintData() {
  return Promise.all([fetchIpData(), getFingerprint()]);
}

export function formatFingerprint(clientFingerprint) {
  return clientFingerprint.map(setObjKeyValues).reduce(setObjSpread);
}

export function cleanUpData(ipAddress, fingerprint) {
  return {
    fingerprint: cleanData(fingerprint),
    ipAddress: cleanData(ipAddress)
  };
}
