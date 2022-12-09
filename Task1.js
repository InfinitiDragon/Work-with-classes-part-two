const todayYear = new Date().getFullYear();

class Employee {
    constructor(fullName, phoneNum, position, education, yearOfEmployment, yearOfDismissal, schedule) {
        this.fullName = fullName
        this.phoneNum = phoneNum
        this.position = position
        this.education = education
        this.yearOfEmployment = yearOfEmployment
        this.yearOfDismissal = yearOfDismissal
        this.schedule = schedule
    }

    get position() {
        return this._position
    }
    set position(value) {
        if (['Manager', 'JSDeveloper', 'SoftTester', 'UserExpDesigner'].includes(value)) this._position = value
        else this._position = false
    }

    get yearOfEmployment() {
        return this._yearOfEmployment
    }
    set yearOfEmployment(value) {
        if (value > todayYear) this._yearOfEmployment = false
        else this._yearOfEmployment = value
    }

    get yearOfDismissal() {
        return this._yearOfDismissal
    }
    set yearOfDismissal(value) {
        if (value < this._yearOfEmployment) this._yearOfDismissal = false
        else this._yearOfDismissal = value
    }

    get schedule(){
        return this._schedule
    }
    set schedule(value){
        this._schedule = 'Mon-Fri: 10:00 - 19:00, break: 12:00 - 15:00'
    }
}

class RemoteEmployee extends Employee {
    constructor(fullName, phoneNum, position, education, yearOfEmployment, yearOfDismissal, schedule) {
        super(fullName, phoneNum, position, education, yearOfEmployment, yearOfDismissal)

        this.schedule = schedule
    }

    get schedule(){
        return this._schedule
    }
    set schedule(value){
        this._schedule = 'Mon-Sat: 10:00 - 16:00, break: 12:00 - 13:00'
    }
}

const employee1 = new RemoteEmployee('Anthony Thornton', '+0663826593', 'SoftTester', 'Software engineering', 2018, 2020); 
const employee2 = new Employee('Lester Morrison', '+06628567385', 'JavaDeveloper', 'Software engineering', 2027, 2025); 

console.log(employee1)
console.log(employee2)