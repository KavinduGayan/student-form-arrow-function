
import './App.css';
import Header from './components/Header';
import StudentForm from './components/StudentForm';

function App() {

  const getFormData=(Student) => {
    console.log(Student)
  } 

  return (
    <div className='container'>
      <Header />
      <StudentForm FormData={getFormData}/>
    </div>
  )
}

export default App;
