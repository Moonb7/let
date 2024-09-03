import express from 'express';

const router = express.Router();

// /routes/goods.js

const goods = [
  {
    goodsId: 1,
    name: '상품 1',
    thumbnailUrl: 'https://cdn.pixabay.com/photo/2016/09/07/19/54/wines-1652455_1280.jpg',
    category: 'drink',
    price: 6.2,
  },
  {
    goodsId: 2,
    name: '상품 2',
    thumbnailUrl: 'https://cdn.pixabay.com/photo/2014/08/26/19/19/wine-428316_1280.jpg',
    category: 'drink',
    price: 0.11,
  },
  {
    goodsId: 3,
    name: '상품 3',
    thumbnailUrl: 'https://cdn.pixabay.com/photo/2016/09/07/02/12/frogs-1650658_1280.jpg',
    category: 'drink',
    price: 2.2,
  },
  {
    goodsId: 4,
    name: '상품 4',
    thumbnailUrl: 'https://cdn.pixabay.com/photo/2016/09/07/02/11/frogs-1650657_1280.jpg',
    category: 'drink',
    price: 0.1,
  },
];

/**  상품 목록 조회 API **/
// localhost:3000/api/goods
// app.js에서 app.use를 통해 /api 다음 라우트가 등록되어 /api/goods를 통해 이 API를 사용할 수 있습니다.
// 추가로 status는 기본적으로 200을 반환해 줍니다.
router.get('/goods', (req, res) => {
  return res.status(200).json({
    goods: goods,
  });
});

/**  상품 상세 조회 **/
// localhost:3000/api/goods/:goodsId
router.get('/goods/:goodsId', (req, res) => {
  // 1. 상품의 id 조회하고
  // 2. 상품 id와 일치하는 데이터를 찾고,
  // 3. 조회된 상품 정보를 Response로 Return한다.

  // 받은 매개변수 등록
  const goodsId = req.params.goodsId;

  // 상품 id와 일치하는 데이터 찾기
  const findGoods = goods.find((oneGoods) => oneGoods.goodsId === +goodsId);

  // 조회한 상품 정보 응답해주기
  return res.status(200).json({ goods: findGoods });
});

/** 상품 등록 API **/
// localhost:3000/api/goods/
router.post('/goods', (req, res) => {
  // 1. name, thumbnailUrl, category, price를 req.body로 전달받는다.
  // 2. 해당하는 데이터를 바탕으로 상품을 등록한다.
  // 3. 등록된 상품 데이터를 클라이언트에게 반환한다.

  // 자바스크립트로 객체 구조 분해 할당을 해줄수 있습니다. // 리펙토링
  const { name, thumbnailUrl, category, price } = req.body;
  // const name = req.body.name;
  // const thumbnailUrl = req.body.thumbnailUrl;
  // const category = req.body.category;
  // const price = req.body.price;

  // +1된 goodsId를 가져온다.
  const goodsId = goods[goods.length - 1].goodsId + 1;

  // 객체에 바로 변수이름의 키에 맞게 변수안에 값도 알아서 할당이 된다 // 리펙토링
  const goodsItem = {
    goodsId,
    name,
    thumbnailUrl,
    category,
    price,
  };
  // const goodsItem = {
  //   goodsId: goodsId,
  //   name: name,
  //   thumbnailUrl: thumbnailUrl,
  //   category: category,
  //   price: price,
  // };

  goods.push(goodsItem);

  return res.status(201).json({ goods: goodsItem });
});

export default router;
