function Student(name, grade, score) {
    this.name = name;
    this.grade = grade;
    this.score = score;
  }
  
  Student.prototype.school = "Skilvul";
  Student.prototype.greeting = function () {
    return "Hello " + this.name;
  };
  
  // Tambahkan method study() ke prototype
  Student.prototype.study = function () {
    return "I study at " + this.school;
  };
  
  // Buat instance objek myStudent
  let myStudent = new Student("Sarah", 20, 100);
  
  // Output data
  console.log(myStudent.name);         // Output nama student
  console.log(myStudent.school);       // Output sekolah student
  console.log(myStudent.greeting());   // Output hasil greeting()
  console.log(myStudent.study());      // Output hasil study()
  