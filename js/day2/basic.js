function crystalGazer(child_count, partner, location, job)
{
	document.write(
		"You will be a "
		+job+" in "+location
		+" and married to "+partner
		+" with "+child_count+" children."+ "<br>"
		);
}

function ageCalculator(birth_year, current_year)
{
	var age = current_year - birth_year;
	document.write(
		"You are either "+(age-1)+" or "+age+"."+ "<br>");
}

function ageCalculator2(birth_year)
{
	d = new Date()
	current_year = d.getYear() + 1900;

	var age = current_year - birth_year;
	document.write(
		"You are either "+(age-1)+" or "+age+"."+ "<br>");
}

function degRadConv(degrees)
{
	return degrees * (Math.PI/180)
}

// function box2(width, length, height)
// {
// 	this.width = width;
// 	this.length = length;
// 	this.height = height;
// 	this.volume = function() { return width*length*height; };
// 	this.area = function() {
// 			return width * length * 2 + width + height + 2 + length * height * 2;
// 	};
// 	this.printVolume = function() {
// 		document.write("The volume of the box is: " + this.volume() + "<br>");
// 	};
// 	this.printArea = function() {
// 		document.write("The area of the box is: " + this.area() + "<br>");
// 	};
// }


function boxAreaVol( width, length, height) {
	var area = 2*width*length + 2*width*height + 2*length*height;
	var volume = width*length*height;
	return [area, volume];

}




crystalGazer(12, "Eva", "Thailand", "pilot");
ageCalculator(1984, 2017)
ageCalculator2(1984)
document.write(degRadConv(50) + "<br/>")

// brick = new box(4, 5, 6);
// brick.printArea();
// brick.printVolume();

package = boxAreaVol(4,5,6)
document.write(
	"The area of the box is: " + package[0] + "<br>"+
	"The volume of the box is: " + package[1] + "<br>");









