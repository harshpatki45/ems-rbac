This document outlines the design and implementation of an Employee Management System (EMS) that leverages a Role-Based Access Control (RBAC) model. The EMS is designed to streamline task allocation and management within an organization. I have taken the help of local storage to show the data.

The system will feature two distinct dashboards:
1.Admin Dashboard: Accessible only to authorized administrators, this dashboard provides tools for creating and assigning tasks to employees. Administrators can define task details such as title, due date, assigned employee, category, and description.
2.Employee Dashboard: Accessible to individual employees, this dashboard displays tasks assigned to them. Employees can view task details, track progress, and potentially update task status.

Note on Initial Data Entry:
Due to React's strict mode, users may be required to enter task details twice upon initial creation. This is a known limitation that will be resolved in the production environment.

The RBAC model ensures that only authorized individuals can access specific functionalities. In the current implementation, the system will primarily focus on assigning roles, with administrators having the authority to assign tasks to employees. As the project progresses, the RBAC model can be further refined to incorporate more granular access controls.

To run this project on your local system download the zip file of the project and then unzip the file and open it in your VS Code
then run the command "npm install" to download the node modules, go into the employee directory by typing "cd employee" in your terminal and type "npm run dev". 
To create a task first we have to login in admin dashboard by using the following credentials 
email - admin@me.com
password - 123 
here you can create the task for employee(please the do it twice because of react strict mode it is passing empty array the first time)

To see that task on any of the employee to whom we have assigned the task to we have to login at employee dashboard
Example - If we have assigned the task to arjun then login to his dashboard 
email - arjun@employee.com
password - 123 

You will able to see the assigned task here.
