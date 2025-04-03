const employees = [
    { name: "Alice Johnson", department: "HR" },
    { name: "Bob Smith", department: "Engineering" },
    { name: "Charlie Brown", department: "Marketing" },
    { name: "David Wilson", department: "Engineering" },
    { name: "Eve Adams", department: "HR" }
    
];

const employeeList = document.getElementById("employeeList");
const departmentFilter = document.getElementById("departmentFilter");

// Function to update the displayed employee list
function updateEmployeeList(department = "") {
    // Clear current list
    employeeList.innerHTML = "";

    // Filter employees by the selected department
    const filteredEmployees = employees.filter(employee => {
        return department === "" || employee.department === department;
    });

    // Create and append list items for each employee
    filteredEmployees.forEach(employee => {
        const li = document.createElement("li");
        li.textContent = employee.name;
        employeeList.appendChild(li);
    });
}

// Event listener for dropdown changes
departmentFilter.addEventListener("change", (event) => {
    const selectedDepartment = event.target.value;
    updateEmployeeList(selectedDepartment);
});

// Initial list display (all employees)
updateEmployeeList();
