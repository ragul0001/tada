import React from 'react'
import { Link } from "react-router-dom";
function Form() {
    

  return (
    <>

                 <section>
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-12 col-md-8 col-lg-8 col-xl-6">
                          <div class="row">
                            <div class="col text-center title">
                              <h1>Child Details</h1>
                            </div>
                          </div>
                          <div class="">
                         {/* <!-- Product Card Container --> */}
                                <div class="card border-0">
                                    {/* <!-- Main Container --> */}
                                    <div class="">
                                    <div id="dropZone" class="drop-zone">
                                        <div class="drop-zone-icons">
                                        {/* <!-- <svg class="upload-icon" viewBox="0 0 24 24" fill="#FF5A5F"><path d="M12 6l-4 4h3v4h2v-4h3m-10 6v2h12v-2h-12z"></path></svg> --> */}
                                        </div>
                                        <span class="drop-zone-text"> +upload <br/>Child photo<br/>(2 Max MB)</span>
                                    </div>
                                    </div>
                                </div>
                          </div>
                          <div class="row align-items-center mt-3">
                            <div class="col ">
                              <input type="text" class="form-control" placeholder="Child Name"/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="email" class="form-control" placeholder="School Name (Optional)"/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Address (Optional)"/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Contact Number (Optional)"/>
                            </div>
                          </div>
                                    <div class="row align-items-center mt-4">
                            <div class="col">
                              <input type="text" class="form-control" placeholder="Postal Address"/>
                            </div>
                          </div>
                          <div class="row align-items-center mt-2 g-4">
                            <div class="col-12 col-md-4">
                              <input type="text" class="form-control" placeholder="Standard(Optional)"/>
                            </div>
                            <div class="col-12 col-md-4">
                              <input type="text" class="form-control" placeholder="Division(Optional)"/>
                            </div>
                            <div class="col-12 col-md-4">
                                <input type="text" class="form-control" placeholder="Role(Optional)"/>
                              </div>
                          </div>
                          <div class="row justify-content-start mb-3  mt-4 ">
                            <div class="">                
                              <Link to="/addcart"><button class="product-btn border-0 p-2 text-white rounded-5 w-100">Add to Cart</button></Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
    </>
  )
}

export default Form