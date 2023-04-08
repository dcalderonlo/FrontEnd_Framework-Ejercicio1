import './c-episode.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faComments } from '@fortawesome/free-solid-svg-icons'

const Episode = ({ title, img, description }) => {
  return (
      <div className="card m-3 flex-container-cards" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body cards-padding">
          <h5 className="card-title flex-cards-title">{title || "default title"}</h5>
          <p className="card-text flex-cards-text">{description}</p>
          <div className='flex-container-widgets'>
            <FontAwesomeIcon icon={ faComments } />
            {/* </div>
            <div className='margin-item flex-item-end'> */}
              <FontAwesomeIcon icon={ faHeart } />
              <div className='container-count-comments count-products'>
                <span className='count-comments contador-productos'>0</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Episode;
