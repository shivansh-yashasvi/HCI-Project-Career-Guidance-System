import Link from 'next/link';
import Swal from 'sweetalert2';

const Footer = ({ white_bg = '' }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch("http://localhost:8000/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: event.target.email.value
        }),
      });
      if (res.status === 200) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Added Successfully',
       })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Server Error occured',
       })
      }
    } catch (err) {
      console.log(err);
    }
  }
   return ( 
      <>
         <footer>
            <div className="footer__area">
               <div className={`footer__top grey-bg-4 pt-55 pb-5 ${white_bg && white_bg}`}>
                  <div className="container">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-1 mb-50">
                              <div className="footer__logo">
                                 <div className="logo">
                                    <Link href="/">
                                       <a>
                                          <img src="assets/img/logo/logo.png" alt="" />
                                       </a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__widget-info">
                                    <p>Career Care is a platform to find optimal courses to upskill yourself and move ahead in your career</p>
                                    <div className="footer__social">
                                       <h4>Follow Us</h4>

                                       <ul>
                                          <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                                          <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                        <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-7">
                           <div className="footer__widget footer-col-4 mb-50">
                              <h3 className="footer__widget-title">Sign up for our newsletter</h3>

                              <div className="footer__subscribe">
                                 <p>Receive weekly newsletter with educational materials, popular books and much more!</p>
                                 <form onSubmit={handleSubmit}>
                                    <div className="footer__subscribe-input">
                                       <input type="text" name="email" placeholder="Email" />
                                       <button type="submit" className="tp-btn-subscribe">Subscribe</button>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className={`footer__bottom grey-bg-4 ${white_bg && white_bg}`}>
                  <div className="container">
                     <div className="footer__bottom-inner">
                        <div className="row">
                           <div className="col-xxl-12">
                              <div className="footer__copyright text-center">
                                 <p>Made with ❤️ by Shivansh Yashasvi </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;