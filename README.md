# challenge-1
The function will prompts the user to input student marks for grading. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 
        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


# Challenge 2: Speed Detector (Toy Problem)
Has a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.
   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.


# Challenge 3: Net Salary Calculator (Toy Problem)
Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

inputs are basic salary and benefits(additional earnings like allowance bonuses or perks)
calculations
1.  gross salary 
     gross salary = basic salary + benefits
2.  shif deductions(based on provided rates depending on salary) and nssf deductions(a fixed percentage of the gross salary, up to a certain limit) - SHIF is mandatory 2.75% for all.
3. output will be calculated net salary along with a breakdown of deductions

NSSF is calculated using gross salary....if gross salary is less that 6000, just do 6% of gross salary
if gross salary is greater than 6000 but less than 18000, minus 6000 from gross salary  then multiply by 6% again, and add it to the first 6%.
if salary is higher than 18000, nssf is 1080

# (BubbleSort)
1. Write a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.

sample input = [5,6,1,3,4,2]
Expected output = [1,2,3,4,5,6]

Research Areas: 
1. Loops 
2. Array Methods 


(Loops)
2. Staircase problem 
Create a function that takes an integer and console logs a step shaped stair with the integer levels using the # character 

e.g steps(2)  #
              ##

    steps(3)  #
              ##
              ###

Research Areas 
1. Array methods 
2. Nested Loops
3. Conditional statements


(Objects)
3. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h where r is the radius and h is the height of the cylinder.

Research Areas 
1. Objects. 
2. Object constructor.
3. constructor templates.