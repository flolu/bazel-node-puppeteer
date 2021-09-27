## Requirements

- Linux
- Yarn
- Node.js

## Setup

- `yarn install`

## Local Usage, works fine on Ubuntu

- `yarn bazelisk run //:server`
  ```
  <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 c8 00 00 00 64 08 06 00 00 00 c3 86 7f 0b 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 04 2b ... 1087 more bytes>
  ```

## Default nodejs_image, throws error

- `yarn bazelisk run //:image`

  ```
  (node:44) UnhandledPromiseRejectionWarning: Error: Failed to launch the browser process!
  /app/server.runfiles/node_puppeteer/node_modules/puppeteer/.local-chromium/linux-901912/chrome-linux/chrome: error while loading shared libraries: libgobject-2.0.so.0: cannot open shared object file: No such file or directory

  TROUBLESHOOTING: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
  ```

## Custom Ubuntu image, works fine

- `yarn bazelisk run //:custom_ubuntu`

  ```
  <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 c8 00 00 00 64 08 06 00 00 00 c3 86 7f 0b 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 04 2b ... 1087 more bytes>
  ```
