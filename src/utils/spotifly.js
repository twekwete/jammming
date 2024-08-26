let accessToken;
const Client_ID = "c9f371212fee40619b32af95f03e0c93";
const spotifly = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // extract access token from URL
    const tokenURL =  window.location.href.match(/access_token=([^&]*)/);

    // extract expiry time from URL
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    if(tokenURL && expiryTime){
        accessToken = tokenURL
        const expiresIn = Number(expiryTime[1])

        window.setTimeout(() => (accessToken = ""),expiresIn*1000);
        window.history.pushState("Access token",null,"/");

        return accessToken;
    }
  },
};

export default spotifly;
