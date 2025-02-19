import React, {useEffect, useState, useRef} from 'react'
import "./Landing.css"
const Hero = () => {
  const [menu, setMenu] = useState(1);
  const handleSetMenu1 = () => {
    setMenu(1);
  }
  const handleSetMenu2 = () => {
    setMenu(2);
  }
  const handleSetMenu3 = () => {
    setMenu(3);
  }

  const [currentMenu, setCurrentMenu] = useState(1);
  const prevMenuRef = useRef(1); // Use useRef to track the previous menu
  const imgRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMenu((prevMenu) => {
        if (prevMenu === 3) {
          return 1;
        } else {
          return prevMenu + 1;
        }
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentMenu !== prevMenuRef.current) {
      prevMenuRef.current = currentMenu;

      if (imgRef.current) {
        imgRef.current.classList.remove('hero-img-animation-1', 'hero-img-animation-2', 'hero-img-animation-3', 'active'); // Remove all classes
        imgRef.current.classList.add(`hero-img-animation-${currentMenu}`); 
      }

      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.classList.add('active'); 
        }
        setMenu(currentMenu); 
      }, 500); 
    }
  }, [currentMenu]);

  return (
    <div className="hero">
    <section className="wide">
      <div className="row">
        <div className="col l-6 p-4 hero-img">
          <img 
            src={menu === 1 
              ? "https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh1.png?alt=media&token=a117758e-b056-444b-b09a-c2746ca7ea84" 
              : menu === 2 
                ? "https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh2.png?alt=media&token=740d610e-85d0-4a35-a5ab-9f5bbb90667a" 
                : "https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh3.png?alt=media&token=0194ba1b-8e24-4035-8870-111234834154" 
            } 
            ref={imgRef}
          />
          {/* {menu === 1 &&
            <img src="https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh1.png?alt=media&token=a117758e-b056-444b-b09a-c2746ca7ea84" alt="" />
          }
          {menu === 2 &&
            <img src="https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh2.png?alt=media&token=740d610e-85d0-4a35-a5ab-9f5bbb90667a" alt="" />
          }
          {menu === 3 &&
            <img src="https://firebasestorage.googleapis.com/v0/b/huyennguyen-dev.appspot.com/o/Coding%2FQuatre-Crepes%2FProperty%201%3Dh3.png?alt=media&token=0194ba1b-8e24-4035-8870-111234834154" alt="" />
          } */}
        </div>
        <div className="col l-0-1 l-4 p-3 hero-menu">
          {menu === 1 && <>
            <h4>CREPES DAY</h4>
            <h1>Savory galettes <br />& sweets</h1>
            <p>Enjoy unique crepes based on French recipes at a classic restaurant on the banks of the Red River, right in the heart of the capital Hanoi.
            </p>
          </>}
          {menu === 2 && <>
            <h4>SPECIALS-DAY</h4>
            <h1>Traditional <br />des bonnes crêpes</h1>
            <p>Enjoy unique crepes based on French recipes at a classic restaurant on the banks of the Red River, right in the heart of the capital Hanoi.
            </p>
          </>}
          {menu === 3 && <>
            <h4>FULL-TOPPINGS</h4>
            <h1>Spices, mixes <br />& more dressings</h1>
            <p>Enjoy unique crepes based on French recipes at a classic restaurant on the banks of the Red River, right in the heart of the capital Hanoi.
            </p>
          </>}
          <div className="row hero-circle-row">
            <div className="hero-circle" onClick={handleSetMenu1}>
              <img src="https://images.unsplash.com/photo-1667902687249-0dfe266a3b2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className={`herobtn ${menu === 1 ? 'active' : ''}`}
              />
            </div>
            <div className="hero-circle" onClick={handleSetMenu2}>
              <img src="https://images.unsplash.com/photo-1609501885647-9cf9deffdb23?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className={`herobtn ${menu === 2 ? 'active' : ''}`}
              />
            </div>
            <div className="hero-circle" onClick={handleSetMenu3}>
              <img src="https://images.unsplash.com/photo-1582995570162-9dee25247fda?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
                className={`herobtn ${menu === 3 ? 'active' : ''}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero