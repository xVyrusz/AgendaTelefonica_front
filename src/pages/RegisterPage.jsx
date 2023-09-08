import { useForm } from 'react-hook-form'
import {registerRequest} from '../api/auth' 

function RegisterPage() {

    const { register, handleSubmit } = useForm()

    const onSubmit = handleSubmit(async (values) => {
        const res = await registerRequest(values)
        console.log(res);
    })

    return (
        <div className="container-fluid dark-bg text-light py-5 min-vh-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="form-container bg-success p-4 rounded">
                            <h2 className="text-center">Register</h2>
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" {...register('name', { required: true })} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" {...register('email', { required: true })} placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">password</label>
                                    <input type="password" className="form-control"{...register('password', { required: true })} placeholder="Password" autoComplete="off" />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage