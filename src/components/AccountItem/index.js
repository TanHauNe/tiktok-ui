import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1662055200&x-signature=TLLq3XLikfIpjnGBy19SYtx7zVg%3D"
            alt=""
         ></img>
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>hoaa.hana</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
            </h4>
            <span className={cx('username')}>Dao Le Phuong Hoa</span>
         </div>
      </div>
   );
}

export default AccountItem;
