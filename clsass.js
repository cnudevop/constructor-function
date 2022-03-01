
//class synatx for Student
class Student {
    //this method is called automatically when a new obj is created
    constructor(sno, name, fee, feePaid, skills, address) {
        //obj initialization logic
        this.sno = sno;
        this.name = name;
        this.fee = fee;
        this.feePaid = feePaid
        this.skills = skills;
        this.address = address;

    }


    getFeeStatus() {
        if (this.fee === this.feePaid) {
            return "paid"
        }
        else {
            return "pending"
        }
    }
}




//create an object
let std1 = new Student(445, 'srinu', 40000, 20000, ['c', 'cpp', 'JS'], { street: 'hyd' })
let std2 = new Student(200, 'shikha', 40000, 40000, ['html', 'css', 'JS'], { street: 'UP' })


console.log("student1", std1)

console.log(std2.getFeeStatus())

console.log(this.Student.name);