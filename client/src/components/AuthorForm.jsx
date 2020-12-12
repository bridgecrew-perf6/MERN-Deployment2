import  React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { navigate } from '@reach/router';

    
    
const AuthorForm = props => {
    const { initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);


    const handelClick = (e) => {
        e.preventDefault();
        onSubmitProp({name});
        setName("");
        navigate("/")
    };

    return (
        <div className="container mt-5 ">
            <form className='centered align-center' onSubmit={handelClick}>
                <p className="mb-3">Add a new autho:</p>
                <div className="form-group row  ml-3 rounded border col-sm-4 bg-light">
                    <label className="col-sm-12 col-form-label text-muted">Name 
                        <input type="text" className='ml-3 rounded border ' onChange={e => setName(e.target.value)} value={name}/>
                    </label>
                </div>
                <input type="submit" value="Submit" className="btn btn-info"/>
            </form>
        </div>
    );
};
export default AuthorForm;
