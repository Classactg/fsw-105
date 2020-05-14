var employees = []

function Employees (name, jobTitle, 
    salary, status = "Contract"){
        this.name = name
        this.jobTitle = jobTitle
        this.salary = salary
        this.status = status
        this.printEmployeeForm = function(){
            console.log
    (`name:${name}, jobTitle:${jobTitle}, salary:${salary}, status:${status}`)
        }
employees.push(this)
    }
    var faculty = new Employees("Bob", "V School Instructor", "$3000/monthly", "Part time")
    
    var fishFood = new Employees("Vincent", "Campus President", "8000/monthly")

    var rations = new Employees("Penelope", "Caffeteria", "2700/montly", "Part time")
    
    console.log(employees)
    faculty.printEmployeeForm()
    fishFood.printEmployeeForm()
    rations.printEmployeeForm()