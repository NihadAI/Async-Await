function fetchIpAddress() {
    const ipRequest = new XMLHttpRequest();
    ipRequest.onreadystatechange = function() {
      if (ipRequest.readyState === 4 && ipRequest.status === 200) {
        const data = JSON.parse(ipRequest.responseText);
        const ipAddress = data.ip;
        fetchAddressInfo(ipAddress);
      }
    };
    ipRequest.open('GET', 'https://api.ipify.org/?format=json', true);
    ipRequest.send();
  }

  function fetchAddressInfo(ipAddress) {
    const addressRequest = new XMLHttpRequest();
    addressRequest.onreadystatechange = function() {
      if (addressRequest.readyState === 4 && addressRequest.status === 200) {
        const addressInfo = JSON.parse(addressRequest.responseText);
        displayAddressInfo(addressInfo);
      }
    };
    addressRequest.open('GET', `https://ip-api.com/json/${ipAddress}`, true);
    addressRequest.send();
  }

  function displayAddressInfo(addressInfo) {
    const infoContainer = document.getElementById('info-container');
    infoContainer.innerHTML = `
      <p>Continent: ${addressInfo.continent}</p>
      <p>Country: ${addressInfo.country}</p>
      <p>Region: ${addressInfo.regionName}</p>
      <p>City: ${addressInfo.city}</p>
      <p>District: ${addressInfo.district}</p>
    `;
  }

  /*it gives GET https://ip-api.com/json/188.253.227.180 403 (Forbidden), 
  but I hope the algorithm would please you*/