let word1 = prompt("Enter a word that may or may not be an anagram:");
let word2 = prompt("Enter another word that may or may not be an anagram of the first word:");

function anagramChecker(word1, word2) { 
    if (word1.length !== word2.length) {
        document.write(`${word1} and ${word2} cannot be anagrams because they don't have the same word length.`)
        return false;
    } else {
       let lword1 = word1.toLowerCase();
       let lword2 = word2.toLowerCase();

        let array1 = Array.from(lword1);
        let array2 = Array.from(lword2);

        array1 = array1.sort();
        array2 = array2.sort();

        let sortedArray1 = array1.join();
        let sortedArray2 = array2.join();

        if (sortedArray1 == sortedArray2) {
            return true;
        } else {
            return false;
        }
    }
 }

 let anagramCheck = anagramChecker(word1, word2);

 if (anagramCheck) {
 document.write(`${word1} and ${word2} are anagrams.`)
 } else {
    document.write(`<br>${word1} and ${word2} are not anagrams.`)
 }