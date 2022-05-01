import { useState, useEffect, useRef } from "react";

import useStudentService from "../../services/StudentService";

import "./studentsList.scss";

const StudentsList = ({ studentsChanged }) => {
     const [students, setStudents] = useState([]);
     const { getAllStudents } = useStudentService();

     useEffect(() => {
          getAllStudents().then(onStudentsLoaded);
     }, [studentsChanged]);

     const onStudentsLoaded = (newStudents) => {
          setStudents(newStudents);
     };

     return (
          <div className="students__list">
               <h2 className="students__listHeader">Список студентов</h2>
               <div className="students__wrapper">
                    <div className="students__number">
                         <h3 className="students__numberHeader">
                              Номер студента
                         </h3>

                         {students.map((student) => {
                              return (
                                   <div
                                        key={student.id}
                                        className="student__number"
                                   >
                                        {student.id}
                                   </div>
                              );
                         })}
                    </div>
                    <div className="students__fullName">
                         <h3 className="students__fullNameHeader">
                              Фамилия Имя Отчество
                         </h3>

                         {students.map((student) => {
                              return (
                                   <div
                                        key={student.id}
                                        className="student__fullName"
                                   >
                                        {student.name}
                                   </div>
                              );
                         })}
                    </div>
               </div>
          </div>
     );
};

export default StudentsList;
