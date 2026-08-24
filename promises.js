function codingTest(scores, limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = 0;

            for (let i = 0; i < scores.length; i++) {
                sum += scores[i];
            }

            let result = sum / scores.length;

            if (result >= limit) {
                resolve(result);
            } else {
                reject("Not cleared the Coding Assessment.");
            }
        }, 2000);
    });
}

function interviewTest(scores, limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = 0;

            for (let i = 0; i < scores.length; i++) {
                sum += scores[i];
            }

            let result = sum / scores.length;

            if (result >= limit) {
                resolve(result);
            } else {
                reject("Not cleared the Technical Interview.");
            }
        }, 2000);
    });
}

function selectionTest(codingResult, interviewResult, limit) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let result = (codingResult + interviewResult) / 2;

            if (result >= limit) {
                resolve(result);
            } else {
                reject("Not cleared the final selection cutoff.");
            }
        }, 2000);
    });
}

codingTest([68, 74, 81, 77], 65)
    .then((codingResult) => {
        console.log("Coding Assessment Cleared!");
        console.log("Coding Average:", codingResult);

        return interviewTest([72, 69, 78, 84], 65)
            .then((interviewResult) => {
                console.log("Technical Interview Cleared!");
                console.log("Technical Average:", interviewResult);

                return selectionTest(
                    codingResult,
                    interviewResult,
                    70
                );
            });
    })
    .then((finalResult) => {
        console.log("Final Selection Cleared!");
        console.log("Final Average:", finalResult);
    })
    .catch((error) => {
        console.log(error);
    });