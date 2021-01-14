import React, { useState } from 'react'
import '../SignIn.css'

export default function SignIn() {
    const [user, setUser] = useState({ name: '', email: '', password: '' })
    const { name, email, password } = user

    const handleChanged = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });

    }

    const handleSubmit = (e) => {

        alert(` ${name} Your Information is submitted`);
        console.log(user);
        e.preventDefault();
    }



    return (
        <>
            <div id="signIn" >
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="text-center mb-4"><i class="far fa-user-circle rounded-circle  "></i></div>

                        <form onSubmit={handleSubmit}>

                            <div >
                                <label htmlFor="name" > Name  </label>
                                <input type="text" name="name" required value={name} onChange={handleChanged}
                                    className="form-control form-control-lg mb-4 input" />
                            </div>

                            <div>
                                <label htmlFor="email" > Email  </label>
                                <input type="email" name="email" required value={email} onChange={handleChanged}
                                    className="form-control form-control-lg mb-4 input" />
                            </div>

                            <div>
                                <label htmlFor="password" > Password  </label>
                                <input type="password" name="password" placeholder="Enter Your Password" value={password} onChange={handleChanged}
                                    required className="form-control form-control-lg mb-4 input" />
                            </div>

                            <div>
                                <button className="btn btn-outline-dark  " type="submit">SignIn</button>
                            </div>
                        </form>

                    </div>
                    <div className="col-lg-3"></div>

                </div>

            </div>

        </>
    )
}


