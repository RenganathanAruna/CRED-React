import React from 'react'

const UserDetails = ({userDetails,setUserDetails,handelsumbituserdeatils}) => {
  return (
    <div className='AllPage_heightmin'>
        <div className='UserDetails_ContentWrapper'>
            <div className='UserDetails_formWrapper'>
                <form className='AddNewPost' onSubmit={handelsumbituserdeatils}>
                    <div>
                        <strong>
                            Name : 
                        </strong>
                        <input
                            id='post_id'
                            type='text'
                            required
                            value={userDetails.Name}
                            placeholder='Enter your Name'
                            className='form-control'
                            onChange={(e) => setUserDetails({ ...userDetails, Name: e.target.value })}
                        />
                    </div>
                    <div>
                        <strong>
                            Email Id : 
                        </strong>
                        <input
                            id='post_id'
                            type='Email'
                            required
                            value={userDetails.Email}
                            placeholder='Enter your Email id'
                            className='form-control'
                            onChange={(e) => setUserDetails({ ...userDetails, Email: e.target.value })}                        />
                    </div>
                    <div>
                        <button type='submit' className='btn btn-success btn-size'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UserDetails