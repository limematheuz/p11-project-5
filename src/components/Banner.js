import "./Banner.css"
import banner from "../components/img/banner.jpg"

function Banner() {
    return(
        <div>
        <img className="bannerImg"src={banner} alt="appdays"/>
        </div>
    )
}

export default Banner;