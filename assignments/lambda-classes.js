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