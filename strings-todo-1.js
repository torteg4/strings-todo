//* REMOVE BLANKS
    
    // removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
    var string1 = (" Pl ayTha tF u nkyM usi c ");
    updatedString1 = string1.replace(/\s+/g,'');
        //? JavaScript’s string.replace() method supports regular expressions (Regex) to find matches within the string. There’s a dedicated Regex to match any whitespace character:\s.
        //? \s: matches any whitespace symbol: spaces, tabs, and line breaks
        //? +: match one ore more of the preceding tokens (referencing \s)
        //? g: the g at the end indicates iterative searching throughout the full string
    console.log("REMOVE BLANKS:", updatedString1);
        // REMOVE BLANKS: PlayThatFunkyMusic

//* GET DIGITS
    
    // getDigits("abc8c0d1ngd0j0!8") => 801008
    var string2 = ("abc8c0d1ngd0j0!8");
    updatedString2 = string2.replace(/\D/g, '');
        //? JavaScript’s string.replace() method supports regular expressions (Regex) to find matches within the string. There’s a dedicated Regex to match any whitespace character:\s.

    console.log("GET DIGITS:", updatedString2);
        // GET DIGITS: 801008

//* ACRONYMS

    // acronym("Live from New York, it's Saturday Night!") =>  "LFNYISN" 
    const string3 = ("Live from New York, it's Saturday Night!");

    var string3Acronym = string3.replace(/(\w)\w*\W*/g, function (_, i) {
        return i.toUpperCase();
        }
    )
    console.log("ACRONYMS:", string3Acronym)

    //* COUNT NONSPACES

    // countNonSpaces("Honey pie, you are driving me crazy") => 29;
    const string4 = ("Honey pie, you are driving me crazy");
        //? Replace whitespaces with no spaces, then count what is returned

    var string4Characters = string4.replace(/\s/g, "")
    var string4NonSpaces = string4Characters.length;
    console.log("COUNT NON SPACES:", string4NonSpaces)

    //* REMOVE SHORTER STRINGS

    // removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
    const string5 = (['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello']);
        //? 
    
    console.log("REMOVE SHORTER STRINGS:", string5)
