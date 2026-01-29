export enum ReactionAction {
	REACT = 0,
	REMOVE = 1,
}

export interface Reaction {
	id: number;
	author: string;
	emoji: string;
	action: ReactionAction;
}
