import { useHttp } from "../hooks/http.hook";

const useStudentService = () => {
     const { loading, request, error, clearError } = useHttp();

     const _apiBase = "http://localhost:3001/students";

     const getAllStudents = async () => {
          const res = await request(`${_apiBase}`);

          console.log(res);
          return res;
     };

     const setNewStudent = async (data) => {
          const response = await fetch(`${_apiBase}`, {
               method: "POST",
               body: JSON.stringify(data),
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
               },
          });

          let responseData = await response.json();
          console.log(responseData);

          return responseData;
     };

     const editStudent = async (data) => {
          const response = await fetch(`${_apiBase}/${data.id}`, {
               method: "PUT",
               body: JSON.stringify({ name: data.name }),
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
               },
          });

          let responseData = await response.json();
          console.log(responseData);

          return responseData;
     };

     const deleteStudent = async (data) => {
          const response = await fetch(`${_apiBase}/${data.id}`, {
               method: "DELETE",
               headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
               },
          });

          let responseData = await response.json();
          console.log(responseData);

          return responseData;
     };

     return {
          loading,
          error,
          clearError,
          getAllStudents,
          setNewStudent,
          deleteStudent,
          editStudent,
     };
};

export default useStudentService;
