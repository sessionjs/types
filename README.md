# @session.js/types

Session Messenger messages schemas, TypeScript definitions and enums used by @session.js/client

To build your own Storage adapter, use:

```ts
import type { Storage } from '@session.js/types'

export class MyInMemoryStorage implements Storage {
	storage: Map<string, string> = new Map()

	get(key: string) {
		return this.storage.get(key) ?? null
	}

	set(key: string, value: string) {
		this.storage.set(key, value)
	}

	delete(key: string) {
		this.storage.delete(key)
	}

	has(key: string) {
		return this.storage.has(key)
	}
}
```

To build your own Network connecter, use:

```ts
import type { Network } from '@session.js/types'
import { 
	RequestType, 
	type RequestGetSwarmsBody, 
	type RequestPollBody, 
	type RequestStoreBody, 
	type RequestUploadAttachment 
} from '@session.js/types/network/request'

export class MyNetwork implements Network {
	onRequest(type: RequestType, body: object): Promise<object> {
		switch(type) {
			case RequestType.Store:
				return // typeof ResponseStore

			case RequestType.GetSnodes:
				return // typeof ResponseGetSnodes

			case RequestType.GetSwarms:
				return // typeof ResponseGetSwarms

			case RequestType.Poll:
				return // typeof ResponsePoll

			case RequestType.UploadAttachment:
				return // typeof ResponseUploadAttachment

			default:
				throw new Error('Invalid request type')
		}
	}
}
```

## Made for Session.js

Use Session messenger programmatically with [Session.js](https://git.hloth.dev/session.js/client): Session bots, custom Session clients, and more.

## Donate

[hloth.dev/donate](https://hloth.dev/donate) · Tor: [hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion/donate](http://hlothdevzkti6suoksy7lcy7hmpxnr3msu5waokzaslsi2mnx5ouu4qd.onion/donate)

## License

[MIT](./LICENSE)