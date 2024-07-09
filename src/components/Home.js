import {Link} from "react-router-dom"
export default function Home(){
    return(
        <div style={{maxWidth : "100%"}}>
        <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="food2.jpg" class="d-block w-100 " alt="..." style={{height : "560px"}}  />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <h3 class="text-white">Where Global Flavors Meet Indian Warmth</h3>
                    <h1 class="fw-bold" >Savor diverse cuisines crafted with the finest ingredients and a touch of Indian hospitality.</h1>
                    <a href="#" class="btn btn-outline-light mt-3"><Link to="/sign">Reserve your seat!</Link></a>
                </div>
            </div>
            </div>
            </div>
            <section class="bg-danger py-3">
        <div class="container d-flex flex-wrap justify-content-between align-items-center">
            <div class="d-flex flex-wrap justify-content-around">
                <div class="d-flex align-items-center mx-3">
                    <div>
                        <span class="d-block fw-bold">Opening Hours</span>
                        <span>Everyday, 10:00 AM - 11:00 PM</span>
                    </div>
                </div>
                <div class="d-flex align-items-center mx-3">
                    <div>
                        <span class="d-block fw-bold">Call us</span>
                        <span>+012 345 6789</span>
                    </div>
                </div>
                <div class="d-flex align-items-center mx-3">
                    <div>
                        <span class="d-block fw-bold">Email us</span>
                        <span>info@example.com</span>
                    </div>
                </div>
            </div>
        </div>
    </section>



            </div>
            

    )
}