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

