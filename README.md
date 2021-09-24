## Requirements

- Linux
- Yarn
- Node.js

## Setup

- `yarn install`

## Local Usage, works fine

- `yarn bazelisk run //:server`
  ```
  <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 00 c8 00 00 00 64 08 06 00 00 00 c3 86 7f 0b 00 00 00 01 73 52 47 42 00 ae ce 1c e9 00 00 04 2b ... 1087 more bytes>
  ```

## Deploy to K8s, throws error

```
(node:44) UnhandledPromiseRejectionWarning: Error: Failed to launch the browser process!
/app/server.runfiles/drakery/node_modules/puppeteer/.local-chromium/linux-901912/chrome-linux/chrome: error while loading shared libraries: libgobject-2.0.so.0: cannot open shared object file: No such file or directory

TROUBLESHOOTING: https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md
```

## K8s with custom base image, throws error

- `yarn bazelisk run //:kubernetes.apply`
  ```
  [link_node_modules.js] An error has been reported: [Error: EACCES: permission denied, symlink '/app/server.runfiles/npm/node_modules' -> 'node_modules'] {
    errno: -13,
    code: 'EACCES',
    syscall: 'symlink',
    path: '/app/server.runfiles/npm/node_modules',
    dest: 'node_modules'
  } Error: EACCES: permission denied, symlink '/app/server.runfiles/npm/node_modules' -> 'node_modules'
  ```
