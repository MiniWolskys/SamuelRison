import { checkDefined, isDefined, isNotDefined } from './type.helper';

describe( 'TypeHelper', () => {
    it('isDefined should return true if value is defined and not null', () => {
        expect(isDefined(4)).toEqual(true);
    });

    it('isDefined should return false if value is not defined', () => {
        expect(isDefined(undefined)).toEqual(false);
    });
    it('isDefined should return false if value is null', () => {
        expect(isDefined(null)).toEqual(false);
    });

    it('isNotDefined should return false if value is defined and not null', () => {
        expect(isNotDefined('Test')).toEqual(false);
    });
    it('isNotDefined should return true if value is not defined', () => {
        expect(isNotDefined(undefined)).toEqual(true);
    });
    it('isNotDefined should return true if value is null', () => {
        expect(isNotDefined(null)).toEqual(true);
    });

    it('checkDefined should return value if value is defined and not null', () => {
        expect(checkDefined('Test')).toEqual('Test');
    });

    it('checkDefined should throw generic error if value is not defined and no error is given', () => {
        expect(() => checkDefined(undefined)).toThrowError(Error('Must not be null or undefined'));
    });

    it('checkDefined should throw given error if value is not defined and error is given as parameter', () => {
        expect(() => checkDefined(undefined, () => new Error('Custom error 1'))).toThrowError('Custom error 1');
    });

    it('checkDefined should throw generic error if value is null and no error is given', () => {
        expect(() => checkDefined(null)).toThrowError('Must not be null or undefined');
    });

    it('checkDefined should throw given error if value is null and error is given as parameter', () => {
        expect(() => checkDefined(null, () => new Error('Custom error 2'))).toThrowError('Custom error 2');
    });
});