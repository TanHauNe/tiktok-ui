import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   const renderItems = () => {
      return items.map((item, index) => {
         return <MenuItem key={index} data={item} />;
      });
   };

   return (
      <Tippy
         interactive
         placement="bottom-end"
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <Wrapper className={cx('menu-popper')}>{renderItems()}</Wrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
