import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const a = "empty";

  return (
    <div>
 <div>
      <div class="page">
        <div class="page-main">
          <div class="app-header header sticky">
            <div class="container-fluid main-container">
              <div class="d-flex">
                <a
                  aria-label="Hide Sidebar"
                  class="app-sidebar__toggle"
                  data-bs-toggle="sidebar"
                  href="javascript:void(0)"
                ></a>

                <a class="logo-horizontal " href="Candidates/MyDashboard">
                  <img
                    src="assets/images/brand/logo.png"
                    class="header-brand-img desktop-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/brand/logo-3.png"
                    class="header-brand-img light-logo1"
                    alt="logo"
                  />
                </a>

                <div class="main-header-center ms-3 d-none d-lg-block">
                  <input
                    class="form-control"
                    placeholder="Search for results..."
                    type="search"
                  />
                  <button class="btn px-0 pt-2">
                    <i class="fe fe-search" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="d-flex order-lg-2 ms-auto header-right-icons">
                  <button
                    class="navbar-toggler navresponsive-toggler d-lg-none ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent-4"
                    aria-controls="navbarSupportedContent-4"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon fe fe-more-vertical"></span>
                  </button>
                  <div class="navbar navbar-collapse responsive-navbar p-0">
                    <div
                      class="collapse navbar-collapse"
                      id="navbarSupportedContent-4"
                    >
                      <div class="d-flex order-lg-2">
                        <div class="d-flex country">
                          <a
                            class="nav-link icon text-center"
                            href="Employer/Dashboard"
                          >
                            <i class="fe fe-globe"></i>
                            <span class="fs-16 ms-2 d-none d-xl-block">
                              Switch to Employer
                            </span>
                          </a>
                        </div>

                        <div class="dropdown  d-flex">
                          <a class="nav-link icon theme-layout nav-link-bg layout-setting">
                            <span class="dark-layout">
                              <i class="fe fe-moon"></i>
                            </span>
                            <span class="light-layout">
                              <i class="fe fe-sun"></i>
                            </span>
                          </a>
                        </div>

                        <div class="dropdown d-flex">
                          <a class="nav-link icon full-screen-link nav-link-bg">
                            <i class="fe fe-minimize fullscreen-button"></i>
                          </a>
                        </div>

                        <div class="dropdown  d-flex notifications">
                          <a class="nav-link icon" data-bs-toggle="dropdown">
                            <i class="fe fe-bell"></i>
                            <span class="pulse"></span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <div class="drop-heading border-bottom">
                              <div class="d-flex">
                                <h6 class="mt-1 mb-0 fs-16 fw-semibold text-dark">
                                  Notifications
                                </h6>
                              </div>
                            </div>
                            <div class="notifications-menu">
                              <a
                                class="dropdown-item d-flex"
                                href="notify-list.html"
                              >
                                <div class="me-3 notifyimg  bg-primary brround box-shadow-primary">
                                  <i class="fe fe-mail"></i>
                                </div>
                                <div class="mt-1 wd-80p">
                                  <h5 class="notification-label mb-1">
                                    New Application received
                                  </h5>
                                  <span class="notification-subtext">
                                    3 days ago
                                  </span>
                                </div>
                              </a>
                              <a
                                class="dropdown-item d-flex"
                                href="notify-list.html"
                              >
                                <div class="me-3 notifyimg  bg-secondary brround box-shadow-secondary">
                                  <i class="fe fe-check-circle"></i>
                                </div>
                                <div class="mt-1 wd-80p">
                                  <h5 class="notification-label mb-1">
                                    Project has been approved
                                  </h5>
                                  <span class="notification-subtext">
                                    2 hours ago
                                  </span>
                                </div>
                              </a>
                              <a
                                class="dropdown-item d-flex"
                                href="notify-list.html"
                              >
                                <div class="me-3 notifyimg  bg-success brround box-shadow-success">
                                  <i class="fe fe-shopping-cart"></i>
                                </div>
                                <div class="mt-1 wd-80p">
                                  <h5 class="notification-label mb-1">
                                    Your Product Delivered
                                  </h5>
                                  <span class="notification-subtext">
                                    30 min ago
                                  </span>
                                </div>
                              </a>
                              <a
                                class="dropdown-item d-flex"
                                href="notify-list.html"
                              >
                                <div class="me-3 notifyimg bg-pink brround box-shadow-pink">
                                  <i class="fe fe-user-plus"></i>
                                </div>
                                <div class="mt-1 wd-80p">
                                  <h5 class="notification-label mb-1">
                                    Friend Requests
                                  </h5>
                                  <span class="notification-subtext">
                                    1 day ago
                                  </span>
                                </div>
                              </a>
                            </div>
                            <div class="dropdown-divider m-0"></div>
                            <a
                              href="notify-list.html"
                              class="dropdown-item text-center p-3 text-muted"
                            >
                              View all Notification
                            </a>
                          </div>
                        </div>

                        <div class="dropdown  d-flex message">
                          <a
                            class="nav-link icon text-center"
                            data-bs-toggle="dropdown"
                          >
                            <i class="fe fe-message-square"></i>
                            <span class="pulse-danger"></span>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <div class="drop-heading border-bottom">
                              <div class="d-flex">
                                <h6 class="mt-1 mb-0 fs-16 fw-semibold text-dark">
                                  You have 5 Messages
                                </h6>
                                <div class="ms-auto">
                                  <a
                                    href="javascript:void(0)"
                                    class="text-muted p-0 fs-12"
                                  >
                                    make all unread
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="message-menu">
                              <a class="dropdown-item d-flex" href="chat.html">
                                <span
                                  class="avatar avatar-md brround me-3 align-self-center cover-image"
                                  data-bs-image-src="~/assets/images/users/1.jpg"
                                ></span>
                                <div class="wd-90p">
                                  <div class="d-flex">
                                    <h5 class="mb-1">Peter Theil</h5>
                                    <small class="text-muted ms-auto text-end">
                                      6:45 am
                                    </small>
                                  </div>
                                  <span>Commented on file Guest list....</span>
                                </div>
                              </a>
                              <a class="dropdown-item d-flex" href="chat.html">
                                <span
                                  class="avatar avatar-md brround me-3 align-self-center cover-image"
                                  data-bs-image-src="~/assets/images/users/15.jpg"
                                ></span>
                                <div class="wd-90p">
                                  <div class="d-flex">
                                    <h5 class="mb-1">Abagael Luth</h5>
                                    <small class="text-muted ms-auto text-end">
                                      10:35 am
                                    </small>
                                  </div>
                                  <span>New Meetup Started......</span>
                                </div>
                              </a>
                              <a class="dropdown-item d-flex" href="chat.html">
                                <span
                                  class="avatar avatar-md brround me-3 align-self-center cover-image"
                                  data-bs-image-src="~/assets/images/users/12.jpg"
                                ></span>
                                <div class="wd-90p">
                                  <div class="d-flex">
                                    <h5 class="mb-1">Brizid Dawson</h5>
                                    <small class="text-muted ms-auto text-end">
                                      2:17 pm
                                    </small>
                                  </div>
                                  <span>Brizid is in the Warehouse...</span>
                                </div>
                              </a>
                              <a class="dropdown-item d-flex" href="chat.html">
                                <span
                                  class="avatar avatar-md brround me-3 align-self-center cover-image"
                                  data-bs-image-src="~/assets/images/users/4.jpg"
                                ></span>
                                <div class="wd-90p">
                                  <div class="d-flex">
                                    <h5 class="mb-1">Shannon Shaw</h5>
                                    <small class="text-muted ms-auto text-end">
                                      7:55 pm
                                    </small>
                                  </div>
                                  <span>New Product Realease......</span>
                                </div>
                              </a>
                            </div>
                            <div class="dropdown-divider m-0"></div>
                            <a
                              href="javascript:void(0)"
                              class="dropdown-item text-center p-3 text-muted"
                            >
                              See all Messages
                            </a>
                          </div>
                        </div>

                        <div class="dropdown d-flex profile-1">
                          <a
                            href="javascript:void(0)"
                            data-bs-toggle="dropdown"
                            class="nav-link leading-none d-flex"
                          >
                            <img
                              src="assets/images/users/nurseuserm.jpg"
                              alt="profile-user"
                              class="avatar  profile-user brround cover-image"
                            />
                          </a>
                          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <div class="drop-heading">
                              <div class="text-center">
                                <h5 class="text-dark mb-0 fs-14 fw-semibold">
                                  Olivia Harper
                                </h5>
                                <small class="text-muted">
                                  Registered nurse
                                </small>
                              </div>
                            </div>
                            <div class="dropdown-divider m-0"></div>
                            <a
                              class="dropdown-item"
                              href="Candidates/ProfileEdit"
                            >
                              <i class="dropdown-icon fe fe-user"></i> Profile
                            </a>

                            <a class="dropdown-item" href="Candidates/Login">
                              <i class="dropdown-icon fe fe-alert-circle"></i>{" "}
                              Sign out
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="sticky">
            <div class="app-sidebar__overlay" data-bs-toggle="sidebar"></div>
            <div class="app-sidebar">
              <div class="side-header">
                <a class="header-brand1" href="Candidates/MyDashboard">
                  <img
                    src="assets/images/brand/logo.png"
                    class="header-brand-img desktop-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/brand/logo-1.png"
                    class="header-brand-img toggle-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/brand/logo-2.png"
                    class="header-brand-img light-logo"
                    alt="logo"
                  />
                  <img
                    src="assets/images/brand/logo-3.png"
                    class="header-brand-img light-logo1"
                    alt="logo"
                  />
                </a>
              </div>

              <div class="main-sidemenu">
                <div class="slide-left disabled" id="slide-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                  </svg>
                </div>
                <ul class="side-menu">
                  <li class="sub-category">
                    <h3>Main</h3>
                  </li>
                  <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide">
                      <i class="side-menu__icon fe fe-home"></i>
                      <a
                        class="side-menu__label btn-over"
                        onClick={() => navigate("/home")}
                      >
                        Dashboard
                      </a>
                    </a>
                  </li>
                  <li class="sub-category">
                    <h3>Profilet</h3>
                  </li>
                  <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide">
                      <i class="side-menu__icon fe fe-layers"></i>
                      <span
                        class="side-menu__label btn-over"
                        onClick={() => navigate("/CreateUser")}
                      >
                        Create User
                      </span>
                    </a>
                  </li>
                  <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide">
                      <i class="side-menu__icon fe fe-layers"></i>
                      <span
                        class="side-menu__label btn-over"
                        onClick={() => navigate("/UserLists")}
                      >
                        User Lists
                      </span>
                    </a>
                  </li>
                  <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide">
                      <i class="side-menu__icon fe fe-layers"></i>
                      <span
                        class="side-menu__label btn-over"
                        onClick={() => navigate("/CreateProject")}
                      >
                        Create Project
                      </span>
                    </a>
                  </li>

                  <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide">
                      <i class="side-menu__icon fe fe-layers"></i>
                      <span
                        class="side-menu__label btn-over"
                        onClick={() => navigate("/ProjectLists")}
                      >
                        Project Lists
                      </span>
                    </a>
                  </li>
                  <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide">
                      <i class="side-menu__icon fe fe-layers"></i>
                      <span
                        class="side-menu__label btn-over"
                        onClick={() => navigate("/CreateTask")}
                      >
                        Create Task
                      </span>
                    </a>
                  </li>
                  <li class="slide">
                    <a class="side-menu__item" data-bs-toggle="slide">
                      <i class="side-menu__icon fe fe-layers"></i>
                      <span
                        class="side-menu__label btn-over"
                        onClick={() => navigate("/TaskLists")}
                      >
                        Task Lists
                      </span>
                    </a>
                  </li>
                </ul>
                <div class="slide-right" id="slide-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#7b8191"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div class="main-content app-content mt-0">
            <div class="side-app">
              <div class="row">
                <div class="col-xl-12">
                  <div class="card">
                    <div class="card-body"></div>
                  </div>
                </div>
              </div>
              <div class="row m-3">
                {/* <Routes> */}
                  {/* <Route path="/home" element={<Home />} /> */}
                  {/* <Route path="/CreateUser" element={<CreateUser />} />
                   <Route path="/UserLists" element={<UserLists />} /> 
                  <Route path="/CreateProject" element={<CreateProject />} />
                  <Route path="/ProjectLists" element={<ProjectLists />} />
                  <Route path="/CreateTask" element={<CreateTask />} />
                  <Route path="/TaskLists" element={<TaskLists />} /> 
                </Routes> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="sidebar sidebar-right sidebar-animate">
        <div class="panel panel-primary card mb-0 shadow-none border-0">
          <div class="tab-menu-heading border-0 d-flex p-3">
            <div class="card-title mb-0">
              <i class="fe fe-bell me-2"></i>
              <span class=" pulse"></span>Notifications
            </div>
            <div class="card-options ms-auto">
              <a
                href="javascript:void(0);"
                class="sidebar-icon text-end float-end me-3 mb-1"
                data-bs-toggle="sidebar-right"
                data-target=".sidebar-right"
              >
                <i class="fe fe-x text-white"></i>
              </a>
            </div>
          </div>
          <div class="panel-body tabs-menu-body latest-tasks p-0 border-0">
            <div class="tabs-menu border-bottom">
              <ul class="nav panel-tabs">
                <li class="">
                  <a href="#side1" class="active" data-bs-toggle="tab">
                    <i class="fe fe-settings me-1"></i>Feeds
                  </a>
                </li>
                <li>
                  <a href="#side2" data-bs-toggle="tab">
                    <i class="fe fe-message-circle"></i> Chat
                  </a>
                </li>
                <li>
                  <a href="#side3" data-bs-toggle="tab">
                    <i class="fe fe-anchor me-1"></i>Timeline
                  </a>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div class="tab-pane active" id="side1">
                <div class="p-3 fw-semibold ps-5">Feeds</div>
                <div class="card-body pt-2">
                  <div class="browser-stats">
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle brround bg-primary-transparent">
                          <i class="fe fe-user text-primary"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">New user registered</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i class="fe fe-x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                          <i class="fe fe-shopping-cart text-secondary"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">New order delivered</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i class="fe fe-x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                          <i class="fe fe-bell text-danger"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">You have pending tasks</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i class="fe fe-x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                          <i class="fe fe-gitlab text-warning"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">New version arrived</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i class="fe fe-x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                          <i class="fe fe-database text-pink"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">Server #1 overloaded</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i class="fe fe-x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-info brround bg-info-transparent">
                          <i class="fe fe-check-circle text-info"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">New project launched</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                            <a href="javascript:void(0)">
                              <i class="fe fe-x"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="p-3 fw-semibold ps-5">Settings</div>
                <div class="card-body pt-2">
                  <div class="browser-stats">
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle brround bg-primary-transparent">
                          <i class="fe fe-settings text-primary"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">General Settings</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-secondary brround bg-secondary-transparent">
                          <i class="fe fe-map-pin text-secondary"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">Map Settings</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-danger brround bg-danger-transparent">
                          <i class="fe fe-headphones text-danger"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">Support Settings</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-warning brround bg-warning-transparent">
                          <i class="fe fe-credit-card text-warning"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">Payment Settings</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4">
                      <div class="col-sm-2 mb-sm-0 mb-3">
                        <span class="feeds avatar-circle avatar-circle-pink brround bg-pink-transparent">
                          <i class="fe fe-bell text-pink"></i>
                        </span>
                      </div>
                      <div class="col-sm-10 ps-sm-0">
                        <div class="d-flex align-items-end justify-content-between ms-2">
                          <h6 class="">Notification Settings</h6>
                          <div>
                            <a href="javascript:void(0)">
                              <i class="fe fe-settings me-1"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="side2">
                <div class="list-group list-group-flush">
                  <div class="pt-3 fw-semibold ps-5">Today</div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/2.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Addie Minstra
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Hey! there I' am available....{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/11.jpg"
                      >
                        <span class="avatar-status bg-success"></span>
                      </span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Rose Bush
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Okay...I will be waiting for you{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/10.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Claude Strophobia
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Hi we can explain our new project......{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/13.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Eileen Dover
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          New product Launching...{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/12.jpg"
                      >
                        <span class="avatar-status bg-success"></span>
                      </span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Willie Findit
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Okay...I will be waiting for you{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/15.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Manny Jah
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Hi we can explain our new project......{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/4.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Cherry Blossom
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Hey! there I' am available....
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="pt-3 fw-semibold ps-5">Yesterday</div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/7.jpg"
                      >
                        <span class="avatar-status bg-success"></span>
                      </span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Simon Sais
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          Schedule Realease......{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/9.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Laura Biding
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Hi we can explain our new project......{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/2.jpg"
                      >
                        <span class="avatar-status bg-success"></span>
                      </span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Addie Minstra
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          Contact me for details....
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/9.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Ivan Notheridiya
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Hi we can explain our new project......{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/14.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Dulcie Veeta
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          {" "}
                          Okay...I will be waiting for you{" "}
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/11.jpg"
                      ></span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Florinda Carasco
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          New product Launching...
                        </p>
                      </a>
                    </div>
                  </div>
                  <div class="list-group-item d-flex align-items-center">
                    <div class="me-2">
                      <span
                        class="avatar avatar-md brround cover-image"
                        data-bs-image-src="~/assets/images/users/4.jpg"
                      >
                        <span class="avatar-status bg-success"></span>
                      </span>
                    </div>
                    <div class="">
                      <a href="chat.html">
                        <div
                          class="fw-semibold text-dark"
                          data-bs-toggle="modal"
                          data-target="#chatmodel"
                        >
                          Cherry Blossom
                        </div>
                        <p class="mb-0 fs-12 text-muted">
                          cherryblossom@gmail.com
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tab-pane" id="side3">
                <ul class="task-list timeline-task">
                  <li class="d-sm-flex mt-4">
                    <div>
                      <i class="task-icon1"></i>
                      <h6 class="fw-semibold">
                        Task Finished
                        <span class="text-muted fs-11 mx-2 fw-normal">
                          09 July 2021
                        </span>
                      </h6>
                      <p class="text-muted fs-12">
                        Adam Berry finished task on
                        <a href="javascript:void(0)" class="fw-semibold">
                          {" "}
                          Project Management
                        </a>
                      </p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                      <a href="javascript:void(0)" class="text-muted me-2">
                        <span class="fe fe-edit"></span>
                      </a>
                      <a href="javascript:void(0)" class="text-muted">
                        <span class="fe fe-trash-2"></span>
                      </a>
                    </div>
                  </li>
                  <li class="d-sm-flex">
                    <div>
                      <i class="task-icon1"></i>
                      <h6 class="fw-semibold">
                        New Comment
                        <span class="text-muted fs-11 mx-2 fw-normal">
                          05 July 2021
                        </span>
                      </h6>
                      <p class="text-muted fs-12">
                        Victoria commented on Project{" "}
                        <a href="javascript:void(0)" class="fw-semibold">
                          {" "}
                          AngularJS Template
                        </a>
                      </p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                      <a href="javascript:void(0)" class="text-muted me-2">
                        <span class="fe fe-edit"></span>
                      </a>
                      <a href="javascript:void(0)" class="text-muted">
                        <span class="fe fe-trash-2"></span>
                      </a>
                    </div>
                  </li>
                  <li class="d-sm-flex">
                    <div>
                      <i class="task-icon1"></i>
                      <h6 class="fw-semibold">
                        New Comment
                        <span class="text-muted fs-11 mx-2 fw-normal">
                          25 June 2021
                        </span>
                      </h6>
                      <p class="text-muted fs-12">
                        Victoria commented on Project{" "}
                        <a href="javascript:void(0)" class="fw-semibold">
                          {" "}
                          AngularJS Template
                        </a>
                      </p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                      <a href="javascript:void(0)" class="text-muted me-2">
                        <span class="fe fe-edit"></span>
                      </a>
                      <a href="javascript:void(0)" class="text-muted">
                        <span class="fe fe-trash-2"></span>
                      </a>
                    </div>
                  </li>
                  <li class="d-sm-flex">
                    <div>
                      <i class="task-icon1"></i>
                      <h6 class="fw-semibold">
                        Task Overdue
                        <span class="text-muted fs-11 mx-2 fw-normal">
                          14 June 2021
                        </span>
                      </h6>
                      <p class="text-muted mb-0 fs-12">
                        Petey Cruiser finished task{" "}
                        <a href="javascript:void(0)" class="fw-semibold">
                          {" "}
                          Integrated management
                        </a>
                      </p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                      <a href="javascript:void(0)" class="text-muted me-2">
                        <span class="fe fe-edit"></span>
                      </a>
                      <a href="javascript:void(0)" class="text-muted">
                        <span class="fe fe-trash-2"></span>
                      </a>
                    </div>
                  </li>
                  <li class="d-sm-flex">
                    <div>
                      <i class="task-icon1"></i>
                      <h6 class="fw-semibold">
                        Task Overdue
                        <span class="text-muted fs-11 mx-2 fw-normal">
                          29 June 2021
                        </span>
                      </h6>
                      <p class="text-muted mb-0 fs-12">
                        Petey Cruiser finished task{" "}
                        <a href="javascript:void(0)" class="fw-semibold">
                          {" "}
                          Integrated management
                        </a>
                      </p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                      <a href="javascript:void(0)" class="text-muted me-2">
                        <span class="fe fe-edit"></span>
                      </a>
                      <a href="javascript:void(0)" class="text-muted">
                        <span class="fe fe-trash-2"></span>
                      </a>
                    </div>
                  </li>
                  <li class="d-sm-flex">
                    <div>
                      <i class="task-icon1"></i>
                      <h6 class="fw-semibold">
                        Task Finished
                        <span class="text-muted fs-11 mx-2 fw-normal">
                          09 July 2021
                        </span>
                      </h6>
                      <p class="text-muted fs-12">
                        Adam Berry finished task on
                        <a href="javascript:void(0)" class="fw-semibold">
                          {" "}
                          Project Management
                        </a>
                      </p>
                    </div>
                    <div class="ms-auto d-md-flex me-3">
                      <a href="javascript:void(0)" class="text-muted me-2">
                        <span class="fe fe-edit"></span>
                      </a>
                      <a href="javascript:void(0)" class="text-muted">
                        <span class="fe fe-trash-2"></span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="container">
          <div class="row align-items-center flex-row-reverse">
            <div class="col-lg-10 col-md-12 col-sm-12 text-center">
              Copyright © 2022 . Powered by Dynamicbiz All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}



// import { useEffect, useState } from "react";
// // import { Home } from "./Pages/Home/Home";
// import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
// import { CreateProject } from "..";
// import Router from "../../Router";
// import CreateUser from "../CreateUser/CreateUser";
// import ProjectLists from "../ProjectLists/ProjectLists";
// import UserLists from "../UserLists/UserLists";
// // import { CreateUser } from "./Pages/Create User/CreateUser";
// // import { UserLists } from "./Pages/Users Listing/UserLists";
// // import { CreateProject } from "./Pages/Create Project/CreateProject";
// // import { ProjectLists } from "../src/Pages/Project Listing/ProjectLists";
// // import { CreateTask } from "./Pages/Create Task/CreateTask";
// // import { TaskLists } from "./Pages/Task Listing/TaskLists";

// const Dashboard = () => {
//   const navigate = useNavigate();

//   return (
   
//   );
// };


export default HomePage;