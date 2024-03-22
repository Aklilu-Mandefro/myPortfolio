import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);

  const navItems = [];

  const { asPath } = useRouter();

  appData.header.menu.forEach((item, index) => {
    let s_class1 = '';

    if ( item.children != 0 ) {
      s_class1 = 'mil-has-children';
    }
    if ( ( asPath.indexOf( item.link ) != -1 && item.link != '/' ) || asPath == item.link ) {
      s_class1 += ' mil-active';
    }
    let newobj = Object.assign({}, item, { "classes" :  s_class1 });
    navItems.push(newobj);
  });

  return (
    <>
    
    {/* top bar */}
    <div className="mil-top-panel">

        {/* You need to remove the "mil-dot" class if you don't need a dot */}
        <Link href="#" className="mil-logo1">
          {/* <span>{appData.header.logo.symbol}</span> */}
        </Link>

        <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
            <nav id="swupMenu" className="mil-menu-transition">
                <ul>
                    {navItems.map((item, key) => (
                    <li className={item.classes} key={`header-menu-item-${key}`}>
                        <a href={item.link}>{item.label}</a>
                        {item.children != 0 &&
                        <ul>
                            {item.children.map((subitem, key2) => (
                            <li key={`header-submenu${key}-item-${key2}`}><Link href={subitem.link}>{subitem.label}</Link></li>
                            ))}
                        </ul>
                        }
                    </li>
                    ))}
                </ul>
            </nav>
        </div>

        <div className="mil-top-panel-btns">
            <Link href={appData.header.button.link} className="mil-contact-btn1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            </Link>

            <div 
              className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
              onClick={() => setToggle(!toggle)}
            >
                <span />
            </div>
        </div>

    </div>
    {/* top bar end */}

    </>
  );
};
export default DefaultHeader;
