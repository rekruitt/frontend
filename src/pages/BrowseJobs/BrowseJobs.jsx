import React from 'react';
import "./BrowseJobs.css";
import {BiLocationPlus} from "react-icons/Bi";
import {RiBriefcase4Line } from "react-icons/Ri";
import {FiBookmark} from "react-icons/Fi";
import {FiShare2} from "react-icons/Fi";
import { Link } from "react-router-dom";

const BrowseJobs = () => {
  return (
    <div>
      <div className='browse-part1'
       style={{
        backgroundImage: "url(./browseimg.png)",
        backgroundRepeat: "no-repeat",
        height: "20rem",
      }}>
        <h2>Find the best jobs</h2>
        <p className='browse-connect'>Lets connect you to verified jobs across the world</p>
        <input type='name' className='browse-input' placeholder='Enter job title'></input>
        <select className='browse-input'>
    <option>Job categories</option>
    <option>lagos</option>
    <option>Abuja</option>
    <option>Calabar</option>
    </select>
    <select className='browse-input'>
    <option>Job Location</option>
    <option>lagos</option>
    <option>Abuja</option>
    <option>Calabar</option>
    </select>
       <button className='browse-button'>Search now</button>
      </div>
      <div className='browse-latest'>
        <h3 className='browse-latest-job'>Latest Jobs</h3>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <div className='browse-box'>
          <div>
          <p className='browse-graphics'>Graphic Designer</p>
            <p className='browse-digital'>Hermosa Digital</p>
            <div className='browse-lagos'>
            <BiLocationPlus size='1.5rem' className='browse-icon'/>
            <p className='browse-lagos1'>Lagos</p>
            <RiBriefcase4Line size='1.5rem' className='browse-icon'/>
              <p className='browse-lagos1'>Fulltime</p>
            </div>
            <p className='browse-date'>12/3/2023</p>
          </div>
          <div>
            <button className='browse-button2'>Apply Now</button>
            <div className='browse-icon2'>
            <FiBookmark size='1.875rem' className='browse-icon2a'/>
            <FiShare2 size='1.875rem'/>
            </div>
          </div>
        </div>
        <button  className='browse-button2a'>View all jobs</button>
      </div>
      <div className='browse-grid'>
        <h3 className='browse-latest-job'>Browse by  job categories</h3>
        <div className='browse-grid2'>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p>Agriculture</p>
        <p className='browse-jobs'>(25 jobs)</p>
        </div>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p>Advertising</p>
        <p className='browse-jobs'>(25 jobs)</p>
        </div>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p>Banking</p>
        <p className='browse-jobs'>(9 jobs)</p>
        </div>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p>Education</p>
        <p className='browse-jobs'>(5 jobs)</p>
        </div>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p>Hospitality</p>
        <p className='browse-jobs'>(20 jobs)</p>
        </div>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p>Engineering</p>
        <p className='browse-jobs'>(21 jobs)</p>
        </div>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p>IT Services</p>
        <p className='browse-jobs'>(9 jobs)</p>
        </div>
        <div className='browse-grid1'>
        <img className='browse-grida' src="./browse-icon.svg"/>
        <p className='browse-jobs'>Explore more Categories</p>
        </div>
      </div>
      </div>
      <div className="browsebutton1">
<button className="browse-section2-button2">
          <Link to="/PostaJob">View all job categories</Link>
        </button>
        </div>

    </div>
  )
}

export default BrowseJobs;