class Person{
  constructor(prop){
    this.name=prop.name;
    this.age=prop.age;
    this.location=prop.location;
  }
  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person{
  constructor(prop){
    super(prop);
    this.specialty=prop.specialty;
    this.favLanguage=prop.favLanguage;
    this.catchPhrase=prop.catchPhrase;
  }
  demo(sbj){
    console.log(`Today we are learning about ${sbj}`);
  }
  grade(obj,sbj){
    console.log(`${obj.name} receives a perfect score on ${sbj}`);
  }
  adjustGrade(obj){
    let rand =  Math.floor(Math.random()*20);
    if(Math.random()<=0.5){
      obj.grade +=rand;
      if(obj.grade>100){
        obj.grade=100;
      }
    }
    else{
      rand = -rand;
      obj.grade +=rand;
      if(obj.grade<0){
        obj.grade=0;
      }
    }
    return rand;
  }
}

class Student extends Person{
  constructor(prop){
    super(prop);
    this.previousBackground=prop.previousBackground;
    this.className=prop.className;
    this.favSubjects=prop.favSubjects;
    this.grade=prop.grade;
  }
  listSubjects(){
    this.favSubjects.forEach(element => {
      console.log(element);
    });
  }
  prAssignment(sbj){
    console.log(`${this.name} has submitted a PR for ${sbj}.`);
  }
  sprintChallenge(sbj){
    console.log(`${this.name} has begun sprint challenge on ${sbj}.`);
  }
  graduate(){
    if(this.grade>=70){
      return true;
    }
    else{
      return false;
    }
  }
}

class ProjectManager extends Instructor{
  constructor(prop){
    super(prop);
    this.gradClassName=prop.gradClassName;
    this.favInstructor=prop.favInstructor;
  }
  standup(chnl){
    console.log(`${this.name} announces to ${chnl}, @channel standy times!`);
  }
  debugsCode(obj, sbj){
    console.log(`${this.name} debugs ${obj.name}'s code on ${sbj}.`);
  }
}

const dan = new Instructor({
  name:'Dan',
  age:30,
  location:'Earth',
  specialty:'Yes',
  favLanguage:'Javascript',
  catchPhrase:'Beep boop!',
});

const josh = new Instructor({
  name:'Josh',
  age:37,
  location:'America',
  specialty:'Banjo',
  favLanguage:'placeholder',
  catchPhrase:'-Makes banjo noises-',
});

const mary = new ProjectManager({
  name:'Mary',
  age:20,
  location:'America',
  specialty:'Lamb slaughter',
  favLanguage:'animu',
  catchPhrase:'I\'m Ebul',
  gradClassName:'web17',
  favInstructor:'Josh'
});

const nick = new ProjectManager({
  name:'Nick',
  age:29,
  location:'America',
  specialty:'Banjo',
  favLanguage:'placeholder',
  catchPhrase:'Words are said',
  gradClassName:'web17',
  favInstructor:'Josh'
});

const patrick = new Student({
  name:'Patrick',
  age:24,
  location:'America',
  previousBackground:'Designer',
  className:'web21',
  favSubjects:['English','Math'],
  grade:1
});

const jane = new Student({
  name:'Jane',
  age:32,
  location:'America',
  previousBackground:'Dancer',
  className:'web21',
  favSubjects:['Art','CSS'],
  grade:1
});

console.log(dan.name);
console.log(dan.age);
console.log(dan.location);
console.log(dan.specialty);
console.log(dan.favLanguage);
console.log(dan.catchPhrase);
dan.speak();
dan.demo('constructors');
dan.grade(patrick,'CSS');

console.log(josh.name);
console.log(josh.age);
console.log(josh.location);
console.log(josh.specialty);
console.log(josh.favLanguage);
console.log(josh.catchPhrase);
josh.speak();
josh.demo('Arrays');
josh.grade(jane,'HTML');

console.log(mary.name);
console.log(mary.age);
console.log(mary.location);
console.log(mary.specialty);
console.log(mary.favLanguage);
console.log(mary.catchPhrase);
console.log(mary.gradClassName);
console.log(mary.favInstructor);
mary.speak();
mary.demo('Arrays');
mary.grade(jane,'HTML');
mary.standup('PM-Group');
mary.debugsCode(jane,'Javascript');

console.log(nick.name);
console.log(nick.age);
console.log(nick.location);
console.log(nick.specialty);
console.log(nick.favLanguage);
console.log(nick.catchPhrase);
console.log(nick.gradClassName);
console.log(nick.favInstructor);
nick.speak();
nick.demo('Arrays');
nick.grade(jane,'HTML');
nick.standup('PM-Group');
nick.debugsCode(jane,'Javascript');

console.log(patrick.name);
console.log(patrick.age);
console.log(patrick.location);
console.log(patrick.previousBackground);
console.log(patrick.className);
console.log(patrick.favSubjects);
patrick.speak();
patrick.listSubjects();
patrick.prAssignment('javascript');
patrick.sprintChallenge('javascript');

console.log(jane.name);
console.log(jane.age);
console.log(jane.location);
console.log(jane.previousBackground);
console.log(jane.className);
console.log(jane.favSubjects);
console.log(jane.grade);
jane.speak();
jane.listSubjects();
jane.prAssignment('javascript');
jane.sprintChallenge('javascript');

while(!jane.graduate()){
  console.log(`${dan.name} adjusted ${jane.name}'s grade by ${dan.adjustGrade(jane)}. It is now ${jane.grade}`);
}
if(jane.graduate()){
  console.log(`${jane.name} has graduated.`);
}
