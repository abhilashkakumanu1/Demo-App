# Two-factor Authentication

Two-factor authentication (2FA) protects against unauthorized access to your account by confirming your identity using:

- something you know (such as your username and password)
- something you have - A physical possession e.g smartphone or access card or A biological attribute e.g biometrics such as fingerprints or retina

TOTP - Time-based One-time password

## What are we doing in this project?

1. We configure and set up a local JSON database by using the `node-json-db` package.
2. We created a route to register a new user. We are using `uuid` to generate a random id. We are generating a **temporary secret**. We are storing this temporary secret object against the id generated. temp_secret contains secret in- hex, base32, ascii, otpauth_url (for generating Barcode) encodings.
3. We grab this base32 value and create a new instance in the google authenticator app. We should select the TOTP method. After this is done, google authenticator will start generating the otps.
4. We created a "/verify" route - if the otp is correct, we are saving the secret object in the secret variable against the id (previously we saved it as temp_secret).

<hr/>

## [So, how does Google Authenticator work?](https://www.youtube.com/watch?v=XYVrnZK5MAU)

HOTP - HMAC (Hash-based Message Authentication) based OTP.
So, in this approach we have a shared secret (our server has this, and we give it to the google authenticator app), generally in base32 encoding. So, we run SHA1 cryptographic hashing algorithm on this secret and a counter. The secret remains the same, but as counter changes, hash changes.
To have counter sync between both the devices (server and phone), we can use UNIX epoch time as the counter as it is pretty much the same (We can allow a window for small irregularities). But, as time changes every second, we can divide it by a factor (let's say 30) to make it the same for a duration (30 seconds in this case).

SHA1 generates a 160-bit hash. We just take the 31 bits (unsigned integer) from it and find its modulo 10^6 or 10^8 to get the last 6 or 8 digits. This is used as the OTP.

As the secret is shared between two devices and the counter is the same (UNIX time is almost the same everywhere), both the devices can generate and confirm the OTP!

<hr/>

Instead of directly entering base32 secret in the google authenticator, we can also create a QR code that contains the secret, type (TOTP), and other required details!
