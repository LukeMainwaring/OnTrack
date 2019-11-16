# OnTrack

Prerequisites for running locally:

Download Expo Client app from App Store

- Once downloaded, create account/profile
- After starting the mobile app locally (/ontrack-app \$ npm start) a browser
  window will open with a QR code. Point your Camera app at this QR code, and
  an option to open the app in Expo will appear.

Download ngrok - https://gist.github.com/wosephjeber/aa174fb851dfe87e644e

- tl;dr: ngrok mimics having a separate backend api endpoint
- There are two local servers we run when developing

1. backend Express server (Node/Express)
2. the mobile app client (Node/React-Native)

These may exist on different networks, which makes the API
connection difficult. Ngrok creates a tunnel into our localhost at a specified port.
For our project, run '\$ ngrok http 8080' to forward a URL to our local backend
server. Note this URL expires every 8 hours.
