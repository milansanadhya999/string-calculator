# String Calculator - TDD

The following is a TDD - an exercise in coding, refactoring and test-first

## How does it work?

This code is written step by step. You can check code at each commit. Only main points are covered here.

1. Create a simple String calculator with a method signature: `const add = (string)`
2. The method can take up to two numbers, separated by commas, and will return their sum.
   (for an empty string it will return 0)
   1. For example `“”` or `“1”` or `“1,2”` as inputs.
3. Add method can also handle an unknown amount of numbers
4. Add method handles new lines between numbers.
   1. the following input is ok: `“1\n2,3”` (will equal **6**)
   2. the following input is **NOT** ok: `“1,\n”` (not need to prove it - just clarifying)
5. Support for different delimiters
   1. to change a delimiter, the beginning of the string will contain a separate line that looks like this: `“//[delimiter]\n[numbers…]”` for example `“//;\n1;2”` should return three where the default delimiter is `‘;’`
   2. the first line is **optional**. all existing scenarios should still be supported
6. Calling Add with a negative number will throw an exception "**negatives not allowed**" - and the negative that was passed.
7. if there are multiple negatives, show _all of them_ in the exception message.
8. Delimiters can be of any length with the following format: `“//[delimiter]\n”`
   1. for example: `“//[***]\n1***2***3”` should return **6**
9. Allow multiple delimiters like this: `“//[delim1][delim2]\n”` for example `“//[*][%]\n1*2%3”` should return 6.
10. Make sure to handle **multiple delimiters** with length **longer than one char**

## How to Run?

- Clone the repository

- Do npm install

- Run 'npm install in the root folder'
