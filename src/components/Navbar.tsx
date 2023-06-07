import { useContext, useEffect, useRef, useState, } from 'react'
import {Link} from 'react-router-dom';
import '../assets/css/App.css'
import NavContext from '../context/NavContext';

function Navbar() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const navContext = useContext(NavContext);

  /**
  * rerender [this] component each time the window width changes
  */
  useEffect(() => {
    if (windowWidth > 600)
      document.body.style.overflow = 'auto';
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    navContext.ref = sidebarRef;
    navContext.show = showSidebar;
    navContext.hide = hideSidebar;
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [navContext, windowWidth]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      (window.scrollY > 100)
        ? scrollRef.current?.classList.add('scrolled')
        : scrollRef.current?.classList.remove('scrolled')
    });
    return () => {
      window.removeEventListener('scroll', () => {
      });
    }
  }, []);

  const showSidebar = () => {
    sidebarRef.current?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  const hideSidebar = () => {
    sidebarRef.current?.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  return (
    <div ref={scrollRef} className="Navbar dflex djcsa dalc bgt dposf dt0 dl0 w-100 ">
      <Link to="/" className='d-inline-block t3 dtdn ' >
        <h4 className="fw-bold">Me.js</h4>
      </Link>
      {
        (window.innerWidth < 600)
          ? < button className="fas fa-bars t3 h1 bgt dtdn doutn dborn" onClick={showSidebar}></button>
          : <nav className="dflex">
            <Link className='d-inline-block t3 dtdn px-3' to="/">Home</Link>
            <Link className='d-inline-block t3 dtdn px-3' to="$">Blog</Link>
            <Link className='d-inline-block t3 dtdn px-3' to="/about">About</Link>
          </nav>
      }
      {
        (window.innerWidth < 600) &&
        <div className='dposf dt0 sidebar dflex djcsa py-4' ref={sidebarRef}>
          <div className="col-10 dflex dfdc ps-3">
            <Link className='d-inline-block t3 dtdn py-2' to="/">Home</Link>
            <Link className='d-inline-block t3 dtdn py-2' to="$">Blog</Link>
            <Link className='d-inline-block t3 dtdn py-2' to="/about">About</Link>
          </div>
          <div className="col-2 dflex justify-content-end pe-3 align-items-start">

            <button className="fas fa-times t3 h1 bgt dtdn doutn dborn" onClick={hideSidebar}></button>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar
