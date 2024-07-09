import {Link} from "react-router-dom"


export default function Nav(){
    return(
        <div>
            <section class="bg-warning">
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
            <h1 class="mb-2 fw-bold display-3"><Link to="/home">Nirvana</Link></h1>
            <div class="d-flex flex-wrap justify-content-around">
                <div class="d-flex align-items-center mx-3">
                    <div>
                        <span class="d-block fw-bold"><Link to="/sign">Book a seat</Link></span>
                    </div>
                </div>
                <div class="d-flex align-items-center mx-3">
                    <div>
                        <span class="d-block fw-bold"><Link to="/customer-list">Customers List</Link></span>
                    </div>
                </div>
                <div class="d-flex align-items-center mx-3">
                    <div>
                        <span class="d-block fw-bold"><Link to="/sign">Sign in</Link></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
