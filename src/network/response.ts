import type { SnodeNamespaces } from "../namespaces";
import type { Snode } from "../snode";
import type { RetrieveMessageItem } from "../snode-retrieve";
import type { Swarm } from "../swarm";

export type ResponseStore = {
	hash: string;
};

export type ResponseGetSnodes = {
	snodes: Snode[];
};

export type ResponseGetSwarms = {
	swarms: Swarm[];
};

export type ResponsePoll = {
	messages: { namespace: SnodeNamespaces; messages: RetrieveMessageItem[] }[];
};

export type ResponseUploadAttachment = {
	url: string;
	id: number;
};

export type ResponseSogsRequest = unknown;
