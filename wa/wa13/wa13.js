const employees = [
    { firstName: 'Sam', department: 'Tech', designation: 'Manager', salary: 40000, raiseEligible: true },
    { firstName: 'Mary', department: 'Finance', designation: 'Trainee', salary: 18500, raiseEligible: true },
    { firstName: 'Bill', department: 'HR', designation: 'Executive', salary: 21200, raiseEligible: false }
  ];
  
  console.log("Problem 1: Employees JSON", employees);
  
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("Problem 2: Company JSON", company, employees.firstName);
  
  const newEmployee = { firstName: 'Anna', department: 'Tech', designation: 'Executive', salary: 25600, raiseEligible: false };
  company.employees.push(newEmployee);
  
  console.log("Problem 3: Company JSON after adding Anna", company, employees.firstName);
  
  let totalSalary = 0;
  company.employees.forEach(emp => totalSalary += emp.salary);
  
  console.log("Problem 4: Total Salary for all employees = $" + totalSalary);
  
  function applyRaises(company) {
    company.employees.forEach(emp => {
      if (emp.raiseEligible) {
        emp.salary *= 1.10;
        emp.raiseEligible = false;
      }
    });
  }
  
  applyRaises(company);
  console.log("Problem 5: Company JSON after applying raises", company);
  
  const wfhEmployees = ['Anna', 'Sam'];
  
  company.employees.forEach(emp => {
    emp.wfh = wfhEmployees.includes(emp.firstName);
  });
  
  console.log("Problem 6: Company JSON with Work From Home status", company);
  