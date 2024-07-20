export interface Storage {
  get(key: string): string | null | Promise<string | null>
  set(key: string, value: string): void | Promise<void>
  delete(key: string): void | Promise<void>
  has(key: string): boolean | Promise<boolean>
}

/** This is not comperhensive list: it does not include dynamic keys like `message_hash:{hash}` and others. It should be used as hint, not a strict enum. */
export enum StorageKeys {
  LastHashes = 'last_hashes',
  Avatar = 'avatar',
  DisplayName = 'display_name',
}