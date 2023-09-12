
import React, { useReducer, useRef, useState } from "react";

const Usereff = () => {
  const intialstate = {
    fields: [],
    arry: [],
    data: {
      Firstname: "",
      Lastname: "",
      Email: "",
      Number: "",
    },
    editkey: -1,
    isTrue: true,
    setColor: "red",
  };
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const emailRef = useRef(null);
  const numberRef = useRef(null);
  const [firstname, setName] = useState("");
  const [lastname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("");

  const reducer = (state, action) => {
    switch (action.type) {
      case "Firstname":
        return {
          ...state,
          data: { ...state.data, Firstname: action.value },
        };
      case "Lastname":
        return {
          ...state,
          data: { ...state.data, Lastname: action.value },
        };
      case "Email":
        return {
          ...state,
          data: { ...state.data, Email: action.value },
        };

      case "Number": 'ADD_DATA'
        return {
          ...state,
          data: { ...state.data, Number: action.value }, 'ADD_DATA'
        };

      case "delete":
        return {
          ...state,
          arry: [...state.arry.filter((_, index) => index !== action.key)],
        };

      case "update":
        console.log(action.payload, action.index);

        return {
          ...state,
          data: {
            Firstname: action.payload.Firstname,
            Lastname: action.payload.Lastname,
            Email: action.payload.Email,
            Number: action.payload.Number,
          },
          isTrue: false,
          editkey: action.payload.index,
        };

      case "success":
        return {
          ...state,
          arry: [...state.arry, action.value],
        };

      case "edit":
        if (
          state.data.Firstname.length < 3  ||
          state.data.Lastname.length < 3  ||
          state.data.Email==="" ||
          state.data.Number.length < 10
        ) {
          alert("Please fill all required fields.");
          return state;
        }
        state.arry.splice(state.editkey, 1, { ...state.data });

        return {
          ...state,
          arry: state.arry,
          isTrue: true,
          editkey: -1,
          data: {
            Firstname: "",
            Lastname: "",
            Email: "",
            Number: "",
          },
        };

      default:
        return state;
    }
  };

  const [addstate, dispatch] = useReducer(reducer, intialstate);
  
  
  const handlesubmit = (e) => {
    e.preventDefault();

    const { Firstname, Lastname, Email, Number } = addstate.data;

    if (!Firstname || !Lastname || !Email || !Number) {
      alert("Please fill all the required fields.");
      if (!Firstname) {
        fnameRef.current.style.border = "2px solid green";
      } else {
        fnameRef.current.style.border = "2px solid black";
      }
      if (!Lastname) {
        lnameRef.current.style.border = "2px solid orange";
      } else {
        lnameRef.current.style.border = "2px solid black";
      }
      if (!Email) {
        emailRef.current.style.border = "2px solid olive";
      } else {
        emailRef.current.style.border = "2px solid black";
      }
      if (!Number) {   
        numberRef.current.style.border = "2px solid red";
      } else {
        numberRef.current.style.border = "2px solid black";
        
      }
      return;
    }

    if (Firstname.length < 3 || Lastname.length < 3 || Number.length < 10) {
      alert(
        "Please enter at least 3 characters in the Firstname and Lastname, and a valid phone number."
      );
      return;
    }

    if (!/\S+@\S+\.\S+/.test(Email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (firstname === "") {
      fnameRef.current.style.border = "2px solid black";
    } else {
      fnameRef.current.style.border = "none";
    }

    if (lastname === "") {
      lnameRef.current.style.border = "2px solid black";
    } else {
      lnameRef.current.style.border = "2px solid orange";
    }

    if (email === "") {
      emailRef.current.style.border = "2px solid black";
    } else {
      emailRef.current.style.border = "2px solid black ";
    }

    if (number === "") {
      numberRef.current.style.border = "2px solid black";
    } else if (Number.length > 10) {
      numberRef.current.style.border = "2px solid black";
      alert("Phone number must not exceed 10 characters.");
      return;
    } else {
      numberRef.current.style.border = "2px solid red";
    }

    console.log(addstate.data);
    dispatch({ type: "success", value: addstate.data });
    console.log(addstate.arry);
    dispatch({ type: "Firstname", value: "" });
    dispatch({ type: "Lastname", value: "" });
    dispatch({ type: "Email", value: "" });
    dispatch({ type: "Number", value: "" });
  };

  return (
    <div>
      <h1 className="align">Enter data here</h1>
      <div className="container">
        <input
          type="text"
          className="form-control"
          name="Firstname"
          ref={fnameRef}
          placeholder="Firstname"
          value={addstate.data.Firstname}
          onChange={(e) => {
            dispatch({ type: "Firstname", setName, value: e.target.value });
          }}
        />

        <br />
        <input
          type="text"
          className="form-control"
          name="Lastname"
          ref={lnameRef}
          placeholder="Lastname"
          value={addstate.data.Lastname}
          onChange={(e) => {
            dispatch({ type: "Lastname", setlName, value: e.target.value });
          }}
        />

        <br />

        <input
          type="text"
          className="form-control"
          name="email"
          ref={emailRef}
          placeholder="email"
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={addstate.data.Email}
          onChange={(e) => {
            dispatch({ type: "Email", setEmail, value: e.target.value });
          }}
        />
        <br />

        <input
          type="Number"
          className="form-control"
          name="Number"
          placeholder="Number"
          ref={numberRef}
          aria-label="Number"
          aria-describedby="basic-addon1"
          value={addstate.data.Number}
          onChange={(e) => {
            dispatch({ type: "Number", setnumber, value: e.target.value });
          }}
        />

        <br />
        <div>
          {addstate.isTrue ? (
            <button onClick={handlesubmit} type="submit">
              Submit
            </button>
          ) : (
            <button
              onClick={(e) => {
                dispatch({ type: "edit" });
              }}
            >
              edit
            </button>
          )}
        </div>

        <table>
          <thead>
            <tr>
              <th>Sr.np</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Phone-Number</th>
              <th>Actions</th>
            </tr>
          </thead>

          <React.Fragment>
            {addstate.arry.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{value.Firstname}</td>
                  <td>{value.Lastname}</td>
                  <td>{value.Email}</td>
                  <td>{value.Number}</td>

                  <button
                    variant="outline-info bg-primary m-1"
                    mx="2"
                    onClick={(e) => {
                      dispatch({
                        type: "update",
                        payload: {
                          ...value,
                          index: key,
                        },
                      });
                    }}
                  >
                    Update
                  </button>

                  <button
                    variant="outline-info bg-danger m-1"
                    onClick={(e) => {
                      dispatch({ type: "delete", key: key });
                    }}
                  >
                    Delete
                  </button>
                  <td></td>
                </tr>
              );
            })}
          </React.Fragment>
        </table>
      </div>
    </div>
  );
};

export default Usereff;