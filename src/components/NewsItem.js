// import React, { Component } from 'react';

// export className= NewsItem extends Component {
//   constructor(){
//     super();
//     console.log("Hello i am constructor from News component")
//     this.state = {

//     }

//   }

//   render() {
//     let {title, description, imageUrl, newsUrl, auther, date} = this.props;
//     return (
//       <div className="my-3">
// <div className="card" style={{ /* width: '18rem' */ }}>


//           <img src={!imageUrl?"https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit,w_1024,h_1024/vip/2025/01/GettyImages-2191572544.jpg":imageUrl} className=Name="card-img-top" alt="..."/>
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text">
//               {description}</p>
//               <p className="card-text"><small className="text-muted">By {auther?"Unknown": auther} on {date}</small></p>
//             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default NewsItem;
import React from 'react';

const NewsItem = (props) => {
  // Destructure props
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card" style={{ /* width: '18rem' */ }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          src={!imageUrl ? "https://img-cdn.inc.com/image/upload/f_webp,q_auto,c_fit,w_1024,h_1024/vip/2025/01/GettyImages-2191572544.jpg" : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
