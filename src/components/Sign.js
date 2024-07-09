import {Link} from "react-router-dom"


export default function Sign(){

    return(
        <div class="container-lg mt-5">
        <div class="row justify-content-center">
            <div class="col col-sm-3 pt-4 px-4 border-bottom border-secondary border-2">
                <form class="form" action="/customer-create" onsubmit="/customer-create">
                    <div class="title d-flex justify-content-center mb-2" >Sign In</div>
                    <div class="mb-3 input-group">
                        <span class="input-group-text" >
                            <span class="tt" data-bs-placement="bottom" title="Your username should contain alphabets and can also contain . , _ , number but cannot start a with number">
                                <i class="bi bi-person-fill"></i>
                            </span>
                        </span>
                        <input type="text" class="form-control" id="username" placeholder="Username" required />
                    </div>
                    <div class="mb-3 input-group">
                        <span class="input-group-text">
                            <span class="tt" data-bs-placement="bottom" title="Your Password should contain minimum of 8 characters which should include atleast 1 symbol, 1 number, uppercase and lowercase characters but cannot start a with number">
                                <i class="bi bi-lock"></i>
                            </span>
                        </span>
                        <input type="password" class="form-control" id="password" placeholder="Password" required />
                    </div>
                    <div>
                        <Link class="text-decoration-none text-light" to={"/create-customer/"}><center><button class="btn btn-primary">Sign In</button></center></Link>
                    </div>
                    <div class="d-flex justify-content-between mt-3 mb-4">
                        <span>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </span>
                        <a href="#" class="text-decoration-none">Forgot Password?</a>
                    </div>
                </form>
            </div>
            <div class="d-flex justify-content-center my-3">
                Don't have an account! . <a href="#" class="text-decoration-none">Sign up here</a>
            </div>
        </div>
    </div>
    )
}


