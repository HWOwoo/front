import { Button, Card, Input, Label, Textarea } from "../../../component/ui/ui";
import s from "./newProduct.module.css";

export default function NewProductPage() {
  return (
    <div className={s.page}>
      <h1 className={s.h1}>상품 등록</h1>

      <Card title="상품 정보">
        <div className={s.grid}>
          <div className={s.row}>
            <Label>상품명</Label>
            <Input placeholder="예) 프리미엄 샴푸" />
          </div>
          <div className={s.row}>
            <Label>상품코드</Label>
            <Input placeholder="예) P-001" />
          </div>

          <div className={s.row}>
            <Label>가격</Label>
            <Input placeholder="예) 12000" />
          </div>
          <div className={s.row}>
            <Label>재고</Label>
            <Input placeholder="예) 30" />
          </div>

          <div className={s.row}>
            <Label>카테고리</Label>
            <Input placeholder="예) 생활/뷰티" />
          </div>
          <div className={s.row}>
            <Label>판매상태</Label>
            <Input placeholder="예) 판매중 / 판매중지" />
          </div>

          <div className={`${s.row} ${s.full}`}>
            <Label>상품 설명</Label>
            <Textarea placeholder="상품 설명을 입력하세요" />
          </div>
        </div>

        <div style={{ height: 12 }} />

        <div className={s.actions}>
          <Button variant="secondary">임시저장</Button>
          <Button>등록</Button>
        </div>
      </Card>
    </div>
  );
}
