export type Success<T> = { status: 'success'; data: T };
export type Failure<E> = { status: 'error'; error: E };

export type Result<T, E> = Success<T> | Failure<E>;

export const success = <T>(data: T): Success<T> => ({ status: 'success', data });
export const failure = <E>(error: E): Failure<E> => ({ status: 'error', error });

export const isSuccess = <T, E>(result: Result<T, E>): result is Success<T> => {
	return result.status === 'success';
};
export const isFailure = <T, E>(result: Result<T, E>): result is Failure<E> => {
	return result.status === 'error';
};