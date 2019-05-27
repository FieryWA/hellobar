import React from 'react';
import { Link } from 'react-router';
import { Menu, Breadcrumb } from 'antd';
import style from '../styles/home-layout.less';

const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class HomeLayout extends React.Component {
  render () {
    const {children} = this.props;
    return (
      <div className={style.box}>
        <header className={style.header}>
          <a><Link to="/">BRAINS</Link></a>
        </header>
        <div className={style.Bread}>
        <Breadcrumb>
        <Breadcrumb.Item>BRAINS</Breadcrumb.Item>
        </Breadcrumb>
        </div>
        <main className={style.main}>
          <div className={style.menu}>
          <div className={style.top}>
          <span>BRAINS</span>
          </div>
            <Menu mode="inline" style={{width: '240px'}}>
                <MenuItem key="mainmemu">
                  <Link to="/">メインメニユー</Link>
                </MenuItem>
                <MenuItem key="T3">
                  <Link to="/t3">T3帳票入力</Link>
                </MenuItem>
                <MenuItem key="T4">
                  <Link to="/t4">T4帳票入力</Link>
                </MenuItem>
                <MenuItem key="major">
                  <Link to="/major">入力帳票照会</Link>
                </MenuItem>
                <MenuItem key="bupdate">
                  <Link to="/bupdate">ビリングマスター更新</Link>
                </MenuItem>
                <MenuItem key="bask">
                  <Link to="/bask">ビリングマスター照会</Link>
                </MenuItem>
            </Menu>
          </div>

          <div className={style.content}>
              {children}
          </div>
        </main>
      </div>
    );
  }
}

export default HomeLayout;
