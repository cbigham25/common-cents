# Title (replace with your title)

Regex expressions are used for text manipulation and pattern mapping. Today we are focusing on matching specific characters in a string. This will help you take on more complex patterns in the future!

## Summary
This tutorial will help you learn how to match specific characters in a string. We will touch on matching single 
characters, matching digits, etc. 


## Table of Contents

- [Matching single characters](#matching-single-characters)
- [Matching Digits](#matching-digits)
- [Matching Word Characters](#matching-word-characters)
- [Matching Spaces](#matching-spaces)
- [Matching any character](#matching-any-characters)
- [Matching multiples](#matching-multiples)
- [Matching Alternatives](#matching-alternatives)

## Matching single characters
To match a specific character, include the character in the pattern
    ex:
    regex pattern: /a/
    String matched: "Animal" // this will match the first a in the sequence

### Matching Digits
if you want to match a digit 0-9, you will use \d
    Regex Pattern: /\d/
    String Matched: "I have 7 animals." // matches the '5' in the 0-9 sequence

### Matching Word Characters
 in order to match word characters, use the \w shorthand
    Regex Pattern: /\w/
    String Matched: "Hello_animals!" // matches the H

### Matching Spaces
 if you want to match a space all you have to do is use the space character just like this!
    Regex Pattern: / /
    String Matched: "Hello animals" (matches the space between 'Hello' and 'animals')

### Matching any character
using /./ will match any single character
    Regex Pattern: /./
    String Matched: "Any character is matched!" 

### Matching multiples
 in order to match multiple characters, we will use /a*/
    Regex Pattern: /a*/
    String Matched: "aaaaa" //matches every occurrences of 'a'

### Matching Alternatives
 Finally we have how to match alternatives! in order to do that we will use what is called the "pipe" or "|" character
    Regex Pattern: /cat|dog/
    String Matched: "I have a cat and a dog." (matches 'cat' and 'dog')

## Author
My name is Blaine Duran and i really enjoyed bringing you this tutorial. I also hope it helps you out as much as 
it helped me. Regex expressions seem hard at first until you get the repition down. Here is my github url: https://github.com/ToriKnix