import React from 'react'

const DiscoverUser = ({portfolio}) => {
  return (
        <div className="other-user">
                <div className="title">
                    <img src={portfolio?.image?.secure_url} alt="avatar"/>
                    <div>
                        <h3>{portfolio?.user_id?.firstname} {portfolio?.user_id?.lastname}</h3>
                        <h4>
                            {portfolio?.portfolio_name}
                         </h4>
                    </div>
                </div>
            <p>{portfolio?.description}</p>
            </div>
    
  )
}

export default DiscoverUser
