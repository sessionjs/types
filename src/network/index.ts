import type { RequestType } from './request'

export interface Network {
  onRequest(type: RequestType, body: unknown): Promise<unknown>
}