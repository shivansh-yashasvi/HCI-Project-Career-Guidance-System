import Link from "next/link";

const Features = () => {
  
  return (
    <>
      <section className="features__area pb-160">
        <div className="container">
          <div className="features__inner p-relative z-index-1 white-bg">
            <div className="row">

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="features__item features__border-right d-flex align-items-center white-bg">
                  <div className="features__icon mr-25">
                    <img src='assets/img/feature/feature-1.png' width={65} />
                  </div>
                  <div className="features__content">
                    <h3 className="features__title">Creative Thinking</h3>
                    <p>Add wings to your ideas and fly as a thinker</p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="features__item features__border-right d-flex align-items-center white-bg">
                  <div className="features__icon mr-25">
                    <img src='assets/img/feature/feature-2.png' width={65} />
                  </div>
                  <div className="features__content">
                    <h3 className="features__title">Upskilling</h3>
                    <p>Learn how to boost your career with relevant courses</p>
                  </div>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 d-flex justify-content-center">
                <div className="features__item d-flex align-items-center white-bg">
                  <div className="features__icon mr-25">
                    <img src='assets/img/feature/feature-3.png' width={65} />
                  </div>
                  <div className="features__content">
                    <h3 className="features__title">Career Planning</h3>
                    <p>Learn how to shape your career by talking to our chatbot</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
