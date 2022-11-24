/*

    Calendar application
    Author: Dmitrii Sumenko
    Date: 11/23/2022
    Course name: CIS 182
    Section: Chapter 12
    Filename: calendar.js

*/

"use strict";

const getMonthText = () => {
	const date = new Date();
	switch (date.getMonth()) {
		case 0:  return "January";
		case 1:  return "February";
		case 2:  return "March";
		case 3:  return "April";
		case 4:  return "May";
		case 5:  return "June";
		case 6:  return "July";
		case 7:  return "August";
		case 8:  return "September";
		case 9:  return "October";
		case 10: return "November";
		case 11: return "December";
	}
};

// Determines if there is 28 or 29 days in February
const leapYear = year => {
	return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

const getLastDayOfMonth = () => {
	const date = new Date();
	switch(date.getMonth()) {
		case 0: return 31;
		case 2: return 31;
		case 4: return 31;
		case 6: return 31;
		case 7: return 31;
		case 9: return 31;
		case 11: return 31;
		case 3: return 30;
		case 5: return 30;
		case 8: return 30;
		case 10: return 30;
		case 1: {
			if(leapYear(date.getFullYear())) {
				return 29;
			} else return 28;
		}
	}
};

const createRows = () => {
	let html = "<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";

	// Added 6 rows, because some months start at the end of a week, so all the days don't fit inside 5 rows

	for (let i = 1; i <= 6; i++) {
		html += "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
	}
	return html;
}

$(document).ready(function(){

	const date = new Date();
	const date1 = new Date(date.getFullYear(), date.getMonth(), 1);  // Getting day of week for first day of a month

	// Prints table rows and columns
	$("#month_year").text(getMonthText() + " " + date.getFullYear());
	$("#calendar").html(createRows());

	const td = document.querySelectorAll("td"); // getting all td elements

	let counter = 1;

	// inserting day numbers into td elements
	for(let i = date1.getDay(); i < getLastDayOfMonth() + date1.getDay(); i++) {
		td[i].innerText = counter.toString();
		counter++;
	}
	// Today's date will be highlighted in the table
	td[date.getDate() + date1.getDay() - 1].style["background-image"] = "linear-gradient(to right, cyan , green)";
});