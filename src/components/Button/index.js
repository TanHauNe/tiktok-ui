import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
   to,
   href,
   primary,
   outline,
   text,
   round,
   disable,
   children,
   small,
   large,
   onClick,
   leftIcon,
   rightIcon,
   className,
   ...passProps
}) {
   let Comp = 'button';
   const props = {
      onClick,
      ...passProps,
   };

   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }

   const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      text,
      small,
      large,
      disable,
      round,
   });

   if (disable) {
      delete props.onClick;
   }

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
