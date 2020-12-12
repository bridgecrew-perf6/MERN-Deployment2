import { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { navigate } from '@reach/router';
import AuthorForm from './AuthorForm';

    
    
const EditAuthor = props => {

    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        // console.log(props._id);
        axios.get("http://localhost:8000/api/author/"+ props._id)
            .then(res => {
                setAuthor(res.data.product);
                setLoaded(true);
            }).catch(err => console.error(err));
    }, [props._id]);

    const update = author => {
        console.log(author);
        axios.put("http://localhost:8000/api/author/"+ props._id, author)
            .then(res => {
                console.log(res);
                navigate("/");
            }).catch(err => {
                console.error(err);
            });
    }

    return (
        <div>
            { loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={update}
                        initialName={author.name}
                    />
                </>
            )}
        </div>
    );
};
export default EditAuthor;
