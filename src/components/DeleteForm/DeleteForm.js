import { useState } from "react";

import useStudentService from "../../services/StudentService";

const DeleteForm = ({ setStudentsChanged, studentsChanged }) => {
     const [studentNumber, setStudentNumber] = useState("");

     const { deleteStudent } = useStudentService();

     const changeNumber = (e) => {
          setStudentNumber(e.target.value);
     };

     return (
          <form className="addForm">
               <h2 className="addForm__header">Форма удаления студента</h2>

               <div className="inputs">
                    <input
                         required
                         type="text"
                         placeholder="Номер студента"
                         className="input"
                         value={studentNumber}
                         onChange={changeNumber}
                    />
               </div>

               <div className="buttons">
                    <button
                         className="button"
                         onClick={(e) => {
                              e.preventDefault();
                              if (studentNumber.length != 0) {
                                   deleteStudent({
                                        id: studentNumber,
                                   });
                                   setStudentsChanged(!studentsChanged);
                                   setStudentNumber("");
                              } else {
                                   alert("Пожалуйста, заполните все поля!");
                              }
                         }}
                    >
                         Удалить
                    </button>
                    <button
                         className="button"
                         onClick={(e) => {
                              e.preventDefault();
                              setStudentNumber("");
                         }}
                    >
                         Отмена
                    </button>
               </div>
          </form>
     );
};

export default DeleteForm;
