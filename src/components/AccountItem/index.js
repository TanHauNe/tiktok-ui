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
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_300x300.webp?x-expires=1661882400&x-signature=wb1bCVr%2FUqcAHRcQKijnCRtKOf0%3D"
            alt=""
         ></img>
         <div className={cx('info')}>
            <h4 className={cx('name')}>
               <span>Dao Le Phuong Hoa</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
            </h4>
            <span className={cx('username')}>hoaa.na</span>
         </div>
      </div>
   );
}

export default AccountItem;
