"use strict";

window.onload = () => {
    // Initialise var
    let numOfQuestion, questionCounter, solicitation, questionArr, userInput, originalStory
    
    // Declare 
    numOfQuestion = 28
    questionCounter = 0

    solicitation = `Please enter a`
    questionArr = [
        `${solicitation} year ("2001", "2021" etc)`,
        `${solicitation} person's full name`,
        `${solicitation} computer-specific model ("commodore 64" etc)`,
        `${solicitation} famous school`,
        `${solicitation} word for people you know (friends, family etc)`,
        `${solicitation} type of bug`,
        `${solicitation} computer-specific part (plural-tense, ie "screens")`,
        `${solicitation} profession (plural-tense, i.e. "painters")`,
        `${solicitation} type of book`,
        `${solicitation} verb (past-tense)`,
        `${solicitation}nother verb (past-tense)`,
        `${solicitation}n adjective`,
        `${solicitation} pronoun`,
        `${solicitation} noun`,
        `${solicitation} verb`,
        `${solicitation} month, day and year (long-form, ie January, 1 2000)`,
        `${solicitation} number`,
        `${solicitation} noun (plural-tense)`,
        `${solicitation} famous museum`,
        `${solicitation} city, state (ie Washington, D.C)`,
        `${solicitation}n adjectiv`,
        `${solicitation} physics-specific noun (ie "gravity")`,
        `${solicitation} person's full name`,
        `${solicitation} number`,
        `${solicitation} type of document (ie "poem", "essay" etc)`,
        `${solicitation} bad thing (ie an "error")`,
        `${solicitation}n old machine`,
        `${solicitation} tool used for hunting`,
        `${solicitation} verb (infinitive-tense)`,
    ];
    userInput = []


    for (let i = numOfQuestion; i >= 0; i--) {

        console.log( questionArr[questionCounter] + `... (${numOfQuestion} questions left)` )
        userInput.push(
            prompt(
                questionArr[questionCounter] + `... (${numOfQuestion} questions left)`
            )
        );
        console.log(userInput)

        questionCounter++
        numOfQuestion--
    }

    originalStory = 
        `<h1>${userInput[1].toUpperCase()}</h1>
        
        <p>In ${userInput[0]}, computer pioneer ${userInput[1]} found herself working on a ${userInput[2]} at ${userInput[3]}. It was at this time that ${userInput[4]} discovered a ${userInput[5]} had gotten trapped in one of the ${userInput[6]} and was causing an error. The ${userInput[7]} removed the ${userInput[5]} and taped it in their ${userInput[8]}, identifying it as the "first actual case of bug being ${userInput[9]}."</p>

        <p>Word got out that the team had "${userInput[10]}" the ${userInput[2]}, hence leading to the phrase’s use in computing and ${userInput[11]} culture. ${userInput[1]} readily admitted that ${userInput[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInput[1]}'s favorite ${userInput[13]}s. ${userInput[1]} ${userInput[14]} of natural causes on January 1, ${userInput[15]}, at the age of ${userInput[16]}. For those interested, the offending ${userInput[5]}'s ${userInput[17]}, along with the original ${userInput[8]}, can be seen at the ${userInput[18]} in ${userInput[19]}.</p>
    
        <p>And while this is the "${userInput[20]}" use case of finding a ${userInput[2]} ${userInput[5]}, the original use of the word dates further back in ${userInput[21]} to ${userInput[22]}, who in an ${userInput[23]} ${userInput[24]} used the term "${userInput[5]}" to refer to a technological ${userInput[25]}. While he worked on the quadruplex ${userInput[26]}, he said it needed a "${userInput[5]} ${userInput[27]} to ${userInput[28]} properly."</p>`;
    
    console.log(originalStory)

    alert(
        "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
    );

    // Output
    console.log(originalStory)
    document.write(originalStory)
}