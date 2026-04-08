import React from 'react'

const DiscoverUser = ({portfolio}) => {
  return (
        <div className="other-user">
                <div className="title">
                    <img src={portfolio?.image.secure_url} alt="avatar"/>
                    <div>
                        <h3>{portfolio?.portfolio_name}</h3>
                        <h4>{portfolio?.user_info.first_name} {portfolio?.user_info.last_name}</h4>
                    </div>
                </div>
            <p>{portfolio?.description}</p>
            </div>
    
  )
}

export default DiscoverUser