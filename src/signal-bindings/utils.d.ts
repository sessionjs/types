/**
 * This function is used to check that an optional property on a Protobuf object is not undefined or using a type-specific default value.
 * https://protobuf.dev/programming-guides/proto/#optional
 *
 * @param object - A Protobuf/JavaScript object
 * @param property - The property you want make sure is not undefined
 * @returns true if the property is defined or false if undefined or using a type-specific default value
 */
declare function hasDefinedProperty<A extends object, B extends PropertyKey & keyof A>(object: A, property: B): boolean;
export declare const ProtobufUtils: {
    hasDefinedProperty: typeof hasDefinedProperty;
};
export {};
