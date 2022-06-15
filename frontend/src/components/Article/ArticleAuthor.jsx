import React from 'react'

function ArticleAuthor() {
  return (
    <div
      id="profile-sidebar"
      className="is-affixed"
      style={{ position: "relative" }}
    >
      <div className="sidebar-inner" style={{ position: "relative" }}>
        <div className="card mt-n7 d-none d-lg-block border-light text-center p-2">
          <div
            className="profile-cover rounded-top"
            data-background="../assets/img/coworking.jpg"
          ></div>
          <div className="card-body p-2">
            <div className="profile-thumbnail small-thumbnail mt-n6 mx-auto">
              <img
                src="../assets/img/team/profile-picture-4.jpg"
                className="card-img-top rounded-circle border-white"
                alt="Joseph Portrait"
              />
            </div>
            <h4 className="font-weight-normal mt-4 mb-0">Neil Sims</h4>
            <ul className="list-inline row mx-auto my-4">
              <li className="list-inline-item col-sm-4 col-auto px-2 px-xl-3 my-2 mx-0">
                <h6 className="font-weight-normal font-small">Rentals</h6>
                <a
                  className="d-sm-block h6 text-gray font-weight-normal font-small"
                  href="#"
                >
                  20.5%{" "}
                  <span className="icon icon-xs text-success">
                    <i className="fas fa-angle-up"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                <h6 className="font-weight-normal font-small">Reviews</h6>
                <a
                  className="d-sm-block h6 text-gray font-weight-normal font-small"
                  href="#"
                >
                  4.5/5{" "}
                  <span className="icon icon-xs text-danger">
                    <i className="fas fa-angle-down"></i>
                  </span>
                </a>
              </li>
              <li className="list-inline-item col-sm-4 col-md-auto px-2 px-xl-3 my-2 mx-0">
                <h6 className="font-weight-normal font-small">Status</h6>
                <a
                  className="d-sm-block h6 text-gray font-weight-normal font-small"
                  href="#"
                >
                  <span className="icon icon-xs text-success">
                    <i className="fas fa-award"></i>
                  </span>{" "}
                  Verified
                </a>
              </li>
            </ul>
            <a className="btn btn-sm btn-secondary mb-3" href="#">
              <span className="fas fa-user-plus mr-1"></span> Follow
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleAuthor


