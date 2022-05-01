import { useState } from "react";

import useStudentService from "../../services/StudentService";

import "./addForm.scss";

const AddForm = ({ setStudentsChanged, studentsChanged }) => {
     const [studentNumber, setStudentNumber] = useState("");
     const [studentName, setStudentName] = useState("");

     const { setNewStudent } = useStudentService();

     const changeNumber = (e) => {
          setStudentNumber(e.target.value);
     };

     const changeName = (e) => {
          setStudentName(e.target.value);
     };

     return (
          <form className="addForm">
               <h2 className="addForm__header">Форма добавления студента</h2>

               <div className="inputs">
                    <input
                         required
                         type="text"
                         placeholder="Номер студента"
                         className="input"
                         value={studentNumber}
                         onChange={changeNumber}
                    />
                    <input
                         required
                         type="text"
                         placeholder="Имя студента"
                         className="input"
                         value={studentName}
                         onChange={changeName}
                    />
               </div>

               <div className="buttons">
                    <button
                         className="button"
                         onClick={(e) => {
                              if (
                                   studentNumber.length != 0 &&
                                   studentName.length != 0
                              ) {
                                   e.preventDefault();
                                   setNewStudent({
                                        id: studentNumber,
                                        name: studentName,
                                   });
                                   setStudentsChanged(!studentsChanged);
                                   setStudentName("");
                                   setStudentNumber("");
                              } else {
                                   alert("Пожалуйста, заполните все поля!");
                              }
                         }}
                    >
                         Сохранить
                    </button>
                    <button
                         className="button"
                         onClick={(e) => {
                              e.preventDefault();
                              setStudentName("");
                              setStudentNumber("");
                         }}
                    >
                         Отмена
                    </button>
               </div>
          </form>
     );
};

export default AddForm;
