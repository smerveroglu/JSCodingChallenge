var massMark, massJohn, heightMark, heightJohn;
massMark = 97;
massJohn = 83;
heightMark = 1.82;
heightJohn = 1.95;

var bmiMark, bmiJohn;
bmiMark = massMark / (heightMark*heightMark);
bmiJohn = massJohn / (heightJohn*heightJohn);

var comp = bmiMark > bmiJohn;

console.log("Is Mark's BMI higher than John's ? " + comp );
