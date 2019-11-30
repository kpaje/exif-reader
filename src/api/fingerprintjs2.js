import Fingerprint2 from "fingerprintjs2";

export const getFingerprint = () =>
  new Promise(resolve => {
    Fingerprint2.get(components => {
      resolve(components);
    });
  });
