<h1 align="center"> Xaeon</h1>
<p align="center">This repository contains the codebase for the XAEON web and Electron apps.</p>

## Getting Started

This project uses [npm](https://nodejs.org/en). Make sure you have it installed before proceeding.

1. Clone the repository: `git clone https://github.com/Utherverse-Digital/xaeon`
2. Navigate to the root of the project: `cd xaeon`
3. Install dependencies: `npm i`

To run the web app: `npm run web:dev`

To run the Electron app: `npm run electron:dev`

## hCaptcha

The web app uses [hCaptcha](https://www.hcaptcha.com) to prevent spam in some routes. The hCaptcha API prohibits localhost and 127.0.0.1 as supplied hostnames ([source](https://docs.hcaptcha.com/#local-development)). To get around this, you can add a custom hostname to your hosts file.

Add the following line to the bottom of your hosts file (/`private/etc/hosts` on macOS, `C:\Windows\System32\Drivers\etc\hosts` on Windows):

```
127.0.0.1 test.mydomain.com
```

Then, in your browser, navigate to `test.mydomain.com:3000`. You should see the web app running. hCaptcha should now work as expected.

## Scripts

To run the web app: `npm run web:dev`

To run the Electron app: `npm run electron:dev`

We use date-based versioning (`YY-MM-Patch`) For example, the first release of January 2024 would be 24.1.0. For nightly builds, we add a `-nighlty-r` suffix, where `r` is the prepatch. For example, the second nightly build of 24.1.2 would be 24.1.2-nightly-1

The following commands can help with versioning:

`prepare-patch`: Bump the patch version, git-tag, commit, push.

`prepare-nightly`: Bump the prepatch version, git-tag, commit, push.

`prepare-month-patch`: Same as `prepare-patch`, but for the first patch of the month.

`prepare-month-nightly`: Same as `prepare-nightly`, but for the first patch of the month.

For build commands, see the next section.

## Building

To build the app for Windows, from a Windows machine, run `npm run electron:build:win`

Building the app for macOS requires a bit more work:

1. Enroll in the Apple Development Program
2. Go to: Account > Certificates. Click the blue "+" button to create a new certificate
3. When prompted to choose a type, select "Developer ID Application"
4. You will need to upload a "Certificate Signing Request". Open Keychain Access.app and navigate to:

   Keychain Access > Certificate Assistant > Request a Certificate from a Certificate Authority

5. Fill out the form:

> User Email Address: \<your email address>
>
> Common Name: \<anything>
>
> CA Email Address: \<leave empty>
>
> Request is: Saved to disk

6. Upload the generated `.certSigningRequest` file
7. Download the certificate. Double click to install it into Keychain
8. Create a `.env` file. use `.env.example` as a template
9. run `npm run electron:build:mac`

The build output will be located at `apps/desktop/dist`

If uploading to a release server, copy over the .exe or DMG file, the associated `.blockmap`, and `latest.yml` (`latest-mac.yml` for macOS builds). The latter two files are used by the autoupdater.

## Monorepo Structure

### Apps

- `desktop`: An Electron app
- `web`: A Remix web app

### Packages

- `interface`: A shared interface and component library
