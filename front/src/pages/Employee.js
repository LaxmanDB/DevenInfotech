import React, { useState } from "react";
import * as empApi from "../api/employee";

function Employee() {
  const [update, setUpdate] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [states, setstates] = useState("");
  const [city, setCity] = useState("");
  const [employeeList, setEmployeeList] = useState({});
  const stateOptions = [
    "selct State",
    "Maharashtra",
    "Haryana",
    "Punjab",
    "Goa",
  ];
  const cityOptions = [
    "select city",
    "Pune",
    "Mumbai",
    "nashik",
    "Aurangabad",
    "Beed",
    "nagar",
  ];

  const addEmployee = async () => {
    const [data, error] = await empApi.saveEmp({
      firstName,
      lastName,
      mobile,
      email,
      states,
      city,
    });
    if (error) {
      console.error(error);
    }
  };

  const getEmployees = async () => {
    const [data, error] = await empApi.viewEmp();
    setEmployeeList(data);
  };

  const updateEmployee = async (id, empData) => {
    setUpdate(empData);
    const [data, error] = await empApi.updateEmp({
      id,
      firstName,
      lastName,
      mobile,
      email,
      states,
      city,
    });
  };

  const deleteEmployee = async (id) => {
    const [data, error] = await empApi.deleteEmp({ id });
    setEmployeeList(
      employeeList.filter((val) => {
        return val.id != id;
      })
    );
  };

  return (
    <div className="App">
      <div className="information">
        <label>firstName:</label>
        <input
          type="text"
          value={firstName}
          onChange={(fname) => {
            setfirstName(fname);
          }}
        />
        <label>lastName:</label>
        <input
          type="text"
          value={lastName}
          onChange={(lname) => {
            setlastName(lname);
          }}
        />
        <label>mobile:</label>
        <input
          type="number"
          value={mobile}
          maxLength={10}
          onChange={(mobile) => {
            setmobile(mobile);
          }}
        />
        <label>email:</label>
        <input
          type="email"
          value={email}
          onChange={(email) => {
            setemail(email);
          }}
        />
        <label>states :</label>
        <select
          value={states}
          onChange={(event) => {
            setstates(event);
          }}
        >
          {stateOptions.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>
        <select
          value={city}
          onChange={(city) => {
            setCity(city);
          }}
        >
          {cityOptions.map((option) => {
            return (
              <option value={option} key={option}>
                {option}
              </option>
            );
          })}
        </select>

        <button onClick={() => addEmployee()}>Add Employee</button>
      </div>
      <div className="employees">
        <button onClick={getEmployees}>Show Employees</button>

        <div className="employee">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>mobile</th>
                <th>email</th>
                <th>states</th>
                <th>city</th>
              </tr>
            </thead>
            <tbody>
              {employeeList > 0 ? (
                employeeList.map((val, key) => {
                  const {
                    id,
                    firstName,
                    lastName,
                    mobile,
                    email,
                    states,
                    city,
                  } = val;
                  return (
                    <tr key={key}>
                      <td>{id}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{mobile}</td>
                      <td>{email}</td>
                      <td>{states}</td>
                      <td>{city}</td>
                      <td>
                        <button onClick={() => deleteEmployee(id)}>
                          Delete
                        </button>
                        <button
                          onClick={() =>
                            updateEmployee(id, {
                              firstName,
                              lastName,
                              mobile,
                              email,
                              states,
                              city,
                            })
                          }
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={4}>No employee found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employee;
