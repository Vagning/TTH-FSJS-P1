//Initialization of Arrays and Variables used for the Global scope.
var quotes = [
	{quote: "Talk is cheap. Show me the code", source: "Linus Torvalds", citation: "Linux Kernel Newsletter", year: "2000", category: "programming"},
	{quote: "Computer programming has always been a self-taught, maverick occupation.", source: "Ellen Ullman", citation: "", year: "", category: "programming"},
	{quote: "It's still magic even if you know how it's done.", source: "Terry Pratchett", citation: "A Hat Full of Sky", year: "", category: "technology"},
	{quote: "It has become appallingly obvious that our technology has exceeded our humanity.", source: "Albert Einstein", citation: "", year: "", category: "technology"},
	{quote: "Motivation comes from working on things we care about. It also comes from working with people we care about.", source: "Sheryl Sandberg", citation: "Lean In: Women, Work, and the Will to Lead", year: "", category: "motivation"},
	{quote: "Learning never exhausts the mind.", source: "Leonardo da Vinci", citation: "", year: "", category: "motivation"},
	{quote: "Do not take life too seriously - you will never get out of it alive.", source: "Elbert Hubbard", citation: "A Thousand & One Epigrams", year: "1911", category: "life"},
	{quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", source: "Albert Einstein", citation: "", year: "", category: "life"},
	{quote: "Just play. Have fun. Enjoy the game.", source: "Michael Jordan", citation: "", year: "", category: "fun"},
	{quote: "Beer is proof god loves you and wants you to be happy.", source: "Benjamin Franklin", citation: "", year: "Never", category: "fun"}
];

//function for creating a random color each part of the RGB uses a random random number between 0 and 255 as value.
function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue +")";

}

/*Defining the function getRandomQuote, which is used for selecting a random quote and it's information from the quotes Array. 
The randomNum uses the length of the quotes array to determin a number between 0 and the length on the quote, so it's prepared for more quotes.
*/
function getRandomQuote(){
	var randomNum = Math.floor(Math.random() * quotes.length);
	return quotes[randomNum];

}

/*Defining the function printQuote which will use the getRandomQuote to get at random quote, which will be proccesed and presented for the user. 
Depending on what data the quote contains (ex. citation or year) that will effect what's shown. No reason to show empty values. 
Depending on the "category" of the quote the class of the quote will be changed in order to match the style of the category by changing the font.
*/
function printQuote(){
	//First gets the quotes objects and stores stores the values in variables. 
	var quoteObj = getRandomQuote();
	var quote = quoteObj.quote;
	var source = quoteObj.source;
	var citation = quoteObj.citation;
	var year = quoteObj.year;
	var category = quoteObj.category;
	//Set variable for a printable quote with a fitting html template and the data which always should be included
	var printableQuote = '<p class="quote">' + quote + '</p><p class="source">' + source;
	//Checks if citation variable is empty or not. If not it should be display. Same is done for the year variable.
	if (citation !== ""){
		printableQuote += '<span class="citation">' + citation + '</span>';
	}
	if (year !== ""){
		printableQuote += '<span class="year">' + year + '</span>';;
	}
	if (category !== ""){
		printableQuote += '<span class="category">' + category + '</span>';;
	}
	//Adds closing tag for the paragraph. 
	printableQuote += '</p>';

	//Sets the quote-box div's content to the printableQuote.
	document.getElementById('quote-box').innerHTML = printableQuote;

	//Using the className function we sets the quote-box div to only have one class which is set by the category.
	document.getElementById('quote-box').className = category;

	//Sets the color of the body background to a random color
	document.getElementById('colorBox').style.backgroundColor = randomColor();

}

//Runs the printQuote when site is loaded to make sure the page is populated with a qoute from the quoteArray.
printQuote();

/*Using the setInterval function the printQuote function is run every 20 sec (20000 milisec).
**Reflection** 
The problem with this is that if the users presses the button after 18 sec the quote will still change after 20 sec since start of run time. This makes the quote change 2 seconds after the user changes the quote, which of course gives the user a bad experince. Could be solved pretty easily with jQuery.
**Reflection**
*/
setInterval(function() {
	printQuote();
}, 20000);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

