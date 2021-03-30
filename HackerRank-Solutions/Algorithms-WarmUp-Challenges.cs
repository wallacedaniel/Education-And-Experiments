

// C# Solutions for HackerRank.com  - Algorithms Track - Warmup Challenges     


// ***********Simple Array Sum************
// https://www.hackerrank.com/challenges/simple-array-sum/problem
// Sums an array of a given length.

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	string[] ar_temp = Console.ReadLine().Split(' ');
	int[] ar = Array.ConvertAll(ar_temp,Int32.Parse);
	int result = simpleArraySum(n, ar);
	Console.WriteLine(result);
}

// Sample input to run in Visual Studio: 

// int n = 6;
// int[] ar = new int[]{1, 2, 3, 4, 10, 11};

// int result = simpleArraySum(n, ar);
// ResultLabel.Text = result.ToString();

// Sample output:
// 31

static int simpleArraySum(int n, int[] ar) {
	
	int result = 0;
	for(int i = 0; i < ar.Length; i++){
		
		result += ar[i];
	}
	
	// or...
	// using System.Linq;
	//int result = ar.Sum();
	return result;
}


// ************Compare the Triplets************
// https://www.hackerrank.com/challenges/compare-the-triplets/problem
// Compares values within two arrays.
	
// HR starter code
static void Main(String[] args) {
	string[] tokens_a0 = Console.ReadLine().Split(' ');
	int a0 = Convert.ToInt32(tokens_a0[0]);
	int a1 = Convert.ToInt32(tokens_a0[1]);
	int a2 = Convert.ToInt32(tokens_a0[2]);
	string[] tokens_b0 = Console.ReadLine().Split(' ');
	int b0 = Convert.ToInt32(tokens_b0[0]);
	int b1 = Convert.ToInt32(tokens_b0[1]);
	int b2 = Convert.ToInt32(tokens_b0[2]);
	int[] result = solve(a0, a1, a2, b0, b1, b2);
	Console.WriteLine(String.Join(" ", result));
}	
	
// Sample input to run in Visual Studio:
 
// int a0 = 5;
// int a1 = 6;
// int a2 = 7;
// int b0 = 3;
// int b1 = 6;
// int b2 = 10;

// int[] result = solve(a0, a1, a2, b0, b1, b2);
// ResultLabel.Text = String.Join(" ", result);             

// Sample output:
// 1 1

static int[] solve(int a0, int a1, int a2, int b0, int b1, int b2)
{
	int[] result = new int[2];
	int a = 0;
	int b = 0;

	if (a0 > b0)
	{
		a += 1;
	}
	
	else if (b0 > a0)
	{
		b += 1;
	}

	if (a1 > b1)
	{
		a += 1;
	}

	else if (b1 > a1)
	{
		b += 1;
	}

	if (a2 > b2)
	{
		a += 1;
	}

	else if (b2 > a2)
	{
		b += 1;
	}

	result[0] = a;
	result[1] = b;

	return result;
}	
	
	
// ************A Very Big Sum************
// Sums a given quantity of large values.
// https://www.hackerrank.com/challenges/a-very-big-sum/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	string[] ar_temp = Console.ReadLine().Split(' ');
	long[] ar = Array.ConvertAll(ar_temp,Int64.Parse);
	long result = aVeryBigSum(n, ar);
	Console.WriteLine(result);
}

// Sample input to run in Visual Studio:
// int n = 5;
// long[] ar = new long[]{1000000001, 1000000002, 1000000003, 1000000004, 1000000005};
// ResultLabel.Text = String.Join(" ", result);

// Sample output:
// 5000000015

static long aVeryBigSum(int n, long[] ar) {
	
	long result = 0;

	for(int i = 0; i < n; i++){
		
		result += Convert.ToInt64(ar[i]);    
	}
	return result;
}


// ************Diagonal Difference************
// Sums diagonal integers in a matrix, then takes the absolute value of their difference.
// https://www.hackerrank.com/challenges/diagonal-difference/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	int[][] a = new int[n][];
	for(int a_i = 0; a_i < n; a_i++){
	   string[] a_temp = Console.ReadLine().Split(' ');
	   a[a_i] = Array.ConvertAll(a_temp,Int32.Parse);
	}
	int result = diagonalDifference(a);
	Console.WriteLine(result);
}

// Sample input to run in Visual Studio:
// int n = 3;
// int[][] a = new int[n][];

// int[] a_1 = new int[3]{11,2,4};
// int[] a_2 = new int[3] { 4, 5, 6 };
// int[] a_3 = new int[3] { 10, 8, -12 };

// a[0] = a_1;
// a[1] = a_2;
// a[2] = a_3;
	
// ResultLabel.Text = result.ToString();

// Sample output:
// 15

static int diagonalDifference(int[][] a) {
	
	int primary = 0;
	
	for (int i = 0; i < a.Length; i++)
	{  
		primary += a[i][i];
	}

	int secondary = 0;
	int secondIndex = a.Length - 1;

	for (int i = 0; i < a.Length; i++)
	{
		secondary += a[i][secondIndex];
		secondIndex -= 1;
	}

	int result = Math.Abs(primary - secondary);
	return result;
}


// ***********Plus Minus ************
// Determines percentage of positive, negative, and 0 integers in an array.
// https://www.hackerrank.com/challenges/plus-minus/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	string[] arr_temp = Console.ReadLine().Split(' ');
	int[] arr = Array.ConvertAll(arr_temp,Int32.Parse);
	plusMinus(arr);
}

// Sample input to run in Visual Studio:
// int n = 6;
// int[] arr = new int[]{-4, 3, -9, 0, 4, 1};
	
// ResultLabel.Text = posPercent.ToString() + " " + negPercent.ToString() + " " + zerPercent.ToString();

// Sample output:
// 0.500000
// 0.333333
// 0.166667

static void plusMinus(int[] arr) {
    int zeroCount = 0;
	int posCount = 0;
	int negCount = 0;
	int n = arr.Length;
		
	for (int i = 0; i < n; i++)
	{
		if (arr[i] > 0)
		{
			posCount += 1;
		}
		else if (arr[i] < 0)
		{
			negCount += 1;
		}
		else
		{
			zeroCount += 1;
		}
	}

	decimal posPercent = Convert.ToDecimal(posCount) / Convert.ToDecimal(n);
	decimal negPercent = Convert.ToDecimal(negCount) / Convert.ToDecimal(n);
	decimal zeroPercent = Convert.ToDecimal(zeroCount) / Convert.ToDecimal(n);

	Console.WriteLine(posPercent.ToString());
	Console.WriteLine(negPercent.ToString());
	Console.WriteLine(zeroPercent.ToString()); 
}

	
// ************Staircase************
// Given an array, prints an ascending staircase of hashes with length and height of array.
// https://www.hackerrank.com/challenges/staircase/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	staircase(n);
}

// Sample input to run in Visual Studio:
// int n = 6;
	
// ResultLabel.Text = printSolution.ToString();

// Sample output:
//      #
//     ##
//    ###
//   ####
//  #####
// ######

static void staircase(int n) {
 
	string hashString = "";
	string printSolution = "";

	for (int i = 0; i < n; i++)      
	{
		string solution = "";
		for (int j = 0; j < n; j++)   
		{
			hashString += "#";    
		}

		hashString = hashString.Substring((n - 1) - i, i + 1);
		int spaceLength = n - hashString.Length;
		string spaceString = "";

		for (int k = 0; k < spaceLength ; k++)
		{
			spaceString += " ";
		}

		solution = spaceString + hashString;
		solution += Environment.NewLine;
		printSolution += solution;
	}
	Console.WriteLine(printSolution);
}

    
// ***********Min and Max Sum************
// Determines minimum sum (removes largest) and maximum sum (removes smallest) of values in an array. 
// https://www.hackerrank.com/challenges/mini-max-sum/problem

// HR starter code
static void Main(String[] args) {
	string[] arr_temp = Console.ReadLine().Split(' ');
	long[] arr = Array.ConvertAll(arr_temp, long.Parse);
	miniMaxSum(arr);
}

// Sample input to run in Visual Studio:
// long[] arr = new long[] {1, 2, 3, 4, 5};
	
// ResultLabel.Text = maxSum.ToString() + " "  + minSum.ToString();

// Sample output:
// 10 14

static void miniMaxSum(long[] arr) {
	
	long minInt = arr.Min();
	int index = Array.IndexOf(arr, minInt);

	long[] minArr = removeIndex(arr, index);
	long minSum = minArr.Sum();

	long maxInt = arr.Max();
	index = Array.IndexOf(arr, maxInt);

	long[] maxArr = removeIndex(arr, index);
	long maxSum = maxArr.Sum();

	Console.WriteLine(maxSum.ToString() + " "  + minSum.ToString());
}

static long[] removeIndex(long[] arr, int removeIndex)
{
	long[] newArr = new long[arr.Length - 1];
	for (int i = 0, j = 0; i < newArr.Length; i++, j++)
	{
		if (i == removeIndex)
		{
			j++;
		}
		newArr[i] = arr[j];
	}
	return newArr;
}
	
	
// ***********Birthday Cake Candles************
// Counts the occurences of the max value in an array
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

// HR starter code
static void Main(String[] args) {
	int n = Convert.ToInt32(Console.ReadLine());
	string[] ar_temp = Console.ReadLine().Split(' ');
	int[] ar = Array.ConvertAll(ar_temp,Int32.Parse);
	int result = birthdayCakeCandles(n, ar);
	Console.WriteLine(result);
}

// Sample input to run in Visual Studio:
// int n = 4;
// int[] ar = new int[]{3, 2, 1, 3};
	
// ResultLabel.Text = result.ToString();

// Sample output:
// 2

static int birthdayCakeCandles(int n, int[] ar) {
	
	int maxHeight = ar.Max();
	int maxCount = 0;
	
	for (int i = 0; i < n; i++){
		if(ar[i] == maxHeight)
		{
			maxCount += 1;    
		}
	}
	return maxCount;
}
	
	
// ***********Time Conversion************
// Converts to military time (24 hr day)
// https://www.hackerrank.com/challenges/time-conversion/problem

// HR starter code
static void Main(String[] args) {
	string s = Console.ReadLine();
	string result = timeConversion(s);
	Console.WriteLine(result);
}

// Sample input to run in Visual Studio:
// string s = "07:05:45PM";
	
// ResultLabel.Text = printSolution.ToString();

// Sample output:
// 19:05:45

static string timeConversion(string s) {
	DateTime formatTime = DateTime.Parse(s);
	string result = formatTime.ToString("HH:mm:ss");
	return result;
}









