import React from "react";
import social from "../images/social.png";
import { Link } from "react-router-dom";
import Progressbar from "./Progressbar";

function Home() {
    
  return (
    <>
      <nav
        class="navbar navbar-expand-lg bg-navbar "
        aria-label="Eighth navbar example"
      >
        <div class="container">
          <div class="d-flex align-items-center order-lg-1 ">
            <div class="d-flex ">
              <img
                alt="tada-logo"
                width="64"
                height="64"
                class=""
                src="https://tada.kids/_next/static/media/Tada-logo.66358343.svg"
              />
            </div>
          </div>
        </div>
      </nav>

      <div class="container mt-4">
        <div class="d-flex justify-content-center rounded-5 ">
          <img
            src="https://tada.kids/_next/image?url=https%3A%2F%2Fd3ny489hugqfbu.cloudfront.net%2Fpublic%2Fbanner%2Fbanner-object-1%2FI240405134902627504.webp&w=1080&q=75"
            alt=""
            class="img-fluid rounded-5"
          />
        </div>
      </div>

      <div class="container d-flex justify-content-center overflow-hidden">
        <div class="row mt-3 ">
          <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/freedelivery.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">All India Free Delivery</p>
            </div>
          </div>
          <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/delivery.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Dispatch Within 48 Hours</p>
            </div>
          </div>
          <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/design.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Personalised For You</p>
            </div>
          </div>
          <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/lasting.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Made To Last</p>
            </div>
          </div>
          <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/ordering.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Easy Ordering</p>
            </div>
          </div>
          <div class="col-4 col-md-auto">
            <div class="d-flex flex-column align-items-center">
              <img
                src="https://tada.kids/featureicon/happiness.svg"
                alt=""
                class="option-icon"
              />
              <p class="text-secondary mt-1">Happiness Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid  mt-5">
        <hr />
      </div>
      <div class="container  mt-5">
        <div class="row">
          <div class="col-12 col-md-6 ">
            <div class="sticky-top     ">
              <img
                src="https://tada.kids/_next/image?url=https%3A%2F%2Fd3ny489hugqfbu.cloudfront.net%2Fpublic%2Fproductimage%2Fproduct_images%2FI240511164231403810.jpg&w=750&q=75"
                alt=""
                class="product-img rounded-5"
              />
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div>
              <h4 class=" fw-semibold">
                Personalised Book Label & Bag Tag Combo
              </h4>
              <p class="mt-3 text-secondart product-text">
                Customized labels and bag tag featuring a cartoonized picture of
                your child. Labels include name, class, and school, comprising
                24 book labels, 6 name labels for stationary, and 8 pen labels.
                The bag tag includes parent's contact address and details.
              </p>
              {/* <!-- Btn and offer --> */}
              <div>
                <button class="border-0 p-2 text-white rounded-5 px-2 product-btn text-sm">
                  Offer Ends in 7hr 42min 12s
                </button>
                <p class="mt-3 fs-5 fw-semibold">
                  <span class="product-clr">37% Off</span>
                  <span class=" px-2">$598</span>
                  <sup class="text-muted text-decoration-line-through ">
                    $948
                  </sup>
                </p>
              </div>
              {/* <!--Options layer  --> */}
              <div class="mt-2">
                <ul class="list-unstyled">
                  <li>
                    <div class="d-flex align-self-center">
                      <div class=" ">
                        <img
                          src="https://tada.kids/featureicon/freedelivery.svg"
                          alt="icons"
                          class="icon-product"
                        />
                      </div>
                      <div class="ps-2  mt-3">
                        <p class="">All India FREE Shipping</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-self-center">
                      <div class=" ">
                        <img
                          src="https://tada.kids/featureicon/delivery.svg"
                          alt="icons"
                          class="icon-product"
                        />
                      </div>
                      <div class="ps-2 mt-3 ">
                        <p class="">Dispatch within 48 Hours</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex align-self-center">
                      <div class=" ">
                        <img
                          src="https://tada.kids/featureicon/design.svg"
                          alt="icons"
                          class="icon-product"
                        />
                      </div>
                      <div class="ps-2 mt-3 ">
                        <p class="">
                          Only limited orders daily - grab yours now!{" "}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!-- Order button --> */}
              <div class="mt-2">
                <p>
                  <a
                    href="#"
                    class="product-clr text-decoration-none fw-semibold"
                  >
                    How to Place Order?
                  </a>
                </p>
                <Link to="/form">
                  <button class="border-0 rounded-3 product-btn px-2 py-1 fw-semibold text-white w-100">
                    Order Now{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-arrow-right-short"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                      />
                    </svg>{" "}
                  </button>
                </Link>
              </div>

              {/* <!-- Project Descriptions --> */}
              <div class="mt-3">
                <div>
                  <h3>Project Description</h3>
                  <div>
                    <p>
                      📚✨ A little something to add a touch of magic to study
                      time! This entire set of Personalised Book Labels can be
                      personalised on art made from your little one’s photo. You
                      can customise each set to make their books truly their
                      own. Here's what makes our labels the perfect addition to
                      their school supplies:
                    </p>
                    <p>
                      🎉&nbsp;<strong>It’s custom art:</strong> We transform
                      your child's photo into a whimsical cartoon-style
                      illustration, ensuring their label set is as unique as
                      they are.
                    </p>
                    <p>
                      🌈&nbsp;
                      <strong>They’re vibrant and durable:&nbsp;</strong>
                      High-quality printing means the colours stay bright, and
                      the labels last throughout the school year. 🖨️💪
                    </p>
                    <p>
                      👧&nbsp;<strong>They’re one-of-a-kind:</strong> Add their
                      name or class to make each label uniquely theirs. 💬
                    </p>
                    <p>
                      📖&nbsp;<strong>Helps them stay organised:</strong> No
                      more mix-ups or lost textbooks. Our labels help kids
                      easily identify their books, making learning more fun and
                      stress-free. 🤓
                    </p>
                    <p>
                      🎁&nbsp;<strong>They make the perfect gifts:</strong>{" "}
                      Surprise your child, grandchild or little friend with a
                      set of these custom labels. They'll love the personal
                      touch!
                    </p>
                    <p>
                      The perfect way to add a touch of personality and
                      uniqueness to your child's belongings! 🎉 Our bag tags are
                      designed to withstand the wear &amp; tear of everyday use
                      while ensuring that your child's backpack, sports bag, or
                      luggage stands out from the crowd, while making them
                      easily identifiable 😎
                    </p>
                    <p>
                      <strong>🙎Truly personal -&nbsp;</strong>Our bag tags
                      include your child’s face and any number of designs,
                      making them truly one of a kind - Just like your child 🙂
                    </p>
                    <p>
                      <strong>✴️Long lasting -&nbsp;</strong>Our tags are made
                      from durable materials to ensure they last long and look
                      as good as new.
                    </p>
                    <p>
                      <strong>💯No more lost bags -&nbsp;</strong>Ensures that
                      lost bags can be easily identified and brought back to
                      your child.&nbsp;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reviews --> */}
      <div class="container mt-2">
        <div class=" d-md-flex justify-content-md-between border-0  border-clr rounded-3">
          <div class="p-2 p-md-3">
            <div class=" ">
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 85 36" class="injected-svg w-25" data-src="https://static.elfsight.com/icons/app-all-in-one-reviews-logos-google-logo-multicolor.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g clip-path="url(#a-1)"><path fill="#4285F4" d="M20.778 13.43h-9.862v2.927h6.994c-.345 4.104-3.76 5.854-6.982 5.854-4.123 0-7.72-3.244-7.72-7.791 0-4.43 3.429-7.841 7.73-7.841 3.317 0 5.272 2.115 5.272 2.115l2.049-2.122s-2.63-2.928-7.427-2.928C4.725 3.644 0 8.8 0 14.367c0 5.457 4.445 10.777 10.988 10.777 5.756 0 9.969-3.942 9.969-9.772 0-1.23-.179-1.941-.179-1.941Z"></path><path fill="#EA4335" d="M28.857 11.312c-4.047 0-6.947 3.163-6.947 6.853 0 3.744 2.813 6.966 6.994 6.966 3.786 0 6.887-2.893 6.887-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.878 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.954-4.181Z"></path><path fill="#FBBC05" d="M43.965 11.312c-4.046 0-6.946 3.163-6.946 6.853 0 3.744 2.813 6.966 6.994 6.966 3.785 0 6.886-2.893 6.886-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.877 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.955-4.181Z"></path><path fill="#4285F4" d="M58.783 11.319c-3.714 0-6.634 3.253-6.634 6.904 0 4.16 3.385 6.918 6.57 6.918 1.97 0 3.017-.782 3.79-1.68v1.363c0 2.384-1.448 3.812-3.633 3.812-2.11 0-3.169-1.57-3.537-2.46l-2.656 1.11c.943 1.992 2.839 4.07 6.215 4.07 3.693 0 6.508-2.327 6.508-7.205V11.734h-2.897v1.17c-.89-.96-2.109-1.585-3.726-1.585Zm.269 2.709c1.821 0 3.69 1.554 3.69 4.21 0 2.699-1.865 4.187-3.73 4.187-1.98 0-3.823-1.608-3.823-4.161 0-2.653 1.914-4.236 3.863-4.236Z"></path><path fill="#EA4335" d="M78.288 11.302c-3.504 0-6.446 2.788-6.446 6.901 0 4.353 3.28 6.934 6.782 6.934 2.924 0 4.718-1.6 5.789-3.032l-2.389-1.59c-.62.962-1.656 1.902-3.385 1.902-1.943 0-2.836-1.063-3.39-2.094l9.266-3.845-.48-1.126c-.896-2.207-2.984-4.05-5.747-4.05Zm.12 2.658c1.263 0 2.171.671 2.557 1.476l-6.187 2.586c-.267-2.002 1.63-4.062 3.63-4.062Z"></path><path fill="#34A853" d="M67.425 24.727h3.044V4.359h-3.044v20.368Z"></path></g><defs><clipPath id="a-1"><path fill="#fff" d="M0 0h84.515v36H0z"></path></clipPath></defs></svg>
               */}
              <img src={social} className="img-picc" />
              <span class=""> Rating</span>
            </div>
            <div class="d-flex">
              <h4>4.6</h4>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="ps-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#FCBF02"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  {" "}
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                </svg>
              </span>
              <span class="text-muted mt-1 ps-2 review-name">5 (Reviews)</span>
            </div>
          </div>
          <div class=" align-self-center px-2 pb-3 pb-md-0">
            <button class="border-0 text-white bg-primary rounded-3 px-2 py-2 ">
              Write a review
            </button>
          </div>
        </div>

        <div>
          <div class="mt-4">
            <div class="d-flex ">
              <h5>
                <span class="product-prp">5000+</span> HAPPY CUSTOMERS
              </h5>
            </div>
            <div class=" mt-2">
              <div class="d-flex overflow-x-scroll  below-scroll ">
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview.webp&w=128&q=75"
                  alt="Image 1"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview4.webp&w=128&q=75"
                  alt="Image 2"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview2.webp&w=256&q=75"
                  alt="Image 3"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview4.webp&w=256&q=75"
                  alt="Image 4"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview5.webp&w=256&q=75"
                  alt="Image 2"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview6.webp&w=256&q=75"
                  alt="Image 3"
                  class="img-60"
                />
                <img
                  src="https://tada.kids/_next/image?url=%2Freviews%2Freview7.webp&w=256&q=75"
                  alt="Image 4"
                  class="img-60"
                />
              </div>
            </div>
          </div>
          <div class="mt-1">
            <div class="">
              <div class="col-12  mt-2 w-50">
                <p>
                  Turn your kids school days into something special and they
                  will love it! See what other parents say!
                </p>
              </div>
              <div class="col-12  ">
                <button class="product-b text-white p-3 fw-semibold border-0 p rounded-2 btn-review ">
                  View Customer reviews
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-4">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">AjithKumar</span>
                <br />
                <span class="text-muted revi">1 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light">
                Best High-quality and Innovative product
              </p>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">Anup</span>
                <br />
                <span class="text-muted review-day">4 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light"> Innovative product</p>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">Lakshana</span>
                <br />
                <span class="text-muted review-day">5 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light">
                Nothing to say, only two words just wow❤‍🔥❤‍🔥❤‍🔥❤‍🔥💯 thank
                you Tada
              </p>
            </div>
          </div>
        </div>
        <div class="border-0 border-clr p-3 mt-4 rounded-4">
          <div class="mt-3">
            <div class="d-flex">
              <div>
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocJ4_nYq24kvJGW05WNEqxitFKdP2sUv4O36xosyRF-XQss3vg=s120-c-rp-mo-br100 "
                  alt=""
                  className="img-pic"
                />
              </div>
              <div class="align-self-center px-2">
                <span class="fw-semibold review-name">Rock</span>
                <br />
                <span class="text-muted review-day">10 day ago</span>
              </div>
            </div>
            <div class="mt-2 px-1 px-md-4">
              <div class="d-flex ">
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
                <span class="ps-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FCBF02"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />{" "}
                  </svg>
                </span>
              </div>
              <p class="mt-1 px-1 fw-light">
                Labels look very grand and made my children feel happy..... I
                have only one request.... You may enable the option to increase
                the number of labels in a single order. Otherwise picking up the
                orders, sending samples and delivering the orders are
                outstanding and shows your excellence in it.....
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav class="navbar bg-navbar">
        <div class="container-fluid d-flex justify-content-center">
          <span class=" mb-0  fw-medium">
            2024 &copy;CopyRights Techtist All Rights Reserved{" "}
          </span>
        </div>
      </nav>
    </>
  );
}

export default Home;
