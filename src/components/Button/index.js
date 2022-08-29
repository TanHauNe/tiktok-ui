import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ to, href, primary, outline, text, round, disable, children, small, large, onClick, ...passProps }) {
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
         <span>{children}</span>
      </Comp>
   );
}

export default Button;
