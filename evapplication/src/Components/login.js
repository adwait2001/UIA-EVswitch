

import React from 'react';

const Login = () => {
    return (
            <div class="py-5 bg-light account-block">
            <h2 class="text-center mb-5">Welcom back ! Glad to see you, Again !</h2>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                    </div>
                    <div class="col-md-4 text-center ">
                        <form>
                            <div class="form-outline mb-4">
                                <input type="email" id="formLogin" name="email" class="form-control" placeholder="Email address" />
                            </div>

                            <div class="form-outline mb-4">
                                <input type="password" id="formPassword" name="password" class="form-control" placeholder="Password" />
                            </div>

                            <div class="row mb-4 text-center">
                               
                            </div>

                            <button type="button" class="btn btn-success btn-block mb-4">Sign in</button>

                            <div class="text-center social-connexion">
                                <p>or sign up with:</p>
                                <div class="row">
                                    <div class="col-md-4">
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                            <img src="./facebook.png" alt="" />
                                        </button>
                                    </div>
                                    <div class="col-md-4">
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                            <img src="./google.png" alt="" />
                                        </button>
                                    </div>
                                    <div class="col-md-4">
                                        <button type="button" class="btn btn-link btn-floating mx-1">
                                            <img src="./apple.png" alt="" />
                                        </button>
                                    </div>
                                </div>
                                <br/>
                                {/* <p>Don't have an account ? <a href="#!">Register</a></p> */}
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4">
                    </div>
                </div>
        </div>

        </div>
    );
}

export default Login;
