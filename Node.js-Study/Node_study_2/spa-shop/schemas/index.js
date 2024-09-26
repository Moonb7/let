// /schemas/index.js

import mongoose from 'mongoose';

// 몽고db와 연결하여 직접 커넥트 할 수 있게 함수 지정
const connect = () => {
  mongoose
    .connect(
      '몽고DB연결 주소',
      {
        dbName: 'spa_mall', // spa_mall 데이터베이스명을 사용합니다.
      },
    )
    .catch((err) => console.log(err))
    .then(() => console.log('몽고디비 연결 성공'));
};

mongoose.connection.on('error', (err) => {
  console.error('몽고디비 연결 에러', err);
});

export default connect;
