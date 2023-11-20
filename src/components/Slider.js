import image1 from "./images/1.webp";
import image2 from "./images/2.webp";
import image3 from "./images/3.webp";
import './Slider.css'



function Slider (){
    return(

        <>
       
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={image1} class="d-block w-100 heightC" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={image2} class="d-block w-100 heightC" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={image3} class="d-block w-100 heightC" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
        </>
    );
}
export default Slider;