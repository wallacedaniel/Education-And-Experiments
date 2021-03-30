

// C# Solutions for HackerRank.com  - Algorithms Track - Implementation Page 1     


// ***********Grading Students***********
// Rounding student grades
// https://www.hackerrank.com/challenges/grading/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	int[] grades = new int[n];
	for(int grades_i = 0; grades_i < n; grades_i++){
	   grades[grades_i] = Convert.ToInt32(Console.ReadLine());   
	}
	int[] result = solve(grades);
	Console.WriteLine(String.Join("\n", result));
}

// Sample input to run in Visual Studio: 

// int n = 4;
// int[] grades = new int[]{73, 67, 38, 33};

//for (int i = 0; i < result.Length; i++)
//{
//	ResultLabel.Text += result[i].ToString() + <br>;
//}

// Sample output:
// 75
// 67
// 40
// 33

static int[] solve(int[] grades) {
		
	int[] solution = new int[grades.Length];
	for (int i = 0; i < grades.Length; i++)
	{
		int roundCheck = grades[i];
		int diffCount = 0;
		while(roundCheck % 5 != 0)
		{
			roundCheck += 1;
			diffCount += 1;
		}
		if(diffCount < 3 && grades[i] >= 38)
		{
			grades[i] = roundCheck;
			solution[i] = grades[i];
		}
		else
		{
			solution[i] = grades[i];
		}
	}
	return solution;
}

    
// ***********Apples and Oranges************
// Detects values which overlap on a number line
// https://www.hackerrank.com/challenges/apple-and-orange/problem

// HR starter code
static void Main(String[] args) {
	string[] tokens_s = Console.ReadLine().Split(' ');
	int s = Convert.ToInt32(tokens_s[0]);
	int t = Convert.ToInt32(tokens_s[1]);
	string[] tokens_a = Console.ReadLine().Split(' ');
	int a = Convert.ToInt32(tokens_a[0]);
	int b = Convert.ToInt32(tokens_a[1]);
	string[] tokens_m = Console.ReadLine().Split(' ');
	int m = Convert.ToInt32(tokens_m[0]);
	int n = Convert.ToInt32(tokens_m[1]);
	string[] apple_temp = Console.ReadLine().Split(' ');
	int[] apple = Array.ConvertAll(apple_temp,Int32.Parse);
	string[] orange_temp = Console.ReadLine().Split(' ');
	int[] orange = Array.ConvertAll(orange_temp,Int32.Parse);
	countApplesAndOranges(s, t, a, b, apple, orange);
}

// Sample input to run in Visual Studio: 

// int s = 7;
// int t = 11;
// int a = 5;
// int b = 15;
// int m = 3;
// int n = 2;
// int[] apple = new int[]{-2, 2, 1};
// int[] orange = new int[]{5, -6};

// ResultLabel.Text = appleHit.ToString() + <br>; 
// ResultLabel.Text += orangeHit.ToString();

// Sample output:
// 1 
// 1

static void countApplesAndOranges(int s, int t, int a, int b, int[] apples, int[] oranges) {
	
	int appleHit = 0;
	for (int i = 0; i < apples.Length; i++)
	{
		if (a + apples[i] >= s && a + apples[i] <= t)
		{
			appleHit += 1;
		}
	}

	int orangeHit = 0;
	for (int i = 0; i < oranges.Length; i++)
	{
		if (b + oranges[i] >= s && b + oranges[i] <= t)
		{
			orangeHit += 1;
		}
	}
	Console.WriteLine(appleHit.ToString());
    Console.WriteLine(orangeHit.ToString());
}


// **********Kangaroo***********
// Determines whether two incrementing values will ever be equal on equal iteration
// https://www.hackerrank.com/challenges/kangaroo/problem

// HR starter code
static void Main(String[] args) {
	string[] tokens_x1 = Console.ReadLine().Split(' ');
	int x1 = Convert.ToInt32(tokens_x1[0]);
	int v1 = Convert.ToInt32(tokens_x1[1]);
	int x2 = Convert.ToInt32(tokens_x1[2]);
	int v2 = Convert.ToInt32(tokens_x1[3]);
	string result = kangaroo(x1, v1, x2, v2);
	Console.WriteLine(result);
}

// Sample input to run in Visual Studio: 

// int x1 = 0;
// int v1 = 3;
// int x2 = 4;
// int v2 = 2;

// ResultLabel.Text = result.ToString();

// Sample output:
// YES

static string kangaroo(int x1, int v1, int x2, int v2) {
	int x1Count = 0;
	int x2Count = 0;
	int yesCheck= 0;
	string result = "";
	
	while(x1 < 100000000 && x2 < 100000000){
		x1 += v1;
		x2 += v2;
		x1Count += 1;
		x2Count += 1;
		if(x1Count == x2Count && x1 == x2){
			result = "YES";
			yesCheck = 1;
			return result;
		}
	}
	if (yesCheck != 1)
	{
		result = "NO";
	} 
	return result;
}


// *********Between Two Sets***********
// Counts instances of common factors from numbers between two number sets, which are factorable for all numbers within the sets
// https://www.hackerrank.com/challenges/between-two-sets/problem

// HR starter code
static void Main(String[] args) {
	string[] tokens_n = Console.ReadLine().Split(' ');
	int n = Convert.ToInt32(tokens_n[0]);
	int m = Convert.ToInt32(tokens_n[1]);
	string[] a_temp = Console.ReadLine().Split(' ');
	int[] a = Array.ConvertAll(a_temp,Int32.Parse);
	string[] b_temp = Console.ReadLine().Split(' ');
	int[] b = Array.ConvertAll(b_temp,Int32.Parse);
	
	int total = getTotalX(a, b);
	Console.WriteLine(total);
}

// Sample input to run in Visual Studio: 

// int n = 2;
// int m = 3;
// int[] a = new int[]{2, 4};
// int[] b = new int[]{16, 32, 96};

// ResultLabel.Text = total.ToString();

// Sample output:
// 3

static int getTotalX(int[] a, int[] b) {
	
	int total = 0;

	for (int i = a.Max(); i <= b.Min(); i++)
	{
		bool firstCheck = true;
		bool secondCheck = false;

		for (int j = 0; j < a.Length; j++)
		{
			if (i % a[j] != 0)
			{
				firstCheck = false;
			}
		}

		if (firstCheck == true)
		{
			for (int k = 0; k < b.Length; k++)
			{
				if (b[k] % i != 0)
				{
					secondCheck = false;
					break;
				}
				else
				{
					secondCheck = true;
				}
			}
		}

		if(secondCheck == true)
		{
			total += 1;
		}
	}
	return total;
}


// **********Breaking the Records***********
// Determines the instances within an iteration where the value breaks the previous record for lowest/ highest value.
// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	string[] s_temp = Console.ReadLine().Split(' ');
	int[] s = Array.ConvertAll(s_temp,Int32.Parse);
	int[] result = getRecord(s);
	Console.WriteLine(String.Join(" ", result));
}

// Sample input to run in Visual Studio: 

// int n = 9;
// int[] s = new int[]{10, 5, 20, 20, 4, 5, 2, 25, 1};

// ResultLabel.Text = String.Join(" ", result);

// Sample output:
// 2 4

static int[] getRecord(int[] score){
	int highChange = 0;
	int lowChange = 0;
	int high = score[0];
	int low = score[0];
	int[] result = new int[2];
	for (int i = 0; i < score.Length; i++){
		if(score[i] > high){
			high = score[i];
			highChange += 1;
		}
		if(score[i] < low){
			low = score[i];
			lowChange += 1;   
		}
	}
	result[0] = highChange;
	result[1] = lowChange;
	return result;
}


// ***********Birthday Chocolate***********
// Counts instances where a given quantity of values from a sequence of values, sum to another given value
// https://www.hackerrank.com/challenges/the-birthday-bar/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	string[] s_temp = Console.ReadLine().Split(' ');
	int[] s = Array.ConvertAll(s_temp,Int32.Parse);
	string[] tokens_d = Console.ReadLine().Split(' ');
	int d = Convert.ToInt32(tokens_d[0]);
	int m = Convert.ToInt32(tokens_d[1]);
	int result = getWays(s, d, m);
	Console.WriteLine(result);
}

// Sample input to run in Visual Studio: 

// int n = 5;
// int[] s = new int[]{1, 2, 1, 3, 2};
// int d = 3;
// int m = 2;

// ResultLabel.Text = String.Join(" ", result);

// Sample output:
// 2 




static int getWays(int[] squares, int d, int m){
	
	int result = 0;
					   
	if (squares.Length == 1)
	{
		if(squares[0] == d)
		{
			result += 1;
		}
	}
	else
	{
		for (int i = 0; i < (squares.Length - m) + 1; i++)
		{
			List<int> temp = new List<int>();
			int index = i;

			for (int j = 0; j < m; j++)
			{
				temp.Add(squares[index]);
				index += 1;
			}
			if (temp.Sum() == d)
			{
				result += 1;
			}
		}
	}
	return result;
}



	
	
	
	
	
	
	
	
	


//********Divisible Sum Pairs**********
// Determine pairs whose sums are divisible by a given integer

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        string[] tokens_n = Console.ReadLine().Split(' ');
        int n = Convert.ToInt32(tokens_n[0]);
        int k = Convert.ToInt32(tokens_n[1]);
        string[] a_temp = Console.ReadLine().Split(' ');
        int[] a = Array.ConvertAll(a_temp,Int32.Parse);
        // write your code here
        int pairCount = 0;

        for (int i = 0; i < a.Length - 1; i++)
        {
            for (int j = i + 1; j < a.Length; j++)
            {
                if ((a[i] + a[j]) % k == 0)
                {
                    pairCount += 1;    
                }
            }
        }
        //Label1.Text = pairCount.ToString();
        Console.WriteLine(pairCount.ToString());
    }
}

//********Migratory Birds*************
// Determines the value with highest frequency within a collection of values.

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static void Main(String[] args) {
        int n = Convert.ToInt32(Console.ReadLine());
        string[] types_temp = Console.ReadLine().Split(' ');
        int[] types = Array.ConvertAll(types_temp,Int32.Parse);
        // your code goes here

        int[] typeCounts = new int[] {0, 0, 0, 0, 0};

        for (int i = 0; i < n; i++)
        {
            if (types[i] == 1) typeCounts[0] += 1;
            if (types[i] == 2) typeCounts[1] += 1;
            if (types[i] == 3) typeCounts[2] += 1;
            if (types[i] == 4) typeCounts[3] += 1;
            if (types[i] == 5) typeCounts[4] += 1;
        }

        int maxValue = typeCounts.Max();

        for (int i = 0; i < 5; i++)
        {
            if(typeCounts[i] == maxValue)
            {
                Console.Write((i+1).ToString());
                break;
            }   
        }
    }
}

//*******Day of the Programmer**********
// Determines the date on which a particular day of the year lands depending on year and calendar in effect. 

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
class Solution {

    static string solve(int year){
        DateTime day = new DateTime(year,9,13);
        string result = "";
        if(year >= 1700 && year <= 1917)
        {
            if (year % 4 == 0)
            {
                day = day.AddDays(-1);
            }
        }
        else if (year == 1918)
        {
            day = day.AddDays(13);
        }
        else
        {
            if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
            {
                day = day.AddDays(-1);
            }
        }
        result = day.ToString("dd.MM.yyyy");
        return result;
    }

    static void Main(String[] args) {
        int year = Convert.ToInt32(Console.ReadLine());
        string result = solve(year);
        Console.WriteLine(result);
    }
}

//**********Bon Appetit************
// Determines whether a shared meal has been properly split

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {
    static void Main(String[] args) {

        string[] arr_temp = Console.ReadLine().Split(' ');
        int[] arr = Array.ConvertAll(arr_temp,Int32.Parse);
        int k = arr[1];
        
        string[] items_temp = Console.ReadLine().Split(' ');
        int[] items = Array.ConvertAll(items_temp,Int32.Parse);
        
        int b = int.Parse(Console.ReadLine());
        
        int annasTotal = (items.Sum() - items[k]) / 2;

        if (b == annasTotal)
        {
            Console.WriteLine("Bon Appetit");
        }
        else
        {
            Console.WriteLine((b - annasTotal).ToString());
        }

    }
}











