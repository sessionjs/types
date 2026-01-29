import { SignalService } from "./signal-bindings";

export type Profile = {
	/** Name, displayed instead of your Session ID. Acts like nickname. All unicode characters are accepted except for `ￒ` (0xffd2) which is reserved by Session for mentions. Max length: 64 characters */
	displayName: string;
	/** Image, displayed near display name in Session clients. Acts like profile picture. */
	avatar?: {
		/** URL to avatar, uploaded to Session file server */
		url: string;
		/** 32 bytes key used for avatar encryption */
		key: Uint8Array;
	};
};

export type SignalILokiProfile = {
	lokiProfile: SignalService.DataMessage.ILokiProfile | undefined;
	profileKey: Uint8Array | undefined;
};
export function serializeProfile(profile: Profile): SignalILokiProfile {
	let signalILokiProfile: SignalService.DataMessage.ILokiProfile | undefined;
	if (profile.avatar || profile.displayName) {
		signalILokiProfile = new SignalService.DataMessage.LokiProfile();

		if (profile.avatar && profile.avatar.url && profile.avatar.key.length) {
			signalILokiProfile.profilePicture = profile.avatar.url;
		}

		if (profile.displayName) {
			signalILokiProfile.displayName = profile.displayName;
		}
	}

	return {
		lokiProfile: signalILokiProfile,
		profileKey: profile.avatar?.key,
	};
}

export function deserializeProfile(signalILokiProfile: SignalILokiProfile): Profile {
	const profile: Profile = {
		displayName: signalILokiProfile.lokiProfile?.displayName || "",
		avatar:
			signalILokiProfile.lokiProfile?.profilePicture && signalILokiProfile.profileKey
				? {
						url: signalILokiProfile.lokiProfile.profilePicture,
						key: signalILokiProfile.profileKey,
					}
				: undefined,
	};

	return profile;
}
