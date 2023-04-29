I write schma in dbdiagram hope it easy to understand
// Docs: https://dbml.dbdiagram.io/docs


Table student {
  studentname varchar
  studentid integer [primary key]
  email varchar
  gradyear integer
}

Table enrolled {
  enroolldate timestamp 
  courseid integer
  studentid integer
}


Table course {
cousename varchar
courseid integer [primary key]
description varchar
}

Ref: student.studentid > enrolled.studentid // many-to-one

Ref: course.courseid > enrolled.courseid



https://dbdiagram.io/d/644cbcebdca9fb07c43d4dd5

