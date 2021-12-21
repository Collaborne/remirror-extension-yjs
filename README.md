# @collaborne/remirror-extension-yjs

> Realtime collaboration with yjs

_Note: This is a fork for the original [@remirror/extension-yjs](https://npmjs.com/package/@remirror%2fextension-yjs), with some adjustments for Collaborne. Likely you want the original extension!._

## Installation

```sh
# npm
npm install yjs @collaborne/remirror-extension-yjs
```

You will also need to install your preferred [`YjsRealtimeProvider`](https://github.com/yjs/yjs#providers).

Due to the required peer dependencies this package is not included by default when installing `remirror`.

You will also need to install your preferred yjs protocol

```sh
# npm
npm install y-webrtc
```

## Usage

The following code creates an instance of this extension.

```ts
import { WebrtcProvider } from 'y-webrtc';
import { Doc } from 'yjs';
import { YjsExtension } from '@collaborne/remirror-extension-yjs';

const extension = new YjsExtension({
  getProvider: () => new WebrtcProvider('global', new Doc()),
});
```
