const findHypotenuseTest = function() {
    const sinusOf90D = Math.round(Math.sqrt(5 ** 2 + 5 ** 2));

    return sinusOf90D === 7;
}

export const tests = [findHypotenuseTest];