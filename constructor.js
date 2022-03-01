

//create student constructor function
function Student(sno, name, fee, feePaid, skills, address) {

    //object initialization logic
    this.sno = sno
    this.name = name
    this.fee = fee
    this.feePaid = feePaid
    this.skills = skills
    this.address = address

}

//add function to prototype of constructor function
Student.prototype.getFeeStatus = function () {
    if (this.fee === this.feePaid) {
        return "paid"
    }
    else {
        return "pending"
    }
}


//create an object
let std1 = new Student(100, 'ravi', 20000, 12000, ['c', 'cpp'], { street: 'KPHB' })
let std2 = new Student(200, 'sravani', 20000, 12000, ['html', 'css'], { street: 'Ameerpet' })


console.log(std1)
console.log(std2.getFeeStatus())