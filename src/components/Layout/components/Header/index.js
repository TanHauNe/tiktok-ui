import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleQuestion,
   faCloudUpload,
   faCoins,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faLanguage,
   faMagnifyingGlass,
   faMessage,
   faSignOut,
   faUser,
   /*faSpinner,*/ faXmark,
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useState, useEffect } from 'react';
import Wrapper from '~/components/Popper/Wrapper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               code: 'en',
               title: 'English',
            },
            {
               code: 'vi',
               title: 'Vietnamese',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
      title: 'Keyboard shortcut',
   },
];

const handleMenuChange = (menuItem) => {
   console.log(menuItem);
};

const currentUser = true;

const userMenu = [
   {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: 'View profile',
      to: '/@hoaa.hana',
   },
   {
      icon: <FontAwesomeIcon icon={faCoins}></FontAwesomeIcon>,
      title: 'Get coins',
      to: '/coin',
   },
   {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: 'Setting',
      to: '/setting',
   },
   ...MENU_ITEMS,
   {
      icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
      title: 'Log out',
      to: '/logout',
      separate: true,
   },
];

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
            <HeadlessTippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <Wrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
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
            </HeadlessTippy>

            <div className={cx('action')}>
               {currentUser ? (
                  <div className={cx('current-user')}>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                        </button>
                     </Tippy>
                  </div>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}

               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <img
                        className={cx('user-avatar')}
                        src="data:image/jpeg;base64,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"
                        alt=""
                     ></img>
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
