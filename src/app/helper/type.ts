export const isDefined = <T>(value: T | undefined | null): value is T => value !== undefined && value !== null;
export const isNotDefined = <T>(value: T | undefined | null): value is T => !isDefined(value);

export const checkDefined =
    <T>(value: T | undefined | null, errorProvider?: () => Error): T =>
        value ?? triggerError(errorProvider?.() ?? new Error('Must not be null or undefined'));

const triggerError = (error: Error): never => { throw error };
