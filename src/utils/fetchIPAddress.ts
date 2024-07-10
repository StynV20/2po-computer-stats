const fetchIPAddress = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (e) {
    console.error("Error fetching the IP address: " + e);
  }
};

export default fetchIPAddress;
