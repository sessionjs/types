import { ExpirableMessage, type ExpirableMessageParams } from "../expirable-message";
import { SignalService } from "../../signal-bindings";

interface DataExtractionNotificationMessageParams extends ExpirableMessageParams {
	action: SignalService.DataExtractionNotification.Type;
	/** For SCREENSHOT, timestamp when screenshot was taken
	 * For MEDIA_SAVED, message with attachment's timestamp */
	timestamp: number;
}

export class DataExtractionNotificationMessage extends ExpirableMessage {
	public readonly timestamp: number;
	public readonly action: SignalService.DataExtractionNotification.Type;

	constructor(params: DataExtractionNotificationMessageParams) {
		super(params);
		this.timestamp = params.timestamp;
		this.action = params.action;
	}

	public contentProto(): SignalService.Content {
		const content = super.contentProto();
		content.dataExtractionNotification = this.dataExtractionProto();
		return content;
	}

	protected dataExtractionProto(): SignalService.DataExtractionNotification {
		return new SignalService.DataExtractionNotification({
			type: this.action,
			timestamp: this.timestamp,
		});
	}
}
