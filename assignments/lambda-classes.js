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
}

class Student extends Person{
  constructor(prop){
    this.previousBackground=prop.previousBackground;
    this.className=prop.className;
    this.favSubjects=prop.favSubjects;
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
}

class ProjectManager extends Instructor{
  constructor(prop){
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
  name:'Josh',
  age:20,
  location:'America',
  specialty:'Lamb slaughter',
  favLanguage:'animu',
  catchPhrase:'I\'m Ebul',
  gradClassName:'web17',
  favInstructor:'Josh'
});

const nick = new ProjectManager({
  name:'Josh',
  age:29,
  location:'America',
  specialty:'Banjo',
  favLanguage:'placeholder',
  catchPhrase:'Words are said',
  gradClassName:'web17',
  favInstructor:'Josh'
});

const patrick = new ProjectManager({
  name:'Patrick',
  age:24,
  location:'America',
  previousBackground:'none',
  className:'web21',
  favSubjects:['English','Math']
});

const jane = new ProjectManager({
  name:'Jane',
  age:32,
  location:'America',
  previousBackground:'Dancer',
  className:'web21',
  favSubjects:['Art','CSS']
});


