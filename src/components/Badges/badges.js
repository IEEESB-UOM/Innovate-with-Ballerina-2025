import './badge.css';

const Badges = () => {
      return (
         <div className = "main-badge-container">
            <div className = 'center-badge-container'>
               <div className = 'badge-container'>
                  <img src = './ieee-logo.png' alt = "badge1" id = "badge1"></img>
               </div>
               <div className = 'badge-container'>
                  <img src = './CS-logo.webp' alt = "badge2" id = "badge2"></img>
               </div>
               <div className = 'badge-container'>
                  <img src = './wso2-logo.webp' alt = "badge3" id = "badge3"></img>
                  
               </div>
               <div className = 'badge-container'>
                  <img src = './b-logo.webp' alt = "badge4" id = "badge4"></img>
               </div>

            </div>
            <div className = 'center-text'>
               <p>Innovation Starts with a Single Line of Code<br />
               <span style={{
                  fontSize: '0.7rem',
               }}>©2024 Innovate with Ballerina</span></p>
            </div>
         </div>
      )
}

export default Badges;