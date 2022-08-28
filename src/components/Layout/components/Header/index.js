import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, /*faSpinner,*/ faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';
import Wrapper from '~/components/Popper/Wrapper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
   const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 0);
   }, []);

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt=""></img>
            </div>
            <Tippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <Wrapper>
                        <h4 className={cx('search-title')}>
                          Accounts
                        </h4>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                        <AccountItem></AccountItem>
                     </Wrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search accounts and videos" spellCheck={false} />
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                  </button>
                  {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon> */}
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
                  </button>
               </div>
            </Tippy>
            <div className={cx('action')}></div>
         </div>
      </header>
   );
}

export default Header;
