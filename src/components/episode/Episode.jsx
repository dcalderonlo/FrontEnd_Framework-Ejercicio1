import './c-episode.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faComments } from '@fortawesome/free-solid-svg-icons'

const Episode = ({ title, img, description }) => {
  return (
    <div className='container'>
      <div className="card flex-container-cards" style={{ width: "30%" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body cards-padding">
          <h5 className="card-title flex-cards-title">{title || "default title"}</h5>
          <p className="card-text flex-cards-text">{description}</p>
          <div className='flex-container-widgets'>
            <div className='widget-card widget-card-start'>
              <FontAwesomeIcon icon={ faComments } />
              <div className='container-widget-count container-widget-count-comment container-widget-count-color'>
                <span className=' widget-count'>0</span>
              </div>
            </div>
            {/* </div>
            <div className='margin-item flex-item-end'> */}
            <div className='widget-card widget-card-end widget-card-color'>
              <FontAwesomeIcon icon={ faHeart } />
              <div className='container-widget-count container-widget-count-like'>
                  <span className=' widget-count'>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Episode;
