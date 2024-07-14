
# KnowYourClient

KnowYourClient is a comprehensive JavaScript library for detecting and analyzing client-side information, including browser details, operating system, device type, and more.

## Features

- 🌐 Detailed browser detection
- 💻 Operating system identification
- 📱 Device type recognition
- 🚀 Browser engine detection
- 🖥️ Screen and display information
- 🔒 Privacy and security settings detection

# Use
<script src="knowyourclient.js"></script>

const clientInfo = detectClientInfo();

console.log("Browser:", clientInfo.browser.name, clientInfo.browser.version);

console.log("OS:", clientInfo.os.name, clientInfo.os.version);

console.log("Device:", clientInfo.device.type, clientInfo.device.model);

console.log("Engine:", clientInfo.engine.name, clientInfo.engine.version);

|     Property     |   Type  |            Description            |
|:----------------:|:-------:|:---------------------------------:|
| browser          | Object  | Browser name and version          |
| os               | Object  | Operating system name and version |
| device           | Object  | Device type and model             |
| engine           | Object  | Browser engine name and version   |
| userAgent        | String  | Full user agent string            |
| platform         | String  | Platform information              |
| vendor           | String  | Browser vendor                    |
| cookieEnabled    | Boolean | Whether cookies are enabled       |
| language         | String  | Preferred language                |
| onLine           | Boolean | Network connection status         |
| javaEnabled      | Boolean | Whether Java is enabled           |
| doNotTrack       | String  | Do Not Track setting              |
| screenResolution | String  | Screen resolution                 |
| colorDepth       | Number  | Color depth                       |
| pixelRatio       | Number  | Device pixel ratio                |

const clientInfo = detectClientInfo();

if (clientInfo.browser.name === "Chrome" && parseFloat(clientInfo.browser.version) >= 90) {
  console.log("You're using a recent version of Chrome!");
}

const clientInfo = detectClientInfo();

if (clientInfo.device.type === "Mobile") {
  console.log("You're using a mobile device!");
}

# Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

# License
Use it as you want.

Inspired by the need for accurate client-side detection in modern web applications.


Made with ❤️ by Akhlas
