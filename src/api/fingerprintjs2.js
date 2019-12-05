import Fingerprint2 from "fingerprintjs2";
import { cleanData, setObjKeyValues, setObjSpread } from "../utils/helpers";

const getFingerprint = () =>
	new Promise(resolve => {
		Fingerprint2.get(components => {
			resolve(components);
		});
	});

async function fetchIpData() {
	let response = await fetch("https://extreme-ip-lookup.com/json").catch(
		console.error
	);
	let data = await response.json().catch(console.error);
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
