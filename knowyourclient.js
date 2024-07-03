const detectClientInfo = () => {
  const userAgent = navigator.userAgent;
  const appVersion = navigator.appVersion;
  const platform = navigator.platform;
  const vendor = navigator.vendor;

  const browserInfo = (() => {
    const ua = userAgent.toLowerCase();
    const browserMatches = [
      { regex: /edge|edg\/([0-9.]+)/, name: "Edge" },
      { regex: /opr\/([0-9.]+)/, name: "Opera" },
      { regex: /chrome\/([0-9.]+)/, name: "Chrome" },
      { regex: /version\/([0-9.]+).*safari/, name: "Safari" },
      { regex: /firefox\/([0-9.]+)/, name: "Firefox" },
      { regex: /msie ([0-9.]+)/, name: "Internet Explorer" },
      { regex: /trident.+rv:([0-9.]+)/, name: "Internet Explorer" },
      { regex: /brave\/([0-9.]+)/, name: "Brave" },
      { regex: /vivaldi\/([0-9.]+)/, name: "Vivaldi" },
      { regex: /seamonkey\/([0-9.]+)/, name: "SeaMonkey" },
      { regex: /sailfish\/([0-9.]+)/, name: "Sailfish" },
      { regex: /silk\/([0-9.]+)/, name: "Silk" },
      { regex: /yabrowser\/([0-9.]+)/, name: "Yandex" },
      { regex: /ucbrowser\/([0-9.]+)/, name: "UC Browser" },
      { regex: /samsungbrowser\/([0-9.]+)/, name: "Samsung Browser" },
    ];

    for (const browser of browserMatches) {
      const match = ua.match(browser.regex);
      if (match) {
        return { name: browser.name, version: match[1] };
      }
    }

    return { name: "Unknown Browser", version: "Unknown" };
  })();

  const osInfo = (() => {
    const osMatches = [
      { regex: /windows nt 10\.0/, name: "Windows", version: "10" },
      { regex: /windows nt 6\.3/, name: "Windows", version: "8.1" },
      { regex: /windows nt 6\.2/, name: "Windows", version: "8" },
      { regex: /windows nt 6\.1/, name: "Windows", version: "7" },
      { regex: /windows nt 6\.0/, name: "Windows", version: "Vista" },
      { regex: /windows nt 5\.2/, name: "Windows", version: "Server 2003/XP x64" },
      { regex: /windows nt 5\.1/, name: "Windows", version: "XP" },
      { regex: /windows xp/, name: "Windows", version: "XP" },
      { regex: /windows nt 5\.0/, name: "Windows", version: "2000" },
      { regex: /windows me/, name: "Windows", version: "ME" },
      { regex: /win98/, name: "Windows", version: "98" },
      { regex: /win95/, name: "Windows", version: "95" },
      { regex: /win16/, name: "Windows", version: "3.11" },
      { regex: /macintosh|mac os x/, name: "macOS" },
      { regex: /mac_powerpc/, name: "macOS", version: "9" },
      { regex: /linux/, name: "Linux" },
      { regex: /ubuntu/, name: "Ubuntu" },
      { regex: /iphone/, name: "iOS" },
      { regex: /ipod/, name: "iOS" },
      { regex: /ipad/, name: "iPadOS" },
      { regex: /android/, name: "Android" },
      { regex: /blackberry/, name: "BlackBerry" },
      { regex: /webos/, name: "webOS" },
      { regex: /freebsd/, name: "FreeBSD" },
      { regex: /openbsd/, name: "OpenBSD" },
      { regex: /netbsd/, name: "NetBSD" },
    ];

    const ua = userAgent.toLowerCase();
    for (const os of osMatches) {
      if (os.regex.test(ua)) {
        let version = "Unknown";
        const match = ua.match(new RegExp(`${os.name.toLowerCase()}\\s+([\\d._]+)`));
        if (match) {
          version = match[1].replace(/_/g, '.');
        } else if (os.version) {
          version = os.version;
        }
        return { name: os.name, version };
      }
    }

    return { name: "Unknown OS", version: "Unknown" };
  })();

  const deviceInfo = (() => {
    const ua = userAgent.toLowerCase();
    const deviceMatches = [
      { regex: /iphone/, type: "Mobile", model: "iPhone" },
      { regex: /ipod/, type: "Mobile", model: "iPod" },
      { regex: /ipad/, type: "Tablet", model: "iPad" },
      { regex: /android.*mobile/, type: "Mobile", model: "Android" },
      { regex: /android(?!.*mobile)/, type: "Tablet", model: "Android" },
      { regex: /blackberry/, type: "Mobile", model: "BlackBerry" },
      { regex: /windows phone/, type: "Mobile", model: "Windows Phone" },
      { regex: /macintosh|mac os x/, type: "Desktop", model: "Mac" },
      { regex: /linux/, type: "Desktop", model: "Linux" },
      { regex: /windows nt/, type: "Desktop", model: "Windows" },
    ];

    for (const device of deviceMatches) {
      if (device.regex.test(ua)) {
        return device;
      }
    }

    return { type: "Unknown", model: "Unknown" };
  })();

  const engineInfo = (() => {
    const ua = userAgent.toLowerCase();
    const engineMatches = [
      { regex: /webkit\/([0-9.]+)/, name: "WebKit" },
      { regex: /gecko\/([0-9.]+)/, name: "Gecko" },
      { regex: /trident\/([0-9.]+)/, name: "Trident" },
      { regex: /presto\/([0-9.]+)/, name: "Presto" },
      { regex: /blink\/([0-9.]+)/, name: "Blink" },
    ];

    for (const engine of engineMatches) {
      const match = ua.match(engine.regex);
      if (match) {
        return { name: engine.name, version: match[1] };
      }
    }

    return { name: "Unknown Engine", version: "Unknown" };
  })();

  return {
    browser: browserInfo,
    os: osInfo,
    device: deviceInfo,
    engine: engineInfo,
    userAgent,
    appVersion,
    platform,
    vendor,
    cookieEnabled: navigator.cookieEnabled,
    language: navigator.language || navigator.userLanguage,
    onLine: navigator.onLine,
    javaEnabled: navigator.javaEnabled ? navigator.javaEnabled() : false,
    doNotTrack: navigator.doNotTrack || window.doNotTrack || navigator.msDoNotTrack,
    screenResolution: `${screen.width}x${screen.height}`,
    colorDepth: screen.colorDepth,
    pixelRatio: window.devicePixelRatio || 1,
  };
};

// Usage
const clientInfo = detectClientInfo();
console.log("Browser:", clientInfo.browser.name, clientInfo.browser.version);
console.log("OS:", clientInfo.os.name, clientInfo.os.version);
console.log("Device:", clientInfo.device.type, clientInfo.device.model);
console.log("Engine:", clientInfo.engine.name, clientInfo.engine.version);
console.log("User Agent:", clientInfo.userAgent);
console.log("Platform:", clientInfo.platform);
console.log("Vendor:", clientInfo.vendor);
console.log("Cookie Enabled:", clientInfo.cookieEnabled);
console.log("Language:", clientInfo.language);
console.log("Online:", clientInfo.onLine);
console.log("Java Enabled:", clientInfo.javaEnabled);
console.log("Do Not Track:", clientInfo.doNotTrack);
console.log("Screen Resolution:", clientInfo.screenResolution);
console.log("Color Depth:", clientInfo.colorDepth);
console.log("Pixel Ratio:", clientInfo.pixelRatio);
