import Fingerprint2 from "fingerprintjs2";
import { cleanData, setObjKeyValues, setObjSpread } from "../utils/helpers";

var OPTIONS = {
	preprocessor: null,
	audio: {
		timeout: 1000,
		excludeIOS11: true
	},
	fonts: {
		swfContainerId: "fingerprintjs2",
		swfPath: "flash/compiled/FontList.swf",
		userDefinedFonts: [],
		extendedJsFonts: false
	},
	screen: {
		// To ensure consistent fingerprints when users rotate their mobile devices
		detectScreenOrientation: true
	},
	plugins: {
		sortPluginsFor: [/palemoon/i],
		excludeIE: false
	},
	extraComponents: [],
	excludes: {
		// Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
		enumerateDevices: true,
		// devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
		pixelRatio: true,
		// DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
		doNotTrack: true,
		// uses js fonts already
		fontsFlash: true,
		userAgent: true,
		webgl: true,
		fonts: true,
		canvas: true,
		plugins: true
	},
	NOT_AVAILABLE: "not available",
	ERROR: "error",
	EXCLUDED: "excluded"
};

// var components = [
// 	{ key: "userAgent", getData: UserAgent },
// 	{ key: "webdriver", getData: webdriver },
// 	{ key: "language", getData: languageKey },
// 	{ key: "colorDepth", getData: colorDepthKey },
// 	{ key: "deviceMemory", getData: deviceMemoryKey },
// 	{ key: "pixelRatio", getData: pixelRatioKey },
// 	{ key: "hardwareConcurrency", getData: hardwareConcurrencyKey },
// 	{ key: "screenResolution", getData: screenResolutionKey },
// 	{ key: "availableScreenResolution", getData: availableScreenResolutionKey },
// 	{ key: "timezoneOffset", getData: timezoneOffset },
// 	{ key: "timezone", getData: timezone },
// 	{ key: "sessionStorage", getData: sessionStorageKey },
// 	{ key: "localStorage", getData: localStorageKey },
// 	{ key: "indexedDb", getData: indexedDbKey },
// 	{ key: "addBehavior", getData: addBehaviorKey },
// 	{ key: "openDatabase", getData: openDatabaseKey },
// 	{ key: "cpuClass", getData: cpuClassKey },
// 	{ key: "platform", getData: platformKey },
// 	{ key: "doNotTrack", getData: doNotTrackKey },
// 	{ key: "plugins", getData: pluginsComponent },
// 	{ key: "canvas", getData: canvasKey },
// 	{ key: "webgl", getData: webglKey },
// 	{ key: "webglVendorAndRenderer", getData: webglVendorAndRendererKey },
// 	{ key: "adBlock", getData: adBlockKey },
// 	{ key: "hasLiedLanguages", getData: hasLiedLanguagesKey },
// 	{ key: "hasLiedResolution", getData: hasLiedResolutionKey },
// 	{ key: "hasLiedOs", getData: hasLiedOsKey },
// 	{ key: "hasLiedBrowser", getData: hasLiedBrowserKey },
// 	{ key: "touchSupport", getData: touchSupportKey },
// 	{ key: "fonts", getData: jsFontsKey, pauseBefore: true },
// 	{ key: "fontsFlash", getData: flashFontsKey, pauseBefore: true },
// 	{ key: "audio", getData: audioKey },
// 	{ key: "enumerateDevices", getData: enumerateDevicesKey }
// ];

const getFingerprint = () =>
	new Promise(resolve => {
		Fingerprint2.get(OPTIONS, components => {
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
