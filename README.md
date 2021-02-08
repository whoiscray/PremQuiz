PremQuiz
======
A quiz about guessing goal scorers from various seasons of the Premier League


## UX
### Target Audiences
This quiz website is primarily aimed at football fans, who would like to test their knowledge and memory of the top goalscorers of various leagues


## Features

### Existing Features
* Multiple choice questions
  * Each question has multiple answers using buttons, rather than user input
* realtime updating scorekeeping
  * Each time a correct answer is given, the scoresheet updates.
  * An incorrect answer will display the final score, to allow users to try and beat their high score!

### Features to Implement
* Allow for additional types of questions
  * Assists
  * Appearances
  * Chances Per Game
  * Clean Sheets (for goalkeepers)

## Technologies Used

* [JQuery](https://jquery.com/)
  * Used for eventhandlers
  * Used for html selectors, to more easily manipulate the elements on the page that with vanilla Javascript
* [Bootstrap 5](https://getbootstrap.com/)
  * Used to quickly build a presentable website using the intelligent Bootstrap grid system
  * Bootstraps powerful CSS manipulation allowed for extensive page styling without needing to write any local CSS scripts, all features required were fulfilled by the Bootstrap library


## Testing

## Deployment

## Credits

question loop logic
1. open loop
2. display question
3. feed player data into player buttons
4. wait for click
5. check if correct, disable player buttons

either

6. if correct, add 1 to score
7. wait for 'next question' button click
8. reset all button states (remove success, fail, etc)
9. jump to start of loop

or 

6. if incorrect, set 'answerTrue' to false
7. show correct answer
8. save score
9. show 'try again' button
10. reload page