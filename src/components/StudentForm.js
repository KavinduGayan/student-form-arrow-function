import { useState } from 'react'

const StudentForm = ({ FormData }) => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [course, setCourse] = useState('')

    const AddFormData = (e) => {
        e.preventDefault()
        FormData({ name, age, address1, address2, city, course })
        setName('')
        setAddress1('')
        setAddress2('')
        setCity('')
        setCourse('')
    }

    return (
        <form onSubmit={AddFormData}>
            <div class="form-group row">
                <label for="name" class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="age" class="col-sm-2 col-form-label">Age</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="Address1" class="col-sm-2 col-form-label">Address1</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="Address1" value={address1} onChange={(e) => setAddress1(e.target.value)}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="Address2" class="col-sm-2 col-form-label">Address2</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="Address2" value={address2} onChange={(e) => setAddress2(e.target.value)}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="City" class="col-sm-2 col-form-label">City</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="City" value={city} onChange={(e) => setCity(e.target.value)}/>
                </div>
            </div>
            <div class="form-group row">
                <label for="Course" class="col-sm-2 col-form-label">Course</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="Course" value={course} onChange={(e) => setCourse(e.target.value)}/>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    )
}

export default StudentForm