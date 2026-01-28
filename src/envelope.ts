import type { SignalService } from "./signal-bindings";

export interface EnvelopePlus extends Omit<SignalService.Envelope, "toJSON"> {
	senderIdentity: string;
	receivedAt: number;
	id: string;
}
