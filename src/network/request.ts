import type { Snode } from '@/snode'
import type { RequestNamespace } from '@/snode-retrieve'
import type { Swarm } from '@/swarm'

export enum RequestType {
  Store = '/store',
  GetSnodes = '/get_snodes',
  GetSwarms = '/get_swarms',
  Poll = '/poll',
  UploadAttachment = '/upload_attachment',
  DownloadAttachment = '/download_attachment'
}

export type RequestStoreBody = {
  destination: string
  data64: string
  ttl: number
  timestamp: number
  namespace: number
  swarm: Swarm
}

export type RequestGetSwarmsBody = {
  snode: Snode
  pubkey: string
}

export type RequestPollBody = {
  swarm: Swarm
  namespaces: RequestNamespace[]
}

export type RequestUploadAttachment = {
  data: ArrayBuffer
}

export type RequestDownloadAttachment = {
  id: string
}
