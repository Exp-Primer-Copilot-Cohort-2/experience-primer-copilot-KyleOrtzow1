function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node.js']
  };

  // Adding a new skill to the member object
  member.skills.push('Vue.js');

  // Removing a skill from the member object
  member.skills.pop();

  // Displaying the member details
  console.log(member);
}