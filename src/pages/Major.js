import React from 'react';
import style from '../styles/major-page.less';
import FormPage from '../components/FormPage';
import TablePage from '../components/TablePage';

class Major extends React.Component {
  render () {
    return (
      <div>
      <div className={style.header}>入力帳票照会
      </div>
      <hr style={{'align':'center','size':'10'}}></hr>
      <div className={style.second}>入力帳票照会
      </div>
      <div className={style.spppp}>T3 T4/D74 'num' 'name' X36D</div>
      <FormPage/>
      <div className={style.third}>
      <h5>のついているKeyは曖昧検索が可能です</h5>
      <hr style={{'align':'center','size':'10'}}></hr>
      入力帳票照会
      </div>
      <TablePage/>
      </div>
    );
  }
}

export default Major;
