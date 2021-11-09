## GUIDE FOR BUILT IN SORT METHOD

1. The built-in sort method accepts an optional comparator function
2. You can use this comparator function to tell JavaScript how you want it to sort
3. The comparator looks at pairs of elements (a and b), determines their sort order based on the return value
    - If it returns a negative number, a should come before b
    - If it returns a positive number, a should come after b,
    - If it returns 0, a and b are the same as far as the sort is concerned
