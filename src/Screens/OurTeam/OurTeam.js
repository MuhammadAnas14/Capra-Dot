import { fontSize } from '@mui/system'
import React from 'react'

const OutTeam = () => {

    const team4= {
      fontFamily: "Montserrat, sans-serif",
        color: "#8d97ad",
        fontWeight: 300,
    }
    const heading= {
      color: "#3e4555",
      fontSize: 30
    }
    const heading2= {
      color: "#3e4555",
      fontSize: 18
    }
    return (
    <div class="py-5" style={team4}>
  <div class="container">
    <div class="row justify-content-center mb-4">
      <div class="col-md-7 text-center">
        <h3 class="mb-3" style={heading}>Meet Our Team</h3>
        <h6 class="subtitle" style={heading2}>You can relay our amazing features list and also our customer services will be great experience for you without doubt and in no-time</h6>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 mb-4 text-center">
        <div class="row">
          <div class="col-md-12 ">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{width:"75%"}}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 class="subtitle mb-3">Property Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4 text-center">
        <div class="row">
          <div class="col-md-12">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg" alt="wrapkit" class="img-fluid rounded-circle"  style={{width:"75%"}}/>
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 class="subtitle mb-3">Property Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4 text-center">
        <div class="row">
          <div class="col-md-12">
            <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t3.jpg" alt="wrapkit" class="img-fluid rounded-circle" style={{width:"75%"}} />
          </div>
          <div class="col-md-12 text-center">
            <div class="pt-2">
              <h5 class="mt-4 font-weight-medium mb-0">Michael Doe</h5>
              <h6 class="subtitle mb-3">Property Specialist</h6>
              <p>You can relay on our amazing features list and also our customer services will be great experience.</p>
              <ul class="list-inline">
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#" class="text-decoration-none d-block px-1"><i class="icon-social-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
  }

export default OutTeam