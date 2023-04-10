import Link from "next/link";
import { useSelector } from "react-redux";

const HomeCourses = () => {
  // allCoursesItems
  const allCoursesItems = useSelector((state) => state.courses.allCourses);
  // status
  const status = useSelector((state) => state.courses.status);
  // loader
  if (status === "pending") {
    return (
      <div id="loading">
        <div id="loading-center">
          <div id="loading-center-absolute">
            <svg id="loader">
              <path
                id="corners"
                d="m 0 12.5 l 0 -12.5 l 50 0 l 0 50 l -50 0 l 0 -37.5"
              />
            </svg>
            <img src="assets/img/favicon.png" alt="" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="course__area pt-115 pb-90 grey-bg-3">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="section__title-wrapper text-center mb-60">
                <span className="section__title-pre">Top Courses</span>
                <h2 className="section__title section__title-44">
                  Our Featured Courses
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing aelit, sed
                  do eiusmod
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {allCoursesItems.slice(0, 6).map((course) => {
              return (
                <div
                  key={course?._id}
                  className="col-xxl-4 col-xl-4 col-lg-6 col-md-6"
                >
                  <div className="course__item white-bg transition-3 mb-30 rounded">
                    <div className="course__thumb w-img fix course_thumb_height">
                      <Link href={`${course.url}`}>
                        <a>
                          <img
                            src={course?.img_bg}
                            alt=""
                            className="rounded"
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="course__content p-relative">
                      <div className="course__tag">
                        <Link href={`${course.url}`}>
                          <a className="rounded">{course?.category}</a>
                        </Link>
                      </div>
                      <h3 className="course__title">
                        <Link href={`${course.url}`}>
                          <a>{course?.title?.substring(0, 30)}..</a>
                        </Link>
                      </h3>
                      <p>
                        A beginner’s guide to designing or renovating interior
                        spaces that pop.
                      </p>

                      <div className="course__bottom d-sm-flex align-items-center justify-content-between">
                        <div className="course__lesson">
                          <span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.86447 1.72209L7.74447 3.49644C7.86447 3.74343 8.18447 3.98035 8.45447 4.02572L10.0495 4.29288C11.0695 4.46426 11.3095 5.2103 10.5745 5.94625L9.33447 7.19636C9.12447 7.40807 9.00947 7.81637 9.07447 8.10873L9.42947 9.65625C9.70947 10.8812 9.06447 11.355 7.98947 10.7148L6.49447 9.82259C6.22447 9.66129 5.77947 9.66129 5.50447 9.82259L4.00947 10.7148C2.93947 11.355 2.28947 10.8761 2.56947 9.65625L2.92447 8.10873C2.98947 7.81637 2.87447 7.40807 2.66447 7.19636L1.42447 5.94625C0.694466 5.2103 0.929466 4.46426 1.94947 4.29288L3.54447 4.02572C3.80947 3.98035 4.12947 3.74343 4.24947 3.49644L5.12947 1.72209C5.60947 0.759304 6.38947 0.759304 6.86447 1.72209Z"
                                stroke="#5F6160"
                                strokeWidth="1.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {course.review}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCourses;
