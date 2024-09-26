import express from 'express';

const router = express.Router();

// 1. mongoose 가져오기
import mongoose from 'mongoose';
import Goods from '../schemas/goods.js'

// 2. API를 구현합니다.
router.post('/goods', async(req, res) => {
    // 3. 클라이언트로 부터 전달받은 데이터를 가져옵니다.
    // goodsId, name, thumbnailUrl, category, price
    const {goodsId, name, thumbnailUrl, category, price} = req.body;

    // 4. goodsId 중복되지 않았는지 검사합니다. 실제로 MongoDB에 데이터가 이미 있는지 확인합니다.
    const goods = await Goods.find({goodsId: goodsId}).exec(); // promis형태를 반환해주어 await으로 비동기적인 움직임을 나타내기에 exec()를 씁니다. 그래서 MongoDB에서 정상적으로 데이터를 받아오기위해 비동기적으로 안전하게 받아와야 합니다.
    // exec()데이터를 생성할 때는 사용이 안되고 조회할때 사용합니다.

    // 4-1. 만약, goodsId가 중복된다면, 에러메시지를 전달합니다.
    if(goods.length) {
        return res.status(400).json({errorMessage : '이미 존재하는 데이터입니다.'});
    }

    // 5. 상품(Goods)를 생성합니다.
    const createdGoods = await Goods.create({
        goodsId : goodsId,
        name : name,
        thumbnailUrl : thumbnailUrl,
        category : category,
        price : price,
    })

    // 6. 생성된 상품 정보를 클라이언트에게 응답(Response)반환합니다.
    return res.status(201).json({goods: createdGoods});

})

export default router;
