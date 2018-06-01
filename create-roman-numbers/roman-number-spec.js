'use strict';

const romanNumber = require('.\/roman-number.js');

describe('roman number', () => {
    it('should be I if 1 given', () => {
        expect(romanNumber.convert(1)).toEqual("I");
    });
    
    it('should be II if 2 given', () => {
        expect(romanNumber.convert(2)).toEqual("II");
    });

    it('should be III if 3 given', () => {
        expect(romanNumber.convert(3)).toEqual("III");
    });

    it('should be V if 5 given', () => {
        expect(romanNumber.convert(5)).toEqual("V");
    });

    it('should be VIII if 8 given', () => {
        expect(romanNumber.convert(8)).toEqual("VIII");
    });

    it('should be IX if 9 given', () => {
        expect(romanNumber.convert(9)).toEqual("IX");
    });

    it('should be X if 10 given', () => {
        expect(romanNumber.convert(10)).toEqual("X");
    });

    it('should be XIV if 14 given', () => {
        expect(romanNumber.convert(14)).toEqual("XIV");
    });

    it('should be CLXVII if 167 given', () => {
        expect(romanNumber.convert(167)).toEqual("CLXVII");
    });

    it('should be M if 1000 given', () => {
        expect(romanNumber.convert(1000)).toEqual("M");
    });

    it('should be MMMMI if 4001 given', () => {
        expect(romanNumber.convert(4001)).toEqual("MMMMI");
    });

});
