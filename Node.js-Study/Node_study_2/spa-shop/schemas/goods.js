// 1. mongoose 가져오기
import mongoose from "mongoose";

// 2. 스키마 작성하기
const goodsSchema = new mongoose.Schema({
    goodsId : {          // 필드의 실제 사용될 데이터의 이름입니다.
        type : Number,   // 이 필드의 데이터 타입은 숫자타입 임을 나타냅니다.
        required : true, // 이 필드가 반드시 있어야 함을 나타냅니다.
        unique : true,   // 필드의 값은 고유한 값으로 나타내야된다를 의미합니다.
    },
    name : {          
        type : String,
        required : true, 
        unique : true,
    },
    thumbnailUrl : String, // 타입만 지정할 시 객체로 따로 지정하지 않아도 됩니다.
    category : String,
    price : Number,
})
// 3. 스키마를 통해 모델 구현하기
// 4. 모델 외부로 보내기
export default mongoose.model("Goods", goodsSchema);