const getOSBitVersion = () => {
  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();

  if (platform.includes("mac")) {
    return "64-bit";
  }

  if (platform.includes("win")) {
    if (userAgent.includes("wow64") || userAgent.includes("win64")) {
      return "64-bit";
    }
    return "32-bit";
  }

  if (platform.includes("linux")) {
    if (userAgent.includes("x86_64") || userAgent.includes("amd64")) {
      return "64-bit";
    }
    return "32-bit";
  }

  return "Unknown";
};

export default getOSBitVersion;
