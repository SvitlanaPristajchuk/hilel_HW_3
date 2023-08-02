/*userQuestions = confirm('Tell me three most important words 💚')
errorMsg = '';
console.log(errorMsg)

if (userQuestions) {
    userQuestions = prompt('Enter the word, pls')

    while (userQuestions === null ||
        userQuestions.replaceAll(' ', '') === '' ||
        userQuestions.startsWith('!') ||
        userQuestions.endsWith('@')

    ) {
        errorMsg = '';

        if (userQuestions === null ||
            userQuestions.replaceAll(' ', '') === ''
        ) {
            errorMsg = `This string should'n be empty`
        } else {
            if (userQuestions.startsWith('!')) {
                errorMsg += `not valid ${userQuestions} `
            }
            if (userQuestions.endsWith('@')) {
                console.log(userQuestions, '3')
                errorMsg += `not valid ${userQuestions}`
            }

        }
        userQuestions = prompt(`${errorMsg}Enter the word, pls, again`)
    }
}

console.log(`user answer: ${userQuestions}`)*/


countWord = 3;
wordIndex = 1;
finalStr = '';
lastStringSumbol = '!'
firstOpt = 'uppercase'
secondOpt = 'lowercase'
thirdOpt = 'capitalize'
wordIndexNext = countWord - wordIndex;



userAnswer = confirm('Tell me three most important words 💚')
errorMsg = '';
console.log(errorMsg)

if (userAnswer) {
    while (wordIndex <= countWord) {
        userAnswer = prompt(`Enter the word ${wordIndex}, pls`)
        while (userAnswer === null ||
            userAnswer.replaceAll(' ', '') === '') {
            userAnswer = prompt(`Enter the word ${wordIndex}, pls again`)
        }
        userRedoWord = prompt(`choose the case: ${firstOpt}/${secondOpt}/${thirdOpt}`)

        if (userRedoWord === firstOpt) {
            userAnswer = userAnswer.toUpperCase()
        } else if (userRedoWord === secondOpt) {
            userAnswer = userAnswer.toLowerCase()
        } else {
            userAnswer = userAnswer[0].toUpperCase() + userAnswer.substring(1);
        }



        while (userRedoWord === null ||
            userRedoWord.replaceAll(' ', '') === '' ||
            !userRedoWord === firstOpt ||
            !userRedoWord === secondOpt ||
            !userRedoWord === thirdOpt) {
            userRedoWord = prompt(`choose the case: ${firstOpt}/${secondOpt}/${thirdOpt} again`)
        }
        userAnswer

        if (wordIndex === countWord) {
            finalStr += userAnswer + lastStringSumbol
        } else {
            finalStr += userAnswer + ' '
        }

        wordIndex++
    }
}
console.log(finalStr)