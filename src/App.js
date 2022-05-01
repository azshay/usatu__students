import { useState } from "react";

import StudentsList from "./components/StudentsList/StudentsList";
import AddForm from "./components/AddForm/AddForm";
import DeleteForm from "./components/DeleteForm/DeleteForm";
import EditForm from "./components/EditForm/EditForm";

import "./app.scss";
import "./buttons.scss";
import "./input.scss";

function App() {
     const [studentsChanged, setStudentsChanged] = useState(true);

     return (
          <div className="App container">
               <StudentsList studentsChanged={studentsChanged}></StudentsList>
               <div>
                    <AddForm
                         setStudentsChanged={setStudentsChanged}
                         studentsChanged={studentsChanged}
                    ></AddForm>
                    <DeleteForm
                         setStudentsChanged={setStudentsChanged}
                         studentsChanged={studentsChanged}
                    ></DeleteForm>
                    <EditForm
                         setStudentsChanged={setStudentsChanged}
                         studentsChanged={studentsChanged}
                    ></EditForm>
               </div>
          </div>
     );
}

export default App;
