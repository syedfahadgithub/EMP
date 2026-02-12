
const employees = [
    {
        id: 1,
        firstName: "Employee1",
        email: "employee1@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                complete: false,
                failed: false,
                taskTitle: "Design Login Page",
                taskDescription: "Create responsive login UI",
                date: "2026-02-10",
                category: "Design"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: false,
                complete: true,
                failed: false,
                taskTitle: "Fix Navbar Bug",
                taskDescription: "Resolve mobile navbar issue",
                date: "2026-02-05",
                category: "Development"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                complete: false,
                failed: true,
                taskTitle: "API Integration",
                taskDescription: "Integrate payment API",
                date: "2026-02-01",
                category: "Backend"
            }
        ],
        taskSummary: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 1
        }
    },
    {
        id: 2,
        firstName: "Employee2",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                complete: false,
                failed: false,
                taskTitle: "Create Dashboard UI",
                taskDescription: "Admin dashboard design",
                date: "2026-02-11",
                category: "Design"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: false,
                complete: true,
                failed: false,
                taskTitle: "Update Profile Page",
                taskDescription: "Add profile image upload",
                date: "2026-02-07",
                category: "Frontend"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                complete: false,
                failed: true,
                taskTitle: "Database Backup",
                taskDescription: "Backup production database",
                date: "2026-02-03",
                category: "Database"
            }
        ],
        taskSummary: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 1
        }
    },
    {
        id: 3,
        firstName: "Employee3",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                complete: false,
                failed: false,
                taskTitle: "Landing Page SEO",
                taskDescription: "Optimize SEO tags",
                date: "2026-02-09",
                category: "Marketing"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: false,
                complete: true,
                failed: false,
                taskTitle: "Bug Fixes",
                taskDescription: "Resolve reported issues",
                date: "2026-02-04",
                category: "Development"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                complete: false,
                failed: true,
                taskTitle: "Server Deployment",
                taskDescription: "Deploy app to VPS",
                date: "2026-02-02",
                category: "DevOps"
            }
        ],
        taskSummary: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 1
        }
    },
    {
        id: 4,
        firstName: "Employee4",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                complete: false,
                failed: false,
                taskTitle: "Create Reports Module",
                taskDescription: "Generate monthly reports",
                date: "2026-02-12",
                category: "Backend"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: false,
                complete: true,
                failed: false,
                taskTitle: "UI Improvements",
                taskDescription: "Improve button styles",
                date: "2026-02-06",
                category: "Frontend"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                complete: false,
                failed: true,
                taskTitle: "Email Service Setup",
                taskDescription: "Configure SMTP service",
                date: "2026-02-01",
                category: "Integration"
            }
        ],
        taskSummary: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 1
        }
    },
    {
        id: 5,
        firstName: "Employee5",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                taskNumber: 1,
                active: true,
                newTask: true,
                complete: false,
                failed: false,
                taskTitle: "Test Payment Gateway",
                taskDescription: "Perform sandbox testing",
                date: "2026-02-13",
                category: "Testing"
            },
            {
                taskNumber: 2,
                active: false,
                newTask: false,
                complete: true,
                failed: false,
                taskTitle: "Update Documentation",
                taskDescription: "Write API documentation",
                date: "2026-02-08",
                category: "Documentation"
            },
            {
                taskNumber: 3,
                active: false,
                newTask: false,
                complete: false,
                failed: true,
                taskTitle: "Security Audit",
                taskDescription: "Check vulnerabilities",
                date: "2026-02-03",
                category: "Security"
            }
        ],
        taskSummary: {
            active: 1,
            newTask: 1,
            complete: 1,
            failed: 1
        }
    }
];

const admins = [
    {
        id: 1,
        firstName: "Admin1",
        email: "admin1@example.com",
        password: "123"
    }
];



export const setLocalStorage = () => {
    console.log("runnnig..")
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admins', JSON.stringify(admins))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admins = JSON.parse(localStorage.getItem('admins'))

    return {employees,admins}
}