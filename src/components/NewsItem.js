import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={!imageUrl?"https://upload.wikimedia.org/wikipedia/commons/8/86/Supreme_Court_of_Pakistan%2C_Islamabad_by_Usman_Ghani.jpg":imageUrl} className="card-img-top" alt="..." style={{ height: '200px', objectFit: 'cover' }} />
        <div className="card-body" style={{ height: '180px', overflow: 'hidden' }}>
          <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {title}
          </h5>
          <p className="card-text" style={{ height: '70px', overflow: 'hidden' }}>{description}...</p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
