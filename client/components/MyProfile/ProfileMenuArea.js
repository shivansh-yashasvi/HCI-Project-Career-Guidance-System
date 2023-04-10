import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import EditModal from "../common/EditModal";
import Link from "next/link";

const ProfileMenuArea = () => {
  // setShow
  const [show, setShow] = useState(false);
  // handleClose
  const handleClose = () => setShow(false);
  // handleShow
  const handleShow = () => setShow(true);
  // useAuth
  const { logout, user } = useAuth();
  // myOrders
  const myOrders = useSelector((state) => state.order.myOrders);

  return (
    <>
      <section className="profile__menu pb-70 grey-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-md-4">
              <div className="profile__menu-left white-bg">
                {/* <h3 className="profile__menu-title"><i className="fa-regular fa-square-list"></i> Your Menu</h3> */}
                <div className="profile__menu-tab">
                  <div
                    className="nav nav-tabs flex-column justify-content-start text-start"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-account-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-account"
                      type="button"
                      role="tab"
                      aria-controls="nav-account"
                      aria-selected="true"
                    >
                      {" "}
                      <i className="fa-regular fa-user"></i> My Account
                    </button>

                    <button className="nav-link" onClick={logout}>
                      <i className="fa-regular fa-arrow-right-from-bracket"></i>{" "}
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-8 col-md-8">
              <div className="profile__menu-right">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-account"
                    role="tabpanel"
                    aria-labelledby="nav-account-tab"
                  >
                    <div className="profile__info">
                      <div className="profile__info-top d-flex justify-content-between align-items-center">
                        <h3 className="profile__info-title">
                          Profile Information
                        </h3>
                        <button
                          onClick={handleShow}
                          className="profile__info-btn"
                          type="button"
                        >
                          <i className="fa-regular fa-pen-to-square"></i> Edit
                          Profile
                        </button>
                      </div>

                      <div className="profile__info-wrapper white-bg">
                        <div className="profile__info-item">
                          <p>Name</p>
                          <h4>{user?.displayName}</h4>
                        </div>
                        <div className="profile__info-item">
                          <p>Email</p>
                          <h4>{user?.email}</h4>
                        </div>
                        <div className="profile__info-item">
                          <p>Phone</p>
                          <h4>6380747287</h4>
                        </div>
                        <div className="profile__info-item">
                          <p>Address</p>
                          <h4>Vellore, India</h4>
                        </div>
                        <div className="profile__info-item">
                        <p>Skills</p>
                            <span className="badge fs-13 bg-primary mr-5">
                              C++
                            </span>
                            <span className="badge fs-13 bg-primary  mr-5">
                              React JS
                            </span>
                            <span className="badge fs-13 bg-primary mr-5">
                              Node JS
                            </span>
                            <span className="badge fs-13 bg-primary mr-5">
                              Machine Learning
                            </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EditModal show={show} handleClose={handleClose} />
    </>
  );
};

export default ProfileMenuArea;
