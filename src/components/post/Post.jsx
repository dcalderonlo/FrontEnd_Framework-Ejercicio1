import './c-post.css'
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart , faComments } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const fechaActual = moment().format('MMM Do YYYY');

const Post = ({ img, user, description, like }) => {

  const [number, setNumber] = useState(like);
  
  const countLike = () => {
    setNumber(number + 1);
  }
  
  return (
    <section>
      <article>
        <div className='d-flex justify-content-center' style={{ margin: "4%" }}>
          <div className="card flex-container-cards">
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body cards-padding">
              <div className='date'>
                <span>{fechaActual}</span>
              </div>
              <h5 className="card-title flex-cards-title">{user}</h5>
              <p className="card-text flex-cards-text">{description}</p>
              <div className='flex-container-widgets'>
                <div className='widget-card widget-card-start'>
                  <FontAwesomeIcon icon={ faComments } />
                  <div className='container-widget-count container-widget-count-comment container-widget-count-color'>
                    <div className='widget-count'>3</div>
                  </div>
                </div>
                <div className='widget-card widget-card-end widget-card-color'>
                  <FontAwesomeIcon icon={ faHeart } />
                  <div className='container-widget-count container-widget-count-like'>
                      <span className='widget-count' onClick={countLike}>{number}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Post;
