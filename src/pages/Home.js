import React from 'react';
import style from '../styles/home-page.less';

class Home extends React.Component {
  render () {
    return (
      <div className={style.welcome}>
      <div className={style.header}>
      メインメニユー
      </div><br />
      1. T3帳票入力<br />
      2. T4帳票入力<br />
      3. 入力帳票照会<br />
      4. ビリングマスター更新<br />
      5. ビリングマスター照会<br />
      6. T3帳票入力(一括)<br />
      7. 一括帳票確認/検証/承認<br />
      8. 一括帳票照会<br />
      9. Cider Input<br />
      10. Cider Inout Reference<br />
      </div>
    );
  }
}

export default Home;
