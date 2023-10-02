import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './skills.css'


const Skills = ()=> {

  
  const [isDiscoverVisible,setDiscover] = useState(false);
  const handleDiscoverClick = () => {
    setDiscover(true);
  };

  const handleCloseClick = () => {
    setDiscover(false);
  };

  
    return (
    <div className='skillsbody'>
      <div className="all-skills">
        <div className="skills">SKILLS AND EXPERTISE</div>
        <div className="left-skills">
          <p className='skills-someword'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quod recusandae repellat, eius quo sunt
            iure libero nihil quisquam, minima asperiores magnam facere! Aliquid minus a placeat consequuntur eos
            officiis.
          </p>
          <dl>
          
            <dt>
            <i><FontAwesomeIcon icon="fa-solid fa-check"/></i> Lorem ipsum dolor sit amet.
            </dt>
            <dt>
            <i><FontAwesomeIcon icon="fa-solid fa-check"/></i> Organizational know-how.
            </dt>
            <dt>
            <i><FontAwesomeIcon icon="fa-solid fa-check"/></i> Communication skills.
            </dt>
            <dt>
            <i><FontAwesomeIcon icon="fa-solid fa-check"/></i> Leadership experience.
            </dt>
            <dt>
            <i><FontAwesomeIcon icon="fa-solid fa-check"/></i> Computer proficiency.
            </dt>
          </dl>

          <div id="button" onClick={ handleDiscoverClick  }>
            Discover More
          </div>
          
          
        </div>

        <div className="right-skills">
          html/css/js
          <div
            className="row"
            style={{
              background:
                'linear-gradient(to right, rgb(117, 117, 234) 0%, rgb(117, 117, 234) 80%, rgb(137, 207, 242) 80%, rgb(137, 207, 242) 100%)',
            }}
          ></div>
          Adobe photoshop
          <div
            className="row"
            style={{
              background:
                'linear-gradient(to right, rgb(117, 117, 234) 0%, rgb(117, 117, 234) 70%, rgb(137, 207, 242) 70%, rgb(137, 207, 242) 100%)',
            }}
          ></div>
          Adobe illustrator
          <div
            className="row"
            style={{
              background:
                'linear-gradient(to right, rgb(117, 117, 234) 0%, rgb(117, 117, 234) 90%, rgb(137, 207, 242) 90%, rgb(137, 207, 242) 100%)',
            }}
          ></div>
          wordpress
          <div
            className="row"
            style={{
              background:
                'linear-gradient(to right, rgb(117, 117, 234) 0%, rgb(117, 117, 234) 55%, rgb(137, 207, 242) 55%, rgb(137, 207, 242) 100%)',
            }}
          ></div>
          joomla
          <div
            className="row"
            style={{
              background:
                'linear-gradient(to right, rgb(117, 117, 234) 0%, rgb(117, 117, 234) 88%, rgb(137, 207, 242) 88%, rgb(137, 207, 242) 100%)',
            }}
          ></div>
        </div>

        {isDiscoverVisible && (
          <div id="discoverall">
            <div id="Discover">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas commodi cumque distinctio! Consectetur
              minus maxime eum earum accusantium fuga ut totam quis laborum, doloremque iusto obcaecati blanditiis odio
              necessitatibus fugiat.
            </div>
            <div id="close" onClick={handleCloseClick}>
              x
            </div>
          </div>
          
        )}
      </div>
    </div>
      
    );
  }


export default Skills;