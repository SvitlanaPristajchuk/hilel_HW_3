countWord = 3;
wordIndex = 1;
finalStr = '';
lastStringSumbol = '!'
optUppercase = 'uppercase'
optLowercase = 'lowercase'
optCapitalize = 'capitalize'




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
        userRedoWord = prompt(`choose the case: ${optUppercase}/${optLowercase}/${optCapitalize}`)

        while (userRedoWord === null ||
            userRedoWord.replaceAll(' ', '') === '' ||
            (userRedoWord !== optUppercase &&
                userRedoWord !== optLowercase &&
                userRedoWord !== optCapitalize)
        ) {
            userRedoWord = prompt(`choose the case: ${optUppercase}/${optLowercase}/${optCapitalize} again`);
        }

        if (userRedoWord === optUppercase) {
            userAnswer = userAnswer.toUpperCase()
        } else if (userRedoWord === optLowercase) {
            userAnswer = userAnswer.toLowerCase()
        } else {
            userAnswer = userAnswer[0].toUpperCase() + userAnswer.substring(1);
        }

        if (wordIndex === countWord) {
            finalStr += userAnswer + lastStringSumbol
        } else {
            finalStr += userAnswer + ' '
        }

        wordIndex++
    }
    console.log(finalStr)
}