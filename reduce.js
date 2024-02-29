/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => {
	console.log(
		"Accumulator:", acc,
		"Current Value:", curr,
		"Total:", acc + curr
	);
	return acc + curr;
}, 0);
console.log(sum);

const teamMembers = [
	{
	  name: 'Andrew',
	  profession: 'Developer',
	  yrsExperience: 5
	},
	{
	  name: 'Ariel',
	  profession: 'Developer',
	  yrsExperience: 7
	},
	{
	  name: 'Michael',
	  profession: 'Designer',
	  yrsExperience: 1
	},
	{
	  name: 'Kelly',
	  profession: 'Designer',
	  yrsExperience: 3
	},
	{
		name: "Mark",
		profession: "Manager",
		yrsExperience: 18
	}
  ];
  
  // Totaling a specific object property
  let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
  console.log(totalExperience);
  
  
  // Grouping by a property, and totaling it too
  let experienceByProfession = teamMembers.reduce((acc, curr) => {
	let key = curr.profession;
	if (!acc[key]) {
		acc[key] = curr.yrsExperience;
	} else {
		acc[key] += curr.yrsExperience;
	}
	return acc;
  }, {})

  console.log(experienceByProfession);

  const namesByProfession = teamMembers.reduce((acc, curr) => {
	const { name, profession } = curr;
	if (!acc[profession]) {
	  acc[profession] = [name];
	} else {
	  acc[profession].push(name);
	}
	return acc;
  }, {});
  
  console.log(namesByProfession);

  // Filter team members who are developers
const developers = teamMembers.filter(member => member.profession === 'Developer');

// Find the developer with the highest years of experience
const developerWithHighestExperience = developers.reduce((prev, curr) => {
  return (prev.yrsExperience > curr.yrsExperience) ? prev : curr;
});

// Get the name of the developer with the highest years of experience
const nameOfDeveloperWithHighestExperience = developerWithHighestExperience.name;

console.log(nameOfDeveloperWithHighestExperience);